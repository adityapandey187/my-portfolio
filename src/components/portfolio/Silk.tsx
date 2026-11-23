import { useEffect, useRef } from "react";

/**
 * Original generative backdrop: soft grayscale ribbons drawn on a tiny canvas and
 * scaled up by CSS, so the upscale itself gives the blur. Static when reduced motion is on.
 */
export const Silk = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const W = 240;
    const H = 150;
    cv.width = W;
    cv.height = H;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = 0;

    const draw = (t: number) => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);
      ctx.lineCap = "round";
      for (let k = 0; k < 7; k++) {
        const ph = k * 1.3;
        const g = ctx.createLinearGradient(0, 0, W, 0);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.35 + 0.1 * Math.sin(t * 0.3 + ph), `rgba(255,255,255,${0.32 + 0.06 * k})`);
        g.addColorStop(0.75, `rgba(210,210,210,${0.16 + 0.04 * k})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 7 + k * 5;
        ctx.beginPath();
        for (let x = -10; x <= W + 10; x += 5) {
          const u = x / W;
          const y =
            H * 0.62 +
            Math.sin(u * 3.2 + t * 0.35 + ph) * 24 +
            Math.sin(u * 6.1 - t * 0.22 + ph * 2) * 9 -
            u * 52 +
            (k - 3) * 9;
          if (x === -10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    if (reduce) {
      draw(2.2);
      return;
    }
    const loop = (ms: number) => {
      if (ms - last > 45) {
        draw(ms / 1000);
        last = ms;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none h-full w-full ${className}`} />;
};
