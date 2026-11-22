import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, BookOpen } from "lucide-react";

// Honest levels, shown as words only (no percentages or bars).
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "HTML", level: "Learning" },
      { name: "CSS & Tailwind CSS", level: "Learning" },
      { name: "JavaScript", level: "Learning" },
      { name: "React & TypeScript", level: "Building" },
      { name: "Responsive Web Design", level: "Building" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-fuchsia-500 to-purple-500",
    skills: [
      { name: "Interface Design", level: "Learning" },
      { name: "Layout Design", level: "Learning" },
    ],
  },
  {
    title: "AI & Development Tools",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "AI-Assisted Development", level: "Building" },
      { name: "Git & GitHub", level: "Starting" },
      { name: "Code Editor", level: "Learning" },
    ],
  },
  {
    title: "Learning Foundations",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "C Programming", level: "Learning" },
      { name: "Python Basics", level: "Starting" },
      { name: "Mathematics for CS", level: "Building" },
      { name: "AI Concepts", level: "Exploring" },
      { name: "Machine Learning Basics", level: "Future goal" },
    ],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl glow-card group h-full"
    >
      <h3
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-6`}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
        {category.title}
      </h3>

      <ul className="space-y-3" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex justify-between items-center gap-3 py-2 border-b border-border/40 last:border-0"
          >
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <span className="shrink-0 px-2.5 py-0.5 text-xs rounded-full bg-accent text-accent-foreground">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 dotted-bg opacity-30" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            What I'm Learning
          </span>
          <h2 id="skills-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Foundations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honest levels, no exaggeration - what I use to build websites and what I'm still learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
