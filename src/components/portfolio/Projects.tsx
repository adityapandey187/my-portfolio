import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

const Links = ({ p }: { p: Project }) => (
  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
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
);

const Image = ({ p, ratio }: { p: Project; ratio: string }) => {
  const reduce = useReducedMotion();
  return (
    <a
      href={p.liveUrl}
      target={p.liveUrl.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={`Open ${p.title}`}
      className={`group relative block overflow-hidden rounded-2xl border border-border bg-card ${ratio}`}
    >
      <motion.img
        src={p.image}
        alt={p.alt}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        whileHover={reduce ? undefined : { scale: 1.035 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full object-cover object-top grayscale-[0.8] transition-[filter] duration-700 group-hover:grayscale-0"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-4 py-2 text-sm font-medium opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        View live <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
      {p.concept && (
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          Concept demo
        </span>
      )}
    </a>
  );
};

const Meta = ({ p }: { p: Project }) => (
  <>
    <p className="eyebrow mb-4 flex items-center gap-3">
      <span className="text-brand">{p.index}</span>
      <span aria-hidden="true" className="h-px w-6 bg-foreground/30" />
      {p.category}
    </p>
    <h3 className={p.size === "large" ? "display-lg" : "display-md"}>{p.title}</h3>
    <p className="mt-5 max-w-prose text-muted-foreground">{p.description}</p>
    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
      {p.tech.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
    <Links p={p} />
  </>
);

export const Projects = () => {
  const large = projects.filter((p) => p.size === "large");
  const small = projects.filter((p) => p.size === "small");
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-space">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-5">Selected Work</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="projects-heading" className="display-lg max-w-[14ch]">
              Projects I've built.
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Real projects with live links, plus one clearly labelled concept demo.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {large.map((p, i) => (
            <article key={p.id} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
              <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <Image p={p} ratio="aspect-video" />
              </Reveal>
              <Reveal delay={0.1} className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <Meta p={p} />
              </Reveal>
            </article>
          ))}

          <div className="grid gap-16 md:grid-cols-2 md:gap-12">
            {small.map((p, i) => (
              <article key={p.id} className={i === 1 ? "md:mt-24" : ""}>
                <Reveal>
                  <Image p={p} ratio="aspect-video" />
                  <div className="mt-8">
                    <Meta p={p} />
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
