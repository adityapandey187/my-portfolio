import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";


const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="glass-card rounded-2xl p-6 md:p-8">
    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Study = ({ study }: { study: CaseStudy }) => (
  <main className="container-custom py-12 md:py-20 max-w-3xl mx-auto">
    <a
      href="#/"
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to portfolio
    </a>
    <h1 className="text-3xl md:text-4xl font-bold mb-8">
      Case Study: <span className="text-gradient">{study.title}</span>
    </h1>
    <div className="space-y-6">
      <Section title="1. Project overview">{study.overview}</Section>
      <Section title="2. Problem being addressed">{study.problem}</Section>
      <Section title="3. Design approach">{study.designApproach}</Section>
      <Section title="4. Development approach">{study.devApproach}</Section>
      <Section title="5. Technologies used">
        <div className="flex flex-wrap gap-2">
          {study.technologies.map((t) => (
            <span key={t} className="px-3 py-1 text-sm rounded-md bg-accent text-accent-foreground font-mono">
              {t}
            </span>
          ))}
        </div>
      </Section>
      <Section title="6. Implemented features">
        <ul className="list-disc pl-5 space-y-1.5">
          {study.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Section>
      <Section title="7. Challenges and solutions">{study.challenges}</Section>
      <Section title="8. Final outcome">{study.outcome}</Section>
    </div>
  </main>
);

const NotFound = () => (
  <main className="container-custom py-20 text-center">
    <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
    <a href="#/" className="text-primary underline">
      Back to portfolio
    </a>
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
  return (
    <div className="min-h-screen bg-background">
      {study ? <Study study={study} /> : <NotFound />}
    </div>
  );
};

