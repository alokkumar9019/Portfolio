import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const GitHubStats = () => {
  const username = "alokkumar9019";

  return (
    <section id="github" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          GitHub Statistics
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* GitHub Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1b26&title_color=33d2ff&icon_color=bf5af2&text_color=c0caf5`}
                  alt="GitHub Stats"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1b26&title_color=33d2ff&text_color=c0caf5`}
                  alt="Top Languages"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

          {/* GitHub Streak */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover overflow-hidden">
            <CardContent className="p-0">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=1a1b26&ring=33d2ff&fire=bf5af2&currStreakLabel=33d2ff`}
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          {/* Contribution Calendar */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Contribution Calendar</h3>
              </div>
              <img
                src={`https://ghchart.rshah.org/00ff00/${username}`}
                alt="GitHub Contribution Calendar"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>

          
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
