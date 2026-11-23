import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { projects } from "@/data/projects";

const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <section className="grid gap-4 border-t border-border py-9 md:grid-cols-12 md:gap-10">
    <h2 className="font-display text-xl md:col-span-4 md:text-2xl">
      <span className="mr-3 text-brand">{n}</span>
      {title}
    </h2>
    <div className="leading-relaxed text-muted-foreground md:col-span-8">{children}</div>
  </section>
);

const Study = ({ study }: { study: CaseStudy }) => {
  const project = projects.find((p) => p.caseStudy === study.slug);
  return (
    <main className="wrap pb-24 pt-28 md:pt-40">
      <a href="#projects" className="link-h mb-10 flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
      </a>
      <p className="eyebrow mb-7 w-fit">Case Study</p>
      <h1 className="display-lg max-w-[18ch]">{study.title}</h1>
      {project && (
        <>
          <div className="mt-12 aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            <img src={project.image} alt={project.alt} width={1280} height={720} className="h-full w-full object-cover object-top" />
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <a href={project.liveUrl} target={project.liveUrl.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="link-u">
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u">
                GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </>
      )}
      <div className="mt-16">
        <Section n="01" title="Project overview">{study.overview}</Section>
        <Section n="02" title="Problem being addressed">{study.problem}</Section>
        <Section n="03" title="Design approach">{study.designApproach}</Section>
        <Section n="04" title="Development approach">{study.devApproach}</Section>
        <Section n="05" title="Technologies used">
          <ul className="flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </Section>
        <Section n="06" title="Implemented features">
          <ul className="list-disc space-y-1.5 pl-5">
            {study.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Section>
        <Section n="07" title="Challenges and solutions">{study.challenges}</Section>
        <Section n="08" title="Final outcome">{study.outcome}</Section>
        <div className="border-t border-border" />
      </div>
    </main>
  );
};

const NotFound = () => (
  <main className="wrap py-40 text-center">
    <h1 className="display-md mb-6">Case study not found</h1>
    <a href="#projects" className="link-u">Back to portfolio</a>
  </main>
);

export const CaseStudyPage = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);

  const match = hash.match(/^#\/case-studies\/([\w-]+)/);
  if (!match) return null;
  const study = caseStudies.find((s) => s.slug === match[1]);
  return <div className="min-h-screen bg-background">{study ? <Study study={study} /> : <NotFound />}</div>;
};
