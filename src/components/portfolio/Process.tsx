import { Compass, ListChecks, PenTool, Code2, Rocket } from "lucide-react";
import shot from "@/assets/wx-shot.webp";
import { Reveal } from "./Reveal";

const steps = [
  { n: "1", Icon: Compass, t: "Discover", d: "Understand your goals, your audience and the content you already have." },
  { n: "2", Icon: ListChecks, t: "Plan", d: "Agree on the pages, features and scope before any design or code starts." },
  { n: "3", Icon: PenTool, t: "Design", d: "Shape the layout, type and colour direction so you can react to something concrete." },
  { n: "4", Icon: Code2, t: "Develop", d: "Build a responsive, accessible site with modern web technologies." },
  { n: "5", Icon: Rocket, t: "Test & Deliver", d: "Check it on real screen sizes, fix what's wrong, then hand it over and help get it online." },
];

export const Process = () => (
  <section id="process" aria-labelledby="process-heading" className="px-3 py-8 md:px-5 md:py-14">
    <div className="panel mx-auto max-w-[1360px]">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-6">
          <div className="md:sticky md:top-28">
            <div className="aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={shot}
                alt=""
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="h-full w-full scale-110 object-cover object-left-top blur-[3px] grayscale"
              />
            </div>
            <p className="eyebrow mt-8">Design process</p>
            <h2 id="process-heading" className="display-lg mt-5">
              Process
            </h2>
            <p className="mt-5 max-w-sm text-muted-foreground">
              This is my intended working process for client projects, not a record of finished client work.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-solid">
                Start a Project
              </a>
              <a href="#projects" className="btn btn-ghost">
                See Projects
              </a>
            </div>
          </div>
        </Reveal>

        <ol className="space-y-4 md:col-span-6">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.04}>
                <div className="card-dark relative p-7 md:p-9">
                  <span className="absolute right-6 top-6 text-sm text-muted-foreground">{s.n}</span>
                  <s.Icon className="h-6 w-6 text-foreground/80" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="display-md mt-6">{s.t}</h3>
                  <p className="mt-3 max-w-md text-[0.95rem] text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
