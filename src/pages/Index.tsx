import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { useEffect, useState } from "react";
import { isCaseStudyHash } from "@/data/caseStudies";

const Index = () => {
  const [isCaseStudy, setIsCaseStudy] = useState(isCaseStudyHash(window.location.hash));

  useEffect(() => {
    const onHash = () => setIsCaseStudy(isCaseStudyHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (isCaseStudy) return <CaseStudyPage />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
