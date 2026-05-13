import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Crypto Currency Tracker",
    description: "Real-time cryptocurrency price tracker monitoring the current value of 100+ digital currencies with market capitalization, 24H change, and price charts.",
    technologies: ["ReactJs", "Material UI", "Chart JS", "Context API", "Firebase"],
    highlights: [
      "Implemented user authentication using Firebase",
      "Enabled secure login for 1,000+ users",
      "Real-time price updates and analytics"
    ],
    link: "https://cryptocurrrency-tracker.vercel.app/"
  },
  {
    title: "BookBazaar",
    description: "E-commerce platform with comprehensive user and admin functionalities.",
    technologies: ["JavaScript", "Node.js", "CSS", "MongoDB", "Express.js"],
    highlights: [
      "Developed a full-stack e-commerce platform featuring user authentication, authorization, and admin control using,Node.js, Express.js, and MongoDB.",
      "Implemented user registration, login/logout, profile management, and add-to-cart functionality, enhancing user experience.",
      "Designed admin panel for product management, user management, and order processing, streamlining administrative tasks.",
    ],
    link: "https://bookbazaar-v45b.onrender.com/"
  },
  {
    title: "Wanderlust",
    description: "A modern and responsive travel website built to showcase beautiful destinations, travel experiences, and accommodation listings with an attractive and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    highlights: [
      "Modern Travel Website UI with clean and attractive design",
      "Fully responsive design optimized for all devices",
      "Interactive property and destination listings with smooth navigation",
      "Optimized frontend performance for fast loading and user experience"
    ],
    link: "https://wanderlust-app-pi.vercel.app/"
  },
  {
    title: "Wellness Tracker",
    description: "A comprehensive wellness tracking application designed to help users monitor their health metrics, track daily activities, and maintain healthy habits with an intuitive and user-friendly interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    highlights: [
      "Interactive dashboard for tracking multiple health metrics",
      "User-friendly interface with responsive design",
      "Data visualization for progress tracking and insights",
      "Modern frontend architecture with optimized performance"
    ],
    link: "https://v0-wellness-tracker-app-136n.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl mb-4 flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost"
                      className="hover:bg-primary/20 hover:text-primary"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
