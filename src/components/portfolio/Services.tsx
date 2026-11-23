import { ArrowUpRight, Globe, UserSquare, LayoutTemplate } from "lucide-react";
import shot from "@/assets/cafe-shot.webp";
import { Reveal } from "./Reveal";

const services = [
  { Icon: Globe, t: "Business Websites", d: "Responsive websites for small businesses and professionals.", p: "Starting from ₹1,500" },
  { Icon: UserSquare, t: "Personal Portfolio Websites", d: "Professional portfolio websites for students, creators and individuals.", p: "Starting from ₹1,000" },
  { Icon: LayoutTemplate, t: "Landing Pages", d: "Focused landing pages for products, services and campaigns.", p: "Starting from ₹1,000" },
];
const tags = ["Business Websites", "Portfolio Websites", "Landing Pages", "Responsive Design"];

export const Services = () => (
  <section id="services" aria-labelledby="services-heading" className="px-3 py-8 md:px-5 md:py-14">
    <div className="panel mx-auto max-w-[1360px]">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-6">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading" className="display-lg mt-6">
            Services
          </h2>
          <p className="mt-6 max-w-lg text-[1.15rem] leading-snug text-muted-foreground">
            Modern, responsive and thoughtfully designed digital experiences tailored to your needs.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Service types">
            {tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-8">
            <a href="#contact" className="btn btn-solid">
              Discuss Your Project
            </a>
            <a href="#projects" className="btn btn-ghost">
              See Projects
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
            <img
              src={shot}
              alt="Screenshot of the fictional cafe website concept demo"
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center grayscale"
            />
          </div>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.t}>
            <Reveal delay={i * 0.06} className="h-full">
              <a href="#contact" className="card-dark group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-white/[0.07]" aria-label={`${s.t}, ${s.p}. Discuss this project.`}>
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <s.Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="display-md">{s.t}</h3>
                </div>
                <p className="mt-5 flex-1 text-[0.95rem] text-muted-foreground">{s.d}</p>
                <p className="mt-6 flex items-center justify-between text-[1.05rem]">
                  {s.p}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted-foreground">
        Prices are introductory estimates. Final quotations depend on requirements, functionality, content and
        deployment costs.
      </p>
    </div>
  </section>
);
