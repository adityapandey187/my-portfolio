import wicketx from "@/assets/wx-shot.webp";
import techpath from "@/assets/tp-shot.webp";
import portfolio from "@/assets/pf-shot.webp";
import concept from "@/assets/cafe-shot.webp";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  caseStudy?: string;
  size: "large" | "small";
  concept?: boolean;
}

// All claims below come from the live sites and the repos (verified in the earlier audit).
export const projects: Project[] = [
  {
    id: "wicketx",
    index: "01",
    title: "WicketX",
    category: "Cricket information platform",
    description:
      "A free live cricket scores platform: ball-by-ball commentary, full scorecards, schedules, series, teams, player compare, ICC rankings, career records and cricket news, with dark mode, English and Hindi, and a mobile-first design.",
    image: wicketx,
    alt: "Screenshot of the WicketX live cricket scores homepage",
    tech: ["React", "JavaScript", "Python", "FastAPI", "Render"],
    liveUrl: "https://wicketx.onrender.com",
    githubUrl: "https://github.com/adityapandey187/wicketx-cricket",
    caseStudy: "wicketx",
    size: "large",
  },
  {
    id: "techpath",
    index: "02",
    title: "TechPath",
    category: "Technology learning platform",
    description:
      "A learning platform for tech students: roadmaps, career pages with salary ranges, project ideas, curated resources and PathAI, an AI assistant, with accounts that save your progress.",
    image: techpath,
    alt: "Screenshot of the TechPath learning platform sign-in screen",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Gemini API", "Vercel"],
    liveUrl: "https://techpath-mu.vercel.app",
    caseStudy: "techpath",
    size: "large",
  },
  {
    id: "portfolio",
    index: "03",
    title: "Personal Portfolio",
    category: "Developer portfolio",
    description:
      "This site: a single-page developer portfolio with project case studies, services and a project inquiry form. The first version was plain HTML, CSS and JavaScript.",
    image: portfolio,
    alt: "Screenshot of this portfolio website",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
    liveUrl: "https://adityapandey187.github.io/my-portfolio/",
    githubUrl: "https://github.com/adityapandey187/my-portfolio",
    caseStudy: "portfolio",
    size: "small",
  },
  {
    id: "business-concept",
    index: "04",
    title: "Business Website Concept",
    category: "Fictional business demo",
    description:
      "A concept demo of a small-business website: a fictional cafe showing the kind of clean, responsive page I can build for a local business. Not client work.",
    image: concept,
    alt: "Screenshot of the fictional cafe website concept demo",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "concepts/business-site.html",
    size: "small",
    concept: true,
  },
];
