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
  <section id="skills" aria-labelledby="skills-heading" className="px-3 py-8 md:px-5 md:py-14">
    <div className="panel mx-auto max-w-[1360px]">
      <Reveal className="flex flex-col items-center text-center">
        <p className="eyebrow">Skills &amp; Learning</p>
        <h2 id="skills-heading" className="display-lg mt-7 max-w-[14ch]">
          Stack &amp; journey
        </h2>
        <p className="mt-5 max-w-md text-muted-foreground">
          Honest levels, no exaggeration: what I use to build websites and what I'm still learning.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className="h-full">
            <div className="card-dark h-full p-6">
              <h3 className="border-b border-white/10 pb-4 text-[1.15rem] font-normal tracking-tight">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map(([name, level]) => (
                  <li key={name} className="flex items-baseline justify-between gap-3 text-[0.92rem]">
                    <span>{name}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="display-md mb-6">My learning &amp; building journey</h3>
      </Reveal>
      <ol className="border-t border-white/10">
        {journey.map((j, i) => (
          <li key={j.t}>
            <Reveal delay={i * 0.03}>
              <div className="grid gap-1.5 border-b border-white/10 py-5 md:grid-cols-12 md:gap-8">
                <span className="text-sm text-muted-foreground md:col-span-2">{j.p}</span>
                <h4 className="text-[1.1rem] font-normal tracking-tight md:col-span-4">{j.t}</h4>
                <p className="text-[0.95rem] text-muted-foreground md:col-span-6">{j.d}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
