/* =========================================================================
   hero.js — Home / hero section
   -------------------------------------------------------------------------
   Left side  : status badge, greeting, headline, tagline, two CTA buttons.
   Right side : an inline SVG "AI + code" graphic that floats gently.
   ========================================================================= */

import { profile, socials } from "../data.js";
import { icon } from "../icons.js";
import { heroGraphic } from "./heroGraphic.js";

export function renderHero() {
  // Social icon buttons under the hero text
  const socialLinks = socials
    .filter((s) => s.url)
    .map(
      (s) => `
      <a class="icon-btn" href="${s.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${s.label} profile (opens in a new tab)">
        ${icon(s.label)}
      </a>`
    )
    .join("");

  return `
  <section id="home" class="section hero" aria-labelledby="hero-heading">
    <div class="container hero-inner">

      <!-- ===== Hero text ===== -->
      <div class="hero-copy reveal">
        <p class="status-badge">
          <span class="status-dot" aria-hidden="true"></span>
          ${profile.statusBadge}
        </p>

        <p class="hero-greeting">${profile.greeting}</p>

        <h1 id="hero-heading" class="hero-title">
          Computer Science Engineering Student &amp;
          <span class="gradient-text">Aspiring AI/ML Engineer</span>
        </h1>

        <p class="hero-tagline">${profile.tagline}</p>

        <!-- Both buttons are anchors, so they work even without JavaScript -->
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects" data-scroll>
            View My Projects ${icon("arrowRight", 18)}
          </a>
          <a class="btn btn-ghost" href="#contact" data-scroll>
            ${icon("mail", 18)} Contact Me
          </a>
        </div>

        ${socialLinks ? `<div class="hero-socials" aria-label="Social profiles">${socialLinks}</div>` : ""}
      </div>

      <!-- ===== Hero graphic (decorative illustration, not a stock photo) ===== -->
      <div class="hero-visual reveal" style="--reveal-delay:120ms">
        ${heroGraphic()}
      </div>
    </div>

    <!-- Small scroll hint at the bottom of the hero -->
    <a class="scroll-hint" href="#about" data-scroll aria-label="Scroll to the About section">
      <span>Scroll</span>
      <span class="scroll-line" aria-hidden="true"></span>
    </a>
  </section>`;
}
