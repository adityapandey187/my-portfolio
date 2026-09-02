/* =========================================================================
   main.js — Application entry point
   -------------------------------------------------------------------------
   This file works like App.jsx in a React project:
   1. Imports every section component.
   2. Renders them into the page in order.
   3. Starts the shared behaviours (smooth scroll + scroll animations).
   ========================================================================= */

import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderSkills } from "./components/skills.js";
import { renderProjects } from "./components/projects.js";
import { renderEducation } from "./components/education.js";
import { renderContact, setupContactForm } from "./components/contact.js";
import { renderFooter } from "./components/footer.js";

/* ---------------- 1. Build the page ---------------- */
function buildPage() {
  const main = document.getElementById("main-content");

  // Sections render in this order. Each returns an HTML string.
  main.innerHTML = [
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderProjects(),
    renderEducation(), // contains Education + Learning Journey
    renderContact(),
  ].join("");

  renderNavbar(document.getElementById("site-header"));
  renderFooter(
    document.getElementById("site-footer"),
    document.getElementById("back-to-top-slot")
  );
}

/* ---------------- 2. Smooth scrolling ----------------
   CSS `scroll-behavior: smooth` handles most of it, but we intercept
   clicks so we can offset for the fixed navbar height and update the
   URL hash cleanly. */
function setupSmoothScroll() {
  const HEADER_OFFSET = 78; // roughly the navbar height in pixels

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return; // let unknown hashes behave normally

    event.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });

    // Keep the address bar in sync without causing an extra jump
    history.replaceState(null, "", `#${id}`);
  });
}

/* ---------------- 3. Fade-in on scroll ----------------
   Every element with the class "reveal" fades up once it enters the
   viewport. Uses IntersectionObserver (no scroll listener = better perf). */
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");

  // Respect users who prefer reduced motion: show everything immediately
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // The hero is already on screen when the page loads, so show it straight
  // away instead of waiting for a scroll event. This avoids any flicker.
  document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-visible"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------------- 4. Start ---------------- */
function init() {
  buildPage();
  setupSmoothScroll();
  setupScrollReveal();
  setupContactForm();

  // If someone arrives with a hash in the URL (e.g. /#projects),
  // scroll there after the sections have been built.
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - 78;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      }, 120);
    }
  }
}

// Run as soon as the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
