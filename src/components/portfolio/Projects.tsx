import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import wicketxImg from "@/assets/wx-shot.webp";
import techpathImg from "@/assets/tp-shot.webp";
import portfolioImg from "@/assets/pf-shot.webp";
import conceptImg from "@/assets/cafe-shot.webp";

const projects = [
  {
    id: 3,
    title: "WicketX",
    description:
      "A free live cricket scores platform: ball-by-ball commentary, full scorecards, schedules, series, teams, player compare, ICC rankings, career records and cricket news - with dark mode, English and Hindi, and a mobile-first design.",
    image: wicketxImg,
    technologies: ["React", "JavaScript", "Python", "FastAPI", "Render"],
    liveUrl: "https://wicketx.onrender.com",
    githubUrl: "https://github.com/adityapandey187/wicketx-cricket",
    caseStudy: "wicketx",
    badge: "Featured",
  },
  {
    id: 1,
    title: "TechPath",
    description:
      "A learning platform for tech students: learning roadmaps, career pages with salary ranges, project ideas, curated resources, and PathAI, an AI assistant - with accounts that save your progress.",
    image: techpathImg,
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Gemini API", "Vercel"],
    liveUrl: "https://techpath-mu.vercel.app",
    githubUrl: "",
    caseStudy: "techpath",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio (this site): a dark violet single-page site presenting my projects, skills and contact information. The first version was plain HTML/CSS/JavaScript.",
    image: portfolioImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
    liveUrl: "https://adityapandey187.github.io/my-portfolio/",
    githubUrl: "https://github.com/adityapandey187/my-portfolio",
    caseStudy: "portfolio",
    badge: "Featured",
  },
  {
    id: 4,
    title: "Business Website Concept",
    description:
      "A concept demo of a small-business website: a fictional cafe site showing the kind of clean, responsive page I can build for a local business. Not client work.",
    image: conceptImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "concepts/business-site.html",
    githubUrl: "",
    caseStudy: "",
    badge: "Concept demo",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary text-primary-foreground"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-foreground text-background"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>

        {/* Featured badge */}
        {project.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.caseStudy && (
            <a
              href={`#/case-studies/${project.caseStudy}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary/40 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Case Study
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects I've built, plus one clearly labelled concept demo - more coming as I keep learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
