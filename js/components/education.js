/* =========================================================================
   education.js — Education + Learning Journey sections
   -------------------------------------------------------------------------
   Both are vertical timelines built from data.js.
   No school names, grades or certificates are invented anywhere.
   ========================================================================= */

import { education, journey } from "../data.js";
import { icon } from "../icons.js";

export function renderEducation() {
  /* ---- Education timeline ---- */
  const eduItems = education
    .map(
      (item, i) => `
      <li class="timeline-item reveal ${item.state === "current" ? "is-current" : ""}"
          style="--reveal-delay:${i * 90}ms">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card glass">
          <span class="timeline-period">${item.period}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-detail">${item.detail}</p>
        </div>
      </li>`
    )
    .join("");

  /* ---- Learning journey timeline ---- */
  const journeyItems = journey
    .map(
      (item, i) => `
      <li class="timeline-item reveal" style="--reveal-delay:${i * 80}ms">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card glass">
          <span class="timeline-period">${item.year}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-detail">${item.detail}</p>
        </div>
      </li>`
    )
    .join("");

  return `
  <!-- ================= EDUCATION ================= -->
  <section id="education" class="section" aria-labelledby="education-heading">
    <div class="container">
      <header class="section-head reveal">
        <p class="section-eyebrow">Where I am, where I'm headed</p>
        <h2 id="education-heading" class="section-title">Education</h2>
      </header>

      <ol class="timeline timeline--edu">${eduItems}</ol>
    </div>
  </section>

  <!-- ================= LEARNING JOURNEY ================= -->
  <section id="journey" class="section" aria-labelledby="journey-heading">
    <div class="container">
      <header class="section-head reveal">
        <p class="section-eyebrow">
          <span class="eyebrow-icon" aria-hidden="true">${icon("route", 16)}</span>
          Step by step
        </p>
        <h2 id="journey-heading" class="section-title">My Learning Journey</h2>
        <p class="section-sub">
          A realistic plan rather than a promise — this is the order I want to learn things in.
        </p>
      </header>

      <ol class="timeline timeline--journey">${journeyItems}</ol>
    </div>
  </section>`;
}
