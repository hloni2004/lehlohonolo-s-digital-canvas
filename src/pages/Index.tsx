import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <footer className="border-t border-border py-8">
        <div className="container">
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            © 2025 Lehlohonolo Mokoena. Built with React + TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
