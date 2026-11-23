import { MapPin, ArrowDown } from "lucide-react";
import portrait from "@/assets/aditya-portrait.webp";
import { Reveal } from "./Reveal";

const facts = [
  { k: "Studying", v: "B.Tech Computer Science Engineering", n: "Now" },
  { k: "Focus", v: "Web development, UI/UX, AI-assisted building", n: "Ongoing" },
  { k: "Based in", v: "Greater Noida, India", n: "" },
];

const interests = ["Web Development", "UI/UX Design", "Artificial Intelligence", "React", "Responsive Design"];

export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="px-3 py-8 md:px-5 md:py-14">
    <div className="panel mx-auto max-w-[1360px]">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 id="about-heading" className="display-lg mt-7">
              Meet Aditya
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-4 text-muted-foreground">
            <p>
              I'm a B.Tech Computer Science student interested in web development, UI/UX design and artificial
              intelligence.
            </p>
            <p>
              I enjoy turning ideas into practical digital experiences using modern web technologies and AI-powered
              development tools. I'm continuously learning, experimenting and building projects that solve real-world
              problems.
            </p>
            <p>
              My goal is to create responsive, accessible and user-friendly websites for individuals and small
              businesses.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Interests">
              {interests.map((i) => (
                <li key={i} className="rounded-lg bg-white/[0.07] px-3.5 py-2 text-[0.85rem] text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 max-w-xl border-t border-white/10">
              {facts.map((f) => (
                <div key={f.k} className="grid grid-cols-[6rem_1fr_auto] gap-4 border-b border-white/10 py-4 text-[0.9rem]">
                  <dt className="text-muted-foreground">{f.k}</dt>
                  <dd>{f.v}</dd>
                  <dd className="text-muted-foreground">{f.n}</dd>
                </div>
              ))}
            </dl>
            <a href="#projects" className="mt-8 inline-flex items-center gap-2.5 text-[1.05rem]">
              Recent Works
              <span className="grid h-6 w-6 place-items-center rounded-full border border-white/40">
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="aspect-[4/4.6] overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={portrait}
                alt="Portrait of Aditya Pandey"
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm backdrop-blur">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Greater Noida, India
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
