/* =========================================================================
   contact.js — Let's Connect section (form + social links)
   -------------------------------------------------------------------------
   IMPORTANT / HONEST NOTE:
   This form validates input in the browser only. There is no backend or
   email service connected, so nothing is actually emailed anywhere.
   The success message says so clearly instead of pretending otherwise.
   ========================================================================= */

import { contactSocials, profile } from "../data.js";
import { icon } from "../icons.js";

export function renderContact() {
  const socialCards = contactSocials
    .filter((s) => s.url)
    .map(
      (s) => `
      <a class="social-card glass" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <span class="social-icon" aria-hidden="true">${icon(s.label)}</span>
        <span class="social-meta">
          <strong>${s.label}</strong>
          <small>Opens in a new tab</small>
        </span>
        <span class="social-arrow" aria-hidden="true">${icon("arrowRight", 16)}</span>
      </a>`
    )
    .join("");
  const directEmail = profile.email
    ? `<a href="mailto:${profile.email}">${profile.email}</a>`
    : `<span>Email not added yet</span>`;
  const socialNav = socialCards
    ? `<nav class="social-cards" aria-label="Social profiles">${socialCards}</nav>`
    : "";

  return `
  <section id="contact" class="section" aria-labelledby="contact-heading">
    <div class="container">
      <header class="section-head reveal">
        <p class="section-eyebrow">Say hello</p>
        <h2 id="contact-heading" class="section-title">Let's Connect</h2>
        <p class="section-sub">
          I'm always interested in learning, building, and connecting with people
          who share an interest in technology.
        </p>
      </header>

      <div class="contact-grid">

        <!-- ===== Contact form ===== -->
        <div class="contact-form-wrap glass reveal">
          <form id="contact-form" class="contact-form" novalidate>
            <div class="field">
              <label for="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" autocomplete="name"
                     placeholder="Your name" aria-describedby="err-name" required />
              <p class="field-error" id="err-name" role="alert"></p>
            </div>

            <div class="field">
              <label for="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" autocomplete="email"
                     placeholder="you@example.com" aria-describedby="err-email" required />
              <p class="field-error" id="err-email" role="alert"></p>
            </div>

            <div class="field">
              <label for="cf-message">Message</label>
              <textarea id="cf-message" name="message" rows="5"
                        placeholder="Write your message here..."
                        aria-describedby="err-message" required></textarea>
              <p class="field-error" id="err-message" role="alert"></p>
            </div>

            <button class="btn btn-primary btn-block" type="submit">
              ${icon("mail", 18)} Send Message
            </button>

            <!-- Success/status message appears here after a valid submit -->
            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>

            <p class="form-note">
              Note: this form checks your details in the browser only — no email service
              is connected yet, so messages aren't delivered anywhere.
            </p>
          </form>
        </div>

        <!-- ===== Side panel: direct info + socials ===== -->
        <div class="contact-side reveal" style="--reveal-delay:120ms">
          <div class="contact-info glass">
            <h3 class="contact-info-title">Reach me directly</h3>
            <p class="contact-info-row">
              <span aria-hidden="true">${icon("mail", 18)}</span>
              ${directEmail}
            </p>
            <p class="contact-info-row">
              <span aria-hidden="true">${icon("pin", 18)}</span>
              ${profile.location}
            </p>
          </div>

          ${socialNav}
        </div>
      </div>
    </div>
  </section>`;
}

/* =========================================================================
   FORM VALIDATION
   -------------------------------------------------------------------------
   Runs after the section is inserted into the page (called from main.js).
   ========================================================================= */
export function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const fields = {
    name: document.getElementById("cf-name"),
    email: document.getElementById("cf-email"),
    message: document.getElementById("cf-message"),
  };

  // Simple, readable email pattern: something@something.something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /** Returns an error message string, or "" when the value is valid. */
  function validate(key, value) {
    const v = value.trim();
    if (key === "name") {
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
    }
    if (key === "email") {
      if (!v) return "Please enter your email address.";
      if (!emailPattern.test(v)) return "Please enter a valid email address.";
    }
    if (key === "message") {
      if (!v) return "Please write a short message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
    }
    return "";
  }

  /** Shows or clears the error text under one field. */
  function showError(key, message) {
    const input = fields[key];
    const errorEl = document.getElementById(`err-${key}`);
    errorEl.textContent = message;
    input.classList.toggle("has-error", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
  }

  // Live validation: clear the error as soon as the user fixes the field
  Object.entries(fields).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("has-error")) {
        showError(key, validate(key, input.value));
      }
    });
    input.addEventListener("blur", () => showError(key, validate(key, input.value)));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // no backend, so never do a real page submit

    let firstInvalid = null;
    Object.entries(fields).forEach(([key, input]) => {
      const message = validate(key, input.value);
      showError(key, message);
      if (message && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      status.textContent = "";
      status.className = "form-status";
      firstInvalid.focus(); // move keyboard focus to the first problem
      return;
    }

    // Everything valid — confirm honestly that it was only validated locally
    status.innerHTML = `${icon("check", 16)} Thanks, ${fields.name.value.trim()}! Your message passed validation. It isn't sent yet — connect an email service to deliver it.`;
    status.className = "form-status is-success";
    form.reset();
  });
}
