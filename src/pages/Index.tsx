import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import FloatingDownload from "@/components/FloatingDownload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <GitHubStats />
      <Contact />
      <FloatingDownload />
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Alok Kumar Singh. Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
