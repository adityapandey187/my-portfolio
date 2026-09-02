/* =========================================================================
   data.js — THE ONLY FILE YOU NEED TO EDIT FOR PERSONAL CONTENT
   -------------------------------------------------------------------------
   Everything shown on the website (name, bio, skills, projects, links)
   comes from this file. Change a value here and the whole site updates.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) BASIC PROFILE — your name, titles and intro text
   ------------------------------------------------------------------------- */
export const profile = {
  // Shown in the navbar logo and the footer
  name: "Aditya",

  // Small text next to the logo
  logoTag: "CS Student",

  // Hero section
  greeting: "Hi, I'm Aditya",
  headline: "Computer Science Engineering Student & Aspiring AI/ML Engineer",
  tagline:
    "I'm a first-semester Computer Science Engineering student building my programming and computer science foundations, with a long-term goal of becoming an AI/ML engineer.",

  // The little glowing badge above the hero heading
  statusBadge: "First Semester • CSE Foundations • Aspiring AI/ML Engineer",

  email: "adityapandey451807@gmail.com",
  location: "Greater Noida, Uttar Pradesh",
};

/* -------------------------------------------------------------------------
   2) ABOUT SECTION — paragraphs + highlight cards
   ------------------------------------------------------------------------- */
export const about = {
  title: "About Me",
  subtitle: "A short introduction",

  // Each string below becomes one paragraph
  paragraphs: [
    "I'm Aditya, a first-semester Computer Science Engineering student at the beginning of my B.Tech journey. Right now, my focus is on building strong basics instead of pretending to know everything too early.",
    "I'm learning programming fundamentals, problem solving, computer science concepts, and the habits needed to study technical subjects consistently. I want to understand each concept properly and grow step by step.",
    "My long-term career goal is to become an AI/ML engineer. For now, that means strengthening the maths, programming, and computer science foundation that artificial intelligence and machine learning are built on.",
  ],

  // Honest highlights — these are statements, not fake statistics
  highlights: [
    { label: "First Semester", note: "Starting my CSE degree", icon: "book" },
    { label: "CSE Student", note: "Bachelor's degree in progress", icon: "chip" },
    { label: "AI/ML Goal", note: "Long-term career direction", icon: "network" },
    { label: "Always Learning", note: "Consistency over shortcuts", icon: "spark" },
  ],
};

/* -------------------------------------------------------------------------
   3) SKILLS SECTION
   -------------------------------------------------------------------------
   "level" is only a short honest word shown on the card.
   Keep it truthful: "Learning", "Basics", "Comfortable".
   ------------------------------------------------------------------------- */
export const skillGroups = [
  {
    title: "Programming Foundations",
    note: "Core basics I am learning",
    icon: "code",
    accent: "blue",
    items: [
      { name: "Programming Logic", badge: "01", level: "Learning" },
      { name: "C Programming", badge: "C", level: "Learning" },
      { name: "Python Basics", badge: "Py", level: "Starting" },
      { name: "Problem Solving", badge: "PS", level: "Learning" },
    ],
  },
  {
    title: "Currently Learning",
    note: "What I'm actively studying",
    icon: "spark",
    accent: "purple",
    items: [
      { name: "Computer Science Basics", badge: "CS", level: "Learning" },
      { name: "Mathematics for CS", badge: "Math", level: "Building" },
      { name: "AI Concepts", badge: "AI", level: "Exploring" },
      { name: "Machine Learning Basics", badge: "ML", level: "Future goal" },
    ],
  },
  {
    title: "Tools",
    note: "Tools I am getting familiar with",
    icon: "terminal",
    accent: "cyan",
    items: [
      { name: "Code Editor", badge: "IDE", level: "Learning" },
      { name: "Version Control", badge: "Git", level: "Starting" },
      { name: "Web Basics", badge: "Web", level: "Learning" },
    ],
  },
];

/* -------------------------------------------------------------------------
   4) PROJECTS SECTION
   -------------------------------------------------------------------------
   To add a project: copy one { ... } block and change the values.
   status: "completed" | "in-progress" | "coming-soon"
   Leave github/demo as "" (empty) and the button becomes disabled.
   ------------------------------------------------------------------------- */
export const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website that presents my current learning journey as a first-semester Computer Science Engineering student.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "images/project-portfolio.svg",
    imageAlt: "Illustration of a responsive portfolio website on desktop and mobile",
    status: "in-progress",
    github: "",
    demo: "#home", // this very website
  },
  {
    name: "More Projects Coming Soon",
    description:
      "I will add projects here as I actually build them during my Computer Science Engineering learning journey.",
    tech: ["Learning", "Practice"],
    image: "images/project-ai-ml.svg",
    imageAlt: "Illustration of a neural network with connected nodes and a data chart",
    status: "coming-soon",
    github: "",
    demo: "",
  },
];

/* -------------------------------------------------------------------------
   5) EDUCATION SECTION
   ------------------------------------------------------------------------- */
export const education = [
  {
    period: "Present",
    title: "Bachelor's Degree in Computer Science Engineering",
    detail: "First-semester student building foundations in programming and computer science.",
    state: "current",
  },
  {
    period: "Goal",
    title: "Aspiring AI/ML Engineer",
    detail: "Long-term career goal focused on artificial intelligence and machine learning.",
    state: "planned",
  },
];

/* -------------------------------------------------------------------------
   6) LEARNING JOURNEY TIMELINE
   ------------------------------------------------------------------------- */
export const journey = [
  {
    year: "Now",
    title: "Building CSE Foundations",
    detail: "Learning programming logic, basic computer science concepts, and consistent study habits.",
  },
  {
    year: "Next",
    title: "Growing Programming Skills",
    detail: "Practising small programs and problem solving one topic at a time.",
  },
  {
    year: "Future",
    title: "Exploring Artificial Intelligence & Machine Learning",
    detail: "Building the maths and Python foundation needed to understand how models actually learn.",
  },
  {
    year: "Future",
    title: "Building Real-World Projects",
    detail: "Turning what I learn into projects that solve small, real problems end to end.",
  },
];

/* -------------------------------------------------------------------------
   7) SOCIAL LINKS
   ------------------------------------------------------------------------- */
export const socials = [
  // Add real public profile URLs here when they are ready.
];

export const contactSocials = [
  { label: "GitHub", url: "https://github.com/adityapandey187" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aditya-pandey-0ba208427/" },
  { label: "Instagram", url: "https://www.instagram.com/adityapandey0.7?igsi=Z3M0NTg2NTR1ZXZh" },
];

/* -------------------------------------------------------------------------
   8) NAVIGATION + FOOTER
   ------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export const footer = {
  text: "© 2026 Aditya. Built with curiosity, code, and a lot of learning.",
};
