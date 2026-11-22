import { Reveal } from "./Reveal";

// Levels are honest words only (no percentages). Skills come from this codebase and his project stack.
const groups = [
  {
    title: "Frontend",
    items: [
      ["HTML", "Learning"],
      ["CSS & Tailwind CSS", "Learning"],
      ["JavaScript", "Learning"],
      ["React & TypeScript", "Building"],
      ["Responsive Web Design", "Building"],
    ],
  },
  {
    title: "UI/UX",
    items: [
      ["Interface Design", "Learning"],
      ["Layout Design", "Learning"],
    ],
  },
  {
    title: "AI & Dev Tools",
    items: [
      ["AI-Assisted Development", "Building"],
      ["Git & GitHub", "Starting"],
      ["Code Editor", "Learning"],
    ],
  },
  {
    title: "Foundations",
    items: [
      ["C Programming", "Learning"],
      ["Python Basics", "Starting"],
      ["Mathematics for CS", "Building"],
      ["AI Concepts", "Exploring"],
      ["Machine Learning Basics", "Future goal"],
    ],
  },
];

const journey = [
  { t: "Web development learning", d: "B.Tech CSE student learning HTML, CSS, JavaScript and React alongside programming fundamentals.", p: "Now" },
  { t: "Personal projects", d: "WicketX, a live cricket scores web app, and TechPath, a learning platform for tech students with an AI tutor.", p: "Built" },
  { t: "AI-powered development", d: "Exploring how modern AI tools can speed up building and improve web projects.", p: "Exploring" },
  { t: "Building practical applications", d: "Responsive websites, including this portfolio, with the goal of building sites for individuals and small businesses.", p: "Ongoing" },
  { t: "Continued technical improvement", d: "Long-term goal in artificial intelligence and machine learning, built on a maths and Python foundation.", p: "Next" },
];

export const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="section-space hairline">
    <div className="wrap">
      <Reveal>
        <p className="eyebrow mb-5">Skills &amp; Learning</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="skills-heading" className="display-lg max-w-[14ch]">
            Stack &amp; journey.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Honest levels, no exaggeration: what I use to build websites and what I'm still learning.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <h3 className="mb-4 border-b border-border pb-3 font-display text-lg">{g.title}</h3>
            <ul className="space-y-3">
              {g.items.map(([name, level]) => (
                <li key={name} className="flex items-baseline justify-between gap-3 text-[0.95rem]">
                  <span>{name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <h3 className="display-md mb-10">My learning &amp; building journey</h3>
      </Reveal>
      <ol>
        {journey.map((j, i) => (
          <li key={j.t}>
            <Reveal delay={i * 0.04}>
              <div className="grid gap-2 border-t border-border py-6 md:grid-cols-12 md:gap-8">
                <span className="text-sm text-brand md:col-span-2">{j.p}</span>
                <h4 className="font-display text-xl md:col-span-4">{j.t}</h4>
                <p className="text-muted-foreground md:col-span-6">{j.d}</p>
              </div>
            </Reveal>
          </li>
        ))}
        <li aria-hidden="true" className="border-t border-border" />
      </ol>
    </div>
  </section>
);
