import { ArrowDown, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile1.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full filter blur-[128px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-[128px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              <img 
                src={profileImage} 
                alt="Alok Kumar Singh" 
                className="relative w-40 h-40 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center gap-4">
            <a 
              href="https://github.com/alokkumar9019" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/singhalokkumar459" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:singhalokkumar459@gmail.com"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/u/alokkumar9019/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient animate-gradient">Alok Kumar Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Frontend Developer & Competitive Programmer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            M.Sc. Chemistry @ SVNIT Surat • Frontend Intern @ PCLnXAi • 600+ LeetCode Problems • Passionate about creating beautiful, performant web experiences
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-[0_0_30px_hsla(189,94%,55%,0.4)] hover:shadow-[0_0_40px_hsla(189,94%,55%,0.6)]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full transition-all duration-300"
              asChild
            >
              <a href="/Alok_Resume.pdf" download>
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
