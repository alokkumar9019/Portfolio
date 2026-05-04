import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-bold text-lg mb-1">Master of Science - Chemistry</h4>
                  <p className="text-primary mb-1">SVNIT Surat</p>
                  <p className="text-muted-foreground text-sm mb-2">Expected: July 2025</p>
                  <p className="text-foreground">CGPA: 8.21/10</p>
                </div>
                
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-bold text-lg mb-1">12th Grade</h4>
                  <p className="text-primary mb-1">Scottish Central School Sasaram</p>
                  <p className="text-muted-foreground text-sm mb-2">2019</p>
                  <p className="text-foreground">Percentage: 74%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Experience</h3>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-bold text-lg mb-1">SDE-1</h4>
                  <p className="text-secondary mb-1">Inspiron Labs – Bangalore</p>
                  <p className="text-muted-foreground text-sm mb-4">December 2025 – Present</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Developed reusable React.js + TypeScript components inside a monorepo, cutting new feature build time by 20%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Implemented global state with Zustand and integrated GraphQL APIs to reduce redundant network calls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Optimized rendering with memoization and efficient state updates, reducing unnecessary re-renders by 30%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Modernized legacy frontend modules by migrating JavaScript to TypeScript and built 15+ reusable UI components.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-bold text-lg mb-1">SDE-Intern</h4>
                  <p className="text-secondary mb-1">PCLnXAI – Ahmedabad</p>
                  <p className="text-muted-foreground text-sm mb-4">July 2025 – October 2025</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Fixed 5+ UI and functional issues for HRInsight and delivered a responsive dark mode with 99% cross-browser compatibility.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Built 2+ responsive landing pages using reusable React components, improving load speed by 32%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Integrated frontend modules with REST APIs to improve data fetch performance and lower UI latency by 40%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>Refactored component structure and CI/CD integration to improve frontend maintainability and scalability.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
