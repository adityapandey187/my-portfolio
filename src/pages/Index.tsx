import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Skills } from "@/components/portfolio/Skills";
import { Faq } from "@/components/portfolio/Faq";
import { Services } from "@/components/portfolio/Services";
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
        <Projects />
        <About />
        <Process />
        <Services />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
