/* =========================================================================
   projects.js — My Projects section
   -------------------------------------------------------------------------
   Project cards are generated from the `projects` array in data.js, so
   adding a project only means adding one object there.

   Buttons:
   - If a github/demo URL is empty, the button renders as a disabled
     <button> instead of a broken link. This avoids dead links.
   ========================================================================= */

import { projects } from "../data.js";
import { icon } from "../icons.js";

/** Small coloured label shown at the top-right of the image. */
function statusBadge(status) {
  const map = {
    completed: { text: "Completed", cls: "is-done" },
    "in-progress": { text: "In Progress", cls: "is-wip" },
    "coming-soon": { text: "Coming Soon", cls: "is-soon" },
  };
  const s = map[status] || map["coming-soon"];
  return `<span class="project-status ${s.cls}">${s.text}</span>`;
}

/** Renders a link button, or a disabled button when there is no URL yet. */
function linkButton(url, label, iconName, isInternal = false) {
  if (!url) {
    return `<button class="btn btn-small btn-disabled" type="button" disabled
              aria-label="${label} — not available yet">
              ${icon(iconName, 16)} ${label}
            </button>`;
  }
  // Internal links (like "#home") should not open a new tab
  const attrs = isInternal || url.startsWith("#")
    ? 'data-scroll'
    : 'target="_blank" rel="noopener noreferrer"';
  return `<a class="btn btn-small btn-ghost" href="${url}" ${attrs}>
            ${icon(iconName, 16)} ${label}
          </a>`;
}

export function renderProjects() {
  const cards = projects
    .map(
      (p, i) => `
      <article class="project-card glass reveal" style="--reveal-delay:${i * 90}ms">

        <!-- Project illustration (local SVG — never a broken image) -->
        <div class="project-media">
          <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" width="640" height="360" />
          ${statusBadge(p.status)}
        </div>

        <div class="project-body">
          <h3 class="project-name">${p.name}</h3>
          <p class="project-desc">${p.description}</p>

          <ul class="tech-list" aria-label="Technologies used">
            ${p.tech.map((t) => `<li class="tech-tag">${t}</li>`).join("")}
          </ul>

          <div class="project-actions">
            ${linkButton(p.github, "GitHub", "GitHub")}
            ${linkButton(p.demo, "Live Demo", "external")}
          </div>
        </div>
      </article>`
    )
    .join("");

  return `
  <section id="projects" class="section" aria-labelledby="projects-heading">
    <div class="container">
      <header class="section-head reveal">
        <p class="section-eyebrow">Things I'm building</p>
        <h2 id="projects-heading" class="section-title">My Projects</h2>
        <p class="section-sub">
          Small projects I use to practise what I learn. Unfinished ones are marked clearly.
        </p>
      </header>

      <div class="projects-grid">${cards}</div>
    </div>
  </section>`;
}
