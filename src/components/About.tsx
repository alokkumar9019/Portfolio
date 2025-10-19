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
              
              <div className="border-l-2 border-secondary/30 pl-4">
                <h4 className="font-bold text-lg mb-1">Frontend Intern</h4>
                <p className="text-secondary mb-1">PCLnXAi - Ahmedabad</p>
                <p className="text-muted-foreground text-sm mb-4">July 2025 – Present</p>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Developed user-facing features for HRInsight using React.js, JavaScript (ES6+), and Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Collaborated with UX/UI designers to implement interactive dashboards and reporting tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Integrated RESTful APIs for real-time employee data visualization and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Improved performance and maintainability by optimizing state management and refining reusable UI components</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
