import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import wicketx from "@/assets/wx-shot.webp";
import techpath from "@/assets/tp-shot.webp";
import concept from "@/assets/cafe-shot.webp";
import { Line } from "./Reveal";

const thumbs = [
  { src: wicketx, alt: "WicketX live cricket scores homepage", label: "WicketX", href: "#projects", rot: "md:-rotate-2 md:translate-y-6" },
  { src: techpath, alt: "TechPath learning platform sign-in screen", label: "TechPath", href: "#projects", rot: "md:translate-y-0" },
  { src: concept, alt: "Business website concept demo, a fictional cafe", label: "Concept demo", href: "#projects", rot: "md:rotate-2 md:translate-y-8" },
];

export const Hero = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative pt-32 md:pt-44">
      <div className="wrap">
        <motion.p {...fade(0)} className="eyebrow mb-8 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-foreground/40" aria-hidden="true" />
          Web Developer &amp; Digital Creator
        </motion.p>

        <h1 id="hero-heading" className="display-xl max-w-[16ch]">
          <Line delay={0.1}>Designing &amp;</Line>
          <Line delay={0.2}>Building Digital</Line>
          <Line delay={0.3}>
            Experiences<span className="text-brand">.</span>
          </Line>
        </h1>

        <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-12">
          <motion.p {...fade(0.55)} className="max-w-xl text-lg text-muted-foreground md:col-span-6 md:text-xl">
            I'm Aditya Pandey, a developer and design enthusiast creating thoughtful websites and practical digital
            products.
          </motion.p>
          <motion.div {...fade(0.7)} className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
            <a href="#projects" className="btn btn-solid">
              Explore My Work <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Real project screenshots, loosely arranged */}
        <motion.ul
          {...fade(0.85)}
          className="mt-16 grid grid-cols-1 gap-5 pb-4 sm:grid-cols-3 md:mt-24"
          aria-label="Selected projects preview"
        >
          {thumbs.map((t) => (
            <li key={t.label} className={`transition-transform duration-700 ${t.rot}`}>
              <a href={t.href} className="group block">
                <div className="aspect-[16/11] overflow-hidden rounded-xl border border-border bg-card">
                  <img
                    src={t.src}
                    alt={t.alt}
                    width={1280}
                    height={720}
                    fetchPriority="low"
                    className="h-full w-full object-cover object-top grayscale-[0.85] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{t.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
