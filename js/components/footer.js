/* =========================================================================
   footer.js — Footer + "Back to Top" button
   ========================================================================= */

import { footer, socials, navLinks, profile } from "../data.js";
import { icon } from "../icons.js";

export function renderFooter(mount, backToTopMount) {
  const socialLinks = socials
    .filter((s) => s.url)
    .map(
      (s) => `
      <a class="icon-btn" href="${s.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${s.label} profile (opens in a new tab)">${icon(s.label)}</a>`
    )
    .join("");
  const socialBlock = socialLinks
    ? `<div class="footer-social">
          <h2 class="footer-heading">Elsewhere</h2>
          <div class="footer-social-row">${socialLinks}</div>
        </div>`
    : "";

  const quickLinks = navLinks
    .map((l) => `<li><a href="#${l.id}" data-scroll>${l.label}</a></li>`)
    .join("");

  mount.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="#home" data-scroll aria-label="${profile.name} — back to top">
            <span class="brand-mark" aria-hidden="true">${profile.name.charAt(0)}</span>
            <span class="brand-text"><strong>${profile.name}</strong><small>${profile.logoTag}</small></span>
          </a>
          <p class="footer-blurb">
            Learning computer science one project at a time, with a long-term goal of
            building things with AI and machine learning.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <h2 class="footer-heading">Sections</h2>
          <ul>${quickLinks}</ul>
        </nav>

        ${socialBlock}
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">${footer.text}</p>
      </div>
    </div>
  `;

  /* ---- Back to top button ---- */
  backToTopMount.innerHTML = `
    <button class="back-to-top" id="back-to-top" type="button" aria-label="Back to top">
      ${icon("arrowUp", 18)}
    </button>`;

  const button = document.getElementById("back-to-top");

  // Only show the button once the user has scrolled a bit
  const onScroll = () => button.classList.toggle("is-visible", window.scrollY > 500);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Return keyboard focus to the top of the page
    document.getElementById("home")?.focus?.();
  });
}
