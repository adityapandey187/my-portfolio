import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discover", d: "Understand your goals, your audience and the content you already have." },
  { n: "02", t: "Plan", d: "Agree on the pages, features and scope before any design or code starts." },
  { n: "03", t: "Design", d: "Shape the layout, type and colour direction so you can react to something concrete." },
  { n: "04", t: "Develop", d: "Build a responsive, accessible site with modern web technologies." },
  { n: "05", t: "Test & Deliver", d: "Check it on real screen sizes, fix what's wrong, then hand it over and help get it online." },
];

export const Process = () => (
  <section id="process" aria-labelledby="process-heading" className="section-space hairline">
    <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
      <Reveal className="md:col-span-5">
        <p className="eyebrow mb-5">Process</p>
        <h2 id="process-heading" className="display-lg">
          How I work.
        </h2>
        <p className="mt-6 max-w-sm text-muted-foreground">
          This is my intended working process for client projects, not a record of finished client work.
        </p>
        <a href="#contact" className="btn btn-ghost mt-8">
          Start a Project
        </a>
      </Reveal>

      <ol className="md:col-span-7">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 0.05}>
              <div className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border py-8 transition-colors duration-500 hover:border-foreground/50 md:grid-cols-[5rem_1fr] md:py-10">
                <span className="font-display text-xl text-brand md:text-2xl">{s.n}</span>
                <div>
                  <h3 className="display-md transition-transform duration-500 group-hover:translate-x-1">{s.t}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
        <li aria-hidden="true" className="border-t border-border" />
      </ol>
    </div>
  </section>
);
