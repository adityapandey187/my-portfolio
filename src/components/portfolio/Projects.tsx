import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

const spans: Record<string, string> = {
  wicketx: "md:col-span-7",
  techpath: "md:col-span-5",
  portfolio: "md:col-span-5",
  "business-concept": "md:col-span-7",
};
const ratios: Record<string, string> = {
  wicketx: "aspect-[16/11]",
  techpath: "aspect-[16/11] md:aspect-auto md:h-full md:min-h-[22rem]",
  portfolio: "aspect-[16/11] md:aspect-auto md:h-full md:min-h-[22rem]",
  "business-concept": "aspect-[16/11]",
};

const Card = ({ p, i }: { p: Project; i: number }) => {
  const reduce = useReducedMotion();
  const href = p.caseStudy ? `#/case-studies/${p.caseStudy}` : p.liveUrl;
  const label = p.caseStudy ? "View Casestudy" : "View Concept";
  return (
    <Reveal delay={(i % 2) * 0.08} className={`${spans[p.id]} flex flex-col`}>
      <article className="flex h-full flex-col">
        <a
          href={href}
          aria-label={`${label}: ${p.title}`}
          className={`group relative block overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] ${ratios[p.id]}`}
        >
          <motion.img
            src={p.image}
            alt={p.alt}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            whileHover={reduce ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <span className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-black/55 py-3.5 text-[0.95rem] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
            {label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
          {p.concept && (
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 text-xs backdrop-blur">
              Concept demo
            </span>
          )}
        </a>

        <div className="px-1.5 pb-2 pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="display-md">{p.title}</h3>
            <p className="text-sm text-muted-foreground">
              {p.index} / {p.category}
            </p>
          </div>
          <p className="mt-3 max-w-[40rem] text-[0.95rem] text-muted-foreground">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
            {p.tech.map((t) => (
              <li key={t} className="rounded-lg bg-white/[0.07] px-3 py-1.5 text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem]">
            <a
              href={p.liveUrl}
              target={p.liveUrl.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="link-u"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            {p.caseStudy && (
              <a href={`#/case-studies/${p.caseStudy}`} className="link-u">
                Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u text-muted-foreground hover:text-foreground">
                GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="px-3 pb-16 pt-10 md:px-5 md:pb-28 md:pt-16">
    <div className="mx-auto max-w-[1360px]">
      <Reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-heading" className="display-lg mt-7 max-w-[14ch]">
          Projects I've built.
        </h2>
        <p className="mt-5 max-w-md text-muted-foreground">
          Real projects with live links, plus one clearly labelled concept demo.
        </p>
      </Reveal>

      <div className="grid gap-x-5 gap-y-14 md:grid-cols-12">
        {projects.map((p, i) => (
          <Card key={p.id} p={p} i={i} />
        ))}
      </div>
    </div>
  </section>
);
