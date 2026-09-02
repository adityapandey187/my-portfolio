/* =========================================================================
   skills.js — My Skills section
   -------------------------------------------------------------------------
   Renders one glass card per skill group from data.js.
   Each skill shows an honest short label (Learning / Basics / Comfortable)
   instead of a fake percentage bar.
   ========================================================================= */

import { skillGroups } from "../data.js";
import { icon } from "../icons.js";

export function renderSkills() {
  const cards = skillGroups
    .map(
      (group, gi) => `
      <article class="skill-card glass reveal accent-${group.accent}"
               style="--reveal-delay:${gi * 90}ms">
        <header class="skill-card-head">
          <span class="skill-card-icon" aria-hidden="true">${icon(group.icon, 20)}</span>
          <div>
            <h3 class="skill-card-title">${group.title}</h3>
            <p class="skill-card-note">${group.note}</p>
          </div>
        </header>

        <ul class="skill-list">
          ${group.items
            .map(
              (item) => `
            <li class="skill-item">
              <span class="skill-badge" aria-hidden="true">${item.badge}</span>
              <span class="skill-name">${item.name}</span>
              <span class="skill-level">${item.level}</span>
            </li>`
            )
            .join("")}
        </ul>
      </article>`
    )
    .join("");

  return `
  <section id="skills" class="section" aria-labelledby="skills-heading">
    <div class="container">
      <header class="section-head reveal">
        <p class="section-eyebrow">What I work with</p>
        <h2 id="skills-heading" class="section-title">My Skills</h2>
        <p class="section-sub">
          An honest snapshot of where I am right now — some things I'm comfortable with,
          and plenty I'm still learning.
        </p>
      </header>

      <div class="skills-grid">${cards}</div>
    </div>
  </section>`;
}
