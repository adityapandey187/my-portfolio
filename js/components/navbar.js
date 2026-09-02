/* =========================================================================
   navbar.js — Sticky navigation bar + mobile hamburger menu
   -------------------------------------------------------------------------
   Behaviour:
   - Sticks to the top of the page.
   - Gains a stronger blurred background once you scroll down.
   - Highlights the section you are currently viewing.
   - Collapses into a hamburger menu on small screens.
   ========================================================================= */

import { profile, navLinks } from "../data.js";
import { icon } from "../icons.js";

export function renderNavbar(mount) {
  // Build the list of links once from data.js
  const links = navLinks
    .map(
      (link, i) => `
      <li class="nav-item">
        <a class="nav-link${i === 0 ? " is-active" : ""}" href="#${link.id}" data-nav="${link.id}">
          ${link.label}
        </a>
      </li>`
    )
    .join("");

  mount.innerHTML = `
    <nav class="navbar" aria-label="Main navigation">
      <div class="container navbar-inner">

        <!-- Logo / name on the left -->
        <a class="brand" href="#home" aria-label="${profile.name} — back to top">
          <span class="brand-mark" aria-hidden="true">${profile.name.charAt(0)}</span>
          <span class="brand-text">
            <strong>${profile.name}</strong>
            <small>${profile.logoTag}</small>
          </span>
        </a>

        <!-- Desktop links -->
        <ul class="nav-list" id="nav-list">${links}</ul>

        <!-- Hamburger button (visible on mobile only) -->
        <button class="nav-toggle" id="nav-toggle" type="button"
                aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu">
          <span class="nav-toggle-icon" data-state="closed">${icon("menu")}</span>
        </button>
      </div>

      <!-- Mobile dropdown menu -->
      <div class="mobile-menu" id="mobile-menu" hidden>
        <ul class="mobile-list">${links}</ul>
      </div>
    </nav>
  `;

  setupNavInteractions(mount);
}

/* ---------------- Interactions ---------------- */
function setupNavInteractions(mount) {
  const navbar = mount.querySelector(".navbar");
  const toggle = mount.querySelector("#nav-toggle");
  const mobileMenu = mount.querySelector("#mobile-menu");
  const toggleIcon = mount.querySelector(".nav-toggle-icon");

  /* --- Open / close the mobile menu --- */
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    toggleIcon.innerHTML = open ? icon("close") : icon("menu");
    if (open) {
      mobileMenu.hidden = false;
      // Small delay so the CSS transition can run after `hidden` is removed
      requestAnimationFrame(() => mobileMenu.classList.add("is-open"));
    } else {
      mobileMenu.classList.remove("is-open");
      // Wait for the closing transition before hiding it from the layout
      setTimeout(() => {
        if (toggle.getAttribute("aria-expanded") === "false") mobileMenu.hidden = true;
      }, 260);
    }
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after tapping any link inside it
  mobileMenu.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => setMenu(false))
  );

  // Escape key closes the menu (keyboard accessibility)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  // If the window grows to desktop width, make sure the menu is closed
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && toggle.getAttribute("aria-expanded") === "true") setMenu(false);
  });

  /* --- Add a solid background to the navbar once scrolled --- */
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --- Highlight the section currently in view --- */
  highlightActiveSection(mount);
}

function highlightActiveSection(mount) {
  const sections = navLinks
    .map((l) => document.getElementById(l.id))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        mount.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.toggle("is-active", link.dataset.nav === id);
        });
      });
    },
    // Trigger when a section crosses the middle of the screen
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
