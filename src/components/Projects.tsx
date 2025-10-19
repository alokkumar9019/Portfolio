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
    title: "React Movie App",
    description: "Movie discovery platform providing information and statistics about 20+ upcoming and released movies with search and filtering capabilities.",
    technologies: ["JavaScript", "TMDb API", "React"],
    highlights: [
      "User base of 5,000+ users",
      "50% boost in usability with redesigned interface",
      "40% reduction in load time",
      "35% increase in user engagement"
    ],
    link: "#"
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
