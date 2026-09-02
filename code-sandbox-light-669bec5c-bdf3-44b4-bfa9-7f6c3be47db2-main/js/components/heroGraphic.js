/* =========================================================================
   heroGraphic.js — The developer / AI inspired hero illustration
   -------------------------------------------------------------------------
   This is a hand-built inline SVG (no stock photo, no external image).
   It shows:
     - a small "code editor" card with syntax-coloured lines
     - a neural-network diagram with glowing nodes
     - floating tech chips around the edges
   The whole thing floats slowly using CSS (see .hero-art in style.css).
   ========================================================================= */

export function heroGraphic() {
  return `
  <div class="hero-art" role="img"
       aria-label="Illustration of a code editor beside a glowing neural network diagram">

    <!-- Glow behind the graphic -->
    <span class="hero-art-glow" aria-hidden="true"></span>

    <!-- ===== Card 1: mini code editor ===== -->
    <div class="art-card art-card--code glass">
      <div class="art-card-bar" aria-hidden="true">
        <span class="dot dot--red"></span>
        <span class="dot dot--yellow"></span>
        <span class="dot dot--green"></span>
        <span class="art-card-name">learning.py</span>
      </div>
      <pre class="art-code" aria-hidden="true"><code><span class="c-key">import</span> <span class="c-mod">numpy</span> <span class="c-key">as</span> np

<span class="c-key">class</span> <span class="c-cls">Student</span>:
    <span class="c-key">def</span> <span class="c-fn">__init__</span>(self):
        self.name = <span class="c-str">"Aditya"</span>
        self.goal = <span class="c-str">"AI/ML Engineer"</span>
        self.learning = <span class="c-num">True</span>

    <span class="c-key">def</span> <span class="c-fn">practice</span>(self):
        <span class="c-key">while</span> self.learning:
            self.build()  <span class="c-cmt"># every day</span></code></pre>
    </div>

    <!-- ===== Card 2: neural network diagram ===== -->
    <div class="art-card art-card--net glass">
      <p class="art-net-title">Neural Network</p>
      <svg class="art-net" viewBox="0 0 220 140" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="netLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity=".85"/>
            <stop offset="50%" stop-color="#a855f7" stop-opacity=".85"/>
            <stop offset="100%" stop-color="#22d3ee" stop-opacity=".85"/>
          </linearGradient>
        </defs>

        <!-- connection lines: input -> hidden -> output -->
        <g stroke="url(#netLine)" stroke-width="1" fill="none" opacity=".55">
          <path d="M32 32 L110 24 M32 32 L110 70 M32 32 L110 116"/>
          <path d="M32 70 L110 24 M32 70 L110 70 M32 70 L110 116"/>
          <path d="M32 108 L110 24 M32 108 L110 70 M32 108 L110 116"/>
          <path d="M110 24 L190 52 M110 70 L190 52 M110 116 L190 52"/>
          <path d="M110 24 L190 92 M110 70 L190 92 M110 116 L190 92"/>
        </g>

        <!-- nodes -->
        <g class="net-nodes">
          <circle cx="32" cy="32" r="6" fill="#3b82f6"/>
          <circle cx="32" cy="70" r="6" fill="#3b82f6"/>
          <circle cx="32" cy="108" r="6" fill="#3b82f6"/>
          <circle cx="110" cy="24" r="6" fill="#a855f7"/>
          <circle cx="110" cy="70" r="6" fill="#a855f7"/>
          <circle cx="110" cy="116" r="6" fill="#a855f7"/>
          <circle cx="190" cy="52" r="6" fill="#22d3ee"/>
          <circle cx="190" cy="92" r="6" fill="#22d3ee"/>
        </g>
      </svg>
      <div class="art-net-legend" aria-hidden="true">
        <span><i style="background:#3b82f6"></i>input</span>
        <span><i style="background:#a855f7"></i>hidden</span>
        <span><i style="background:#22d3ee"></i>output</span>
      </div>
    </div>

    <!-- ===== Floating tech chips ===== -->
    <span class="art-chip art-chip--1" aria-hidden="true">Python</span>
    <span class="art-chip art-chip--2" aria-hidden="true">C</span>
    <span class="art-chip art-chip--3" aria-hidden="true">ML</span>
  </div>`;
}
