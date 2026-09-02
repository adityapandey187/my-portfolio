/* =========================================================================
   icons.js — Small inline SVG icon set
   -------------------------------------------------------------------------
   Inline SVGs keep the site fast (no icon library download) and let the
   icons inherit the text colour via `currentColor`.
   Each icon is a function so we can pass a custom size if needed.
   ========================================================================= */

const svg = (paths, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none"
        stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

export const icons = {
  // --- UI icons ---
  menu: () => svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: () => svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  arrowRight: () => svg('<path d="M5 12h13M12 6l6 6-6 6"/>'),
  arrowUp: () => svg('<path d="M12 19V6M6 12l6-6 6 6"/>'),
  mail: () => svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5 12 13l8.5-5.5"/>'),
  check: () => svg('<path d="M20 6.5 9.5 17 4 11.5"/>'),
  external: () => svg('<path d="M14 4h6v6"/><path d="M20 4l-8.5 8.5"/><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>'),
  pin: () => svg('<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>'),

  // --- Skill / about category icons ---
  code: () => svg('<path d="M9 8l-4 4 4 4"/><path d="M15 8l4 4-4 4"/>'),
  terminal: () => svg('<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 10l2.5 2L7 14"/><path d="M12.5 15H17"/>'),
  spark: () => svg('<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>'),
  chip: () => svg('<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>'),
  network: () => svg('<circle cx="5" cy="7" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="12" r="2.2"/><path d="M7.2 7.8 16.9 11.3M7.2 16.2 16.9 12.7"/>'),
  book: () => svg('<path d="M4 5.5A2 2 0 0 1 6 3.5h12v17H6a2 2 0 0 0-2 2z"/><path d="M4 5.5v15"/><path d="M9 8h6"/>'),
  cap: () => svg('<path d="M2.5 9 12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11"/>'),
  route: () => svg('<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6h4.5a3 3 0 0 1 3 3v6"/>'),

  // --- Social icons (brand glyphs, filled) ---
  GitHub: () =>
    `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.06c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5z"/></svg>`,
  LinkedIn: () =>
    `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 21.5h5.15V9.4H2.4zM10.4 9.4h4.94v1.65h.07c.69-1.2 2.37-2.05 4.13-2.05 3.55 0 4.46 2.1 4.46 5.55v6.95h-5.15v-6.16c0-1.47-.53-2.47-1.85-2.47-1.01 0-1.61.68-1.87 1.34-.1.24-.12.57-.12.9v6.39H10.4z"/></svg>`,
  Instagram: () =>
    `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>`,
};

/** Safely get an icon by name; returns an empty string if it doesn't exist. */
export const icon = (name, size) =>
  typeof icons[name] === "function" ? icons[name](size) : "";
