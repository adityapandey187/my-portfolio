import { useEffect, useRef } from "react";

/**
 * Original generative backdrop: a few drifting smoke ribbons on a black canvas.
 * Each ribbon is the same curve stroked several times, wide and faint first, thin and
 * bright last, so it reads as a soft glow with a bright core. Drawn small and scaled up
 * by CSS, so the upscale adds blur. Static when reduced motion is on.
 */
type P = [number, number];
type Bez = [P, P, P, P];

const bezier = (b: Bez, t: number): P => {
  const u = 1 - t;
  const k0 = u * u * u;
  const k1 = 3 * u * u * t;
  const k2 = 3 * u * t * t;
  const k3 = t * t * t;
  return [
    k0 * b[0][0] + k1 * b[1][0] + k2 * b[2][0] + k3 * b[3][0],
    k0 * b[0][1] + k1 * b[1][1] + k2 * b[2][1] + k3 * b[3][1],
  ];
};

const passes = [
  { w: 0.1, a: 0.06 },
  { w: 0.065, a: 0.1 },
  { w: 0.035, a: 0.16 },
  { w: 0.014, a: 0.24 },
  { w: 0.004, a: 0.5 },
];

export const Silk = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const W = 560;
    const H = 430;
    cv.width = W;
    cv.height = H;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = 0;

    const draw = (t: number) => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const s = (n: number, f: number, ph: number) => Math.sin(t * f + ph) * n;

      const ribbons: { curves: Bez[]; gain: number }[] = [
        {
          gain: 1,
          curves: [
            [[0.3 + s(0.02, 0.21, 0), 0.1], [0.1 + s(0.03, 0.17, 1), 0.3], [0.36, 0.56 + s(0.03, 0.23, 2)], [0.56, 0.36 + s(0.02, 0.19, 3)]],
            [[0.56, 0.36], [0.76 + s(0.03, 0.15, 4), 0.2], [0.6, 0.62 + s(0.03, 0.2, 5)], [0.96, 0.8 + s(0.02, 0.18, 6)]],
          ],
        },
        {
          gain: 0.55,
          curves: [
            [[-0.05, 0.82], [0.3, 0.6 + s(0.03, 0.2, 7)], [0.5, 0.98], [1.05, 0.68 + s(0.03, 0.16, 8)]],
          ],
        },
        {
          gain: 0.4,
          curves: [
            [[0.5, 0.3], [0.7, 0.34 + s(0.03, 0.22, 9)], [0.82 + s(0.03, 0.18, 10), 0.52], [1.02, 0.5]],
          ],
        },
      ];

      for (const r of ribbons) {
        const pts: P[] = [];
        for (const c of r.curves) for (let i = 0; i <= 28; i++) pts.push(bezier(c, i / 28));
        for (const p of passes) {
          const g = ctx.createLinearGradient(0, 0, W, 0);
          const a = p.a * r.gain;
          g.addColorStop(0, `rgba(255,255,255,${a * 0.2})`);
          g.addColorStop(0.35, `rgba(255,255,255,${a})`);
          g.addColorStop(0.8, `rgba(255,255,255,${a * 0.7})`);
          g.addColorStop(1, `rgba(255,255,255,${a * 0.3})`);
          ctx.strokeStyle = g;
          ctx.lineWidth = p.w * W;
          ctx.beginPath();
          pts.forEach(([x, y], i) => (i ? ctx.lineTo(x * W, y * H) : ctx.moveTo(x * W, y * H)));
          ctx.stroke();
        }
      }
    };

    if (reduce) {
      draw(2.2);
      return;
    }
    const loop = (ms: number) => {
      if (ms - last > 40) {
        if (cv.offsetParent !== null) draw(ms / 1000);
        last = ms;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none h-full w-full blur-[1.5px] ${className}`} />;
};
