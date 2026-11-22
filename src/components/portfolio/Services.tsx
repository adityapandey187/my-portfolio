import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { n: "01", t: "Business Websites", d: "Responsive websites for small businesses and professionals.", p: "Starting from ₹1,500" },
  { n: "02", t: "Personal Portfolio Websites", d: "Professional portfolio websites for students, creators and individuals.", p: "Starting from ₹1,000" },
  { n: "03", t: "Landing Pages", d: "Focused landing pages for products, services and campaigns.", p: "Starting from ₹1,000" },
];

export const Services = () => (
  <section id="services" aria-labelledby="services-heading" className="section-space hairline">
    <div className="wrap">
      <Reveal>
        <p className="eyebrow mb-5">Services</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="services-heading" className="display-lg max-w-[14ch]">
            What I can build for you.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Modern, responsive and thoughtfully designed digital experiences tailored to your needs.
          </p>
        </div>
      </Reveal>

      <ul className="mt-16 md:mt-20">
        {services.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 0.06}>
              <a
                href="#contact"
                className="group grid items-baseline gap-3 border-t border-border py-9 transition-colors duration-500 hover:border-foreground/60 md:grid-cols-12 md:gap-8 md:py-12"
                aria-label={`${s.t}, ${s.p}. Discuss this project.`}
              >
                <span className="font-display text-brand md:col-span-1">{s.n}</span>
                <h3 className="display-md transition-transform duration-500 group-hover:translate-x-2 md:col-span-5">{s.t}</h3>
                <p className="text-muted-foreground md:col-span-4">{s.d}</p>
                <p className="flex items-center gap-2 font-medium md:col-span-2 md:justify-end">
                  {s.p}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </p>
              </a>
            </Reveal>
          </li>
        ))}
        <li aria-hidden="true" className="border-t border-border" />
      </ul>

      <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-6">
        <p className="max-w-xl text-sm text-muted-foreground">
          Prices are introductory estimates. Final quotations depend on requirements, functionality, content and
          deployment costs.
        </p>
        <a href="#contact" className="btn btn-solid">
          Discuss Your Project
        </a>
      </Reveal>
    </div>
  </section>
);
