import { motion, useReducedMotion } from "framer-motion";
import { Silk } from "./Silk";

const stack = ["React", "TypeScript", "Tailwind CSS", "Vite", "FastAPI", "Supabase", "Vercel", "GitHub"];

export const Hero = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0 opacity-100" aria-hidden="true">
        <Silk className="scale-[1.06] blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center px-5 pt-32 text-center md:pt-40">
        <motion.p {...fade(0)} className="eyebrow">
          Web Developer &amp; Digital Creator
        </motion.p>

        <h1 id="hero-heading" className="display-xl mt-8 max-w-[15ch] md:mt-10">
          <motion.span {...fade(0.1)} className="block">
            Designing &amp; Building Digital Experiences.
          </motion.span>
        </h1>

        <motion.p {...fade(0.3)} className="mt-7 max-w-[34rem] text-[1.0625rem] text-foreground/70">
          I'm Aditya Pandey, a developer and design enthusiast creating thoughtful websites and practical digital
          products.
        </motion.p>

        <motion.div {...fade(0.45)} className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn btn-solid">
            Explore My Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a Project
          </a>
        </motion.div>

        <motion.div {...fade(0.6)} className="mt-14 flex w-full max-w-[640px] items-center gap-5 text-sm text-foreground/70 md:mt-16" aria-hidden="true">
          <span className="whitespace-nowrap">Scroll down</span>
          <span className="relative h-px flex-1 bg-white/15">
            <span className="absolute left-1/2 top-1/2 flex h-7 w-4 -translate-x-1/2 -translate-y-1/2 justify-center rounded-full border border-white/70 bg-black pt-1.5">
              <span className="h-1.5 w-[2px] rounded bg-foreground motion-safe:animate-bounce" />
            </span>
          </span>
          <span className="whitespace-nowrap">to see projects</span>
        </motion.div>
      </div>

      <motion.div {...fade(0.8)} className="relative z-10 pb-10 pt-14 md:pb-14" aria-label="Technologies I build with">
        <div className="mx-auto max-w-[1000px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_18%,#000_82%,transparent)]">
          <ul className="flex w-max text-[1.6rem] font-medium tracking-tight text-foreground/55 motion-safe:animate-[marquee_32s_linear_infinite]">
            {[...stack, ...stack].map((t, i) => (
              <li key={t + i} className="mr-14" aria-hidden={i >= stack.length ? true : undefined}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
