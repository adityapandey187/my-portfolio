import { MapPin } from "lucide-react";
import portrait from "@/assets/aditya-portrait.webp";
import { Reveal } from "./Reveal";

const facts = [
  { k: "Studying", v: "B.Tech Computer Science Engineering", n: "Now" },
  { k: "Focus", v: "Web development, UI/UX, AI-assisted building", n: "Ongoing" },
  { k: "Based in", v: "Greater Noida, India", n: "" },
];

const interests = ["Web Development", "UI/UX Design", "Artificial Intelligence", "React", "Responsive Design"];

export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="section-space hairline">
    <div className="wrap grid gap-14 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-7">
        <Reveal>
          <p className="eyebrow mb-5">About</p>
          <h2 id="about-heading" className="display-lg">
            Meet Aditya<span className="text-brand">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-xl space-y-5 text-lg text-muted-foreground">
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
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Interests">
            {interests.map((i) => (
              <li key={i} className="chip">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-12 max-w-xl">
            {facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[6.5rem_1fr_auto] gap-4 border-t border-border py-4 text-[0.95rem] last:border-b">
                <dt className="text-muted-foreground">{f.k}</dt>
                <dd>{f.v}</dd>
                <dd className="text-muted-foreground">{f.n}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="md:col-span-5">
        <div className="relative mx-auto max-w-sm md:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <img
              src={portrait}
              alt="Portrait of Aditya Pandey"
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top grayscale-[0.9] transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Greater Noida, India
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
