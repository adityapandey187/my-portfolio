/* =========================================================================
   about.js — About Me section
   -------------------------------------------------------------------------
   Two columns on desktop: text on the left, highlight cards on the right.
   Stacks into one column on mobile.
   ========================================================================= */

import { about } from "../data.js";
import { icon } from "../icons.js";

export function renderAbout() {
  const paragraphs = about.paragraphs.map((p) => `<p>${p}</p>`).join("");

  // Honest highlight cards (no fake numbers or statistics)
  const highlights = about.highlights
    .map(
      (h, i) => `
      <li class="highlight-card glass reveal" style="--reveal-delay:${i * 70}ms">
        <span class="highlight-icon" aria-hidden="true">${icon(h.icon, 20)}</span>
        <h3 class="highlight-label">${h.label}</h3>
        <p class="highlight-note">${h.note}</p>
      </li>`
    )
    .join("");

  return `
  <section id="about" class="section" aria-labelledby="about-heading">
    <div class="container">

      <!-- Section heading -->
      <header class="section-head reveal">
        <p class="section-eyebrow">${about.subtitle}</p>
        <h2 id="about-heading" class="section-title">${about.title}</h2>
      </header>

      <div class="about-grid">
        <div class="about-text reveal">
          ${paragraphs}
        </div>

        <ul class="highlight-grid" aria-label="Quick highlights">
          ${highlights}
        </ul>
      </div>
    </div>
  </section>`;
}
