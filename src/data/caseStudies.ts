export interface CaseStudy {
  slug: string;
  title: string;
  overview: string;
  problem: string;
  designApproach: string;
  devApproach: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wicketx",
    title: "WicketX - Live Cricket Scores",
    overview:
      "WicketX is a free live cricket scores web app covering men's and women's international and franchise cricket. It is live at wicketx.onrender.com.",
    problem:
      "Cricket score APIs are expensive or rate-limited. I wanted a personal project that shows real live scores, commentary and records at zero running cost.",
    designApproach:
      "Dark, mobile-first layout with a top navigation (Matches, Schedule, Series, Teams, News, Rankings, Compare, Community), live/recent score cards on the homepage, and English and Hindi options.",
    devApproach:
      "The frontend is a single-page app built with React and JavaScript. The backend is a self-hosted Python API built with FastAPI: it fetches Cricbuzz's public pages, parses the match data embedded in them, caches results in memory with short time-to-live values, and serves clean JSON to the frontend. No paid API keys.",
    technologies: ["React", "JavaScript", "Python", "FastAPI", "httpx", "BeautifulSoup", "Render"],
    features: [
      "Live and recent match scores with ball-by-ball commentary and full scorecards",
      "Schedule, series, teams and player compare sections",
      "ICC rankings for men's and women's cricket",
      "Cricket news feed",
      "Career records including women's records",
      "Dark theme, mobile-first layout, English and Hindi",
    ],
    challenges:
      "The source pages change shape without notice, so the parser had to read the structured match data embedded in the page rather than screen-scraping layout HTML. Caching with different TTLs (15s for live games, longer for completed lists) keeps responses fast without hammering the source.",
    outcome:
      "A working, publicly accessible live-scores platform that I built end to end: scraper, API, frontend and deployment on Render's free tier.",
  },
  {
    slug: "techpath",
    title: "TechPath - Tech Learning Platform",
    overview:
      "TechPath is a learning platform for tech students, live at techpath-mu.vercel.app, with learning roadmaps, career information, project ideas, resources and an AI assistant.",
    problem:
      "Students picking a tech path get scattered advice. TechPath puts roadmaps, careers and project ideas in one place, with an assistant to answer questions.",
    designApproach:
      "A clean dashboard-style layout with a top navigation: Roadmaps, Careers, Projects, Resources, AI Assistant and a personal dashboard. Accounts save each user's progress.",
    devApproach:
      "A React and TypeScript single-page app built with Vite and deployed on Vercel, with accounts and saved progress through Supabase. The AI assistant (PathAI) uses the Google Gemini API.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Google Gemini API", "Vercel"],
    features: [
      "Learning roadmaps for tech paths",
      "Career pages with salary ranges",
      "Project ideas and curated resources",
      "PathAI, an AI assistant",
      "Accounts with progress tracking and a personal dashboard",
    ],
    challenges:
      "Structuring a large amount of roadmap and career content so it stays navigable, and wiring accounts so progress follows the user across devices.",
    outcome:
      "A live, working platform with sign-up, saved progress and an AI assistant. One known limitation: deep links (for example opening /roadmaps directly) currently return a 404 because the Vercel deployment is missing a single-page-app rewrite rule; a fix is planned.",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio Website",
    overview:
      "This site: my personal portfolio, built with React, TypeScript, Tailwind CSS and Vite, hosted on GitHub Pages.",
    problem:
      "I needed a single place that presents my projects, skills and contact information in a professional way.",
    designApproach:
      "A dark violet theme with a portrait hero, animated sections, and a single scrolling page: hero, about, skills, learning journey, projects and contact.",
    devApproach:
      "A Vite React app with typed components and utility-first styling, built statically and published through GitHub Pages with an automated build. This is the second version; the first was plain HTML, CSS and JavaScript.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
    features: [
      "Responsive layout from mobile to desktop",
      "Animated section reveals",
      "Project cards with live links and case studies",
      "Contact section with direct email",
    ],
    challenges:
      "Getting the base path and asset URLs right for GitHub Pages project-site hosting, and keeping animations smooth without hurting performance.",
    outcome:
      "The site you are reading now. It is the public front door for my work.",
  },
];

export const isCaseStudyHash = (hash: string) => /^#\/case-studies\//.test(hash);
