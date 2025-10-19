import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Code, Award } from "lucide-react";
import { useEffect, useState } from "react";

const achievements = [
  {
    platform: "LeetCode",
    icon: Code,
    rating: "1850+",
    badge: "Knight Badge",
    description: "600+ problems solved • Top 5% globally",
    color: "from-orange-500 to-yellow-500"
  },
  {
    platform: "CodeChef",
    icon: Trophy,
    rating: "1609",
    badge: "3-Star",
    description: "Competitive programming excellence",
    color: "from-blue-500 to-cyan-500"
  },
  {
    platform: "Codeforces",
    icon: Star,
    rating: "1252",
    badge: "Pupil",
    description: "Continuous improvement in CP",
    color: "from-green-500 to-emerald-500"
  },
  {
    platform: "GeeksforGeeks",
    icon: Award,
    rating: "1902",
    badge: "4-Star",
    description: "Top 2.78% of 36,062 users",
    color: "from-purple-500 to-pink-500"
  }
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Achievements
        </h2>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 text-center p-6">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter target={600} />+
              </div>
              <div className="text-sm text-muted-foreground">LeetCode Problems</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 text-center p-6">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter target={1850} />+
              </div>
              <div className="text-sm text-muted-foreground">LeetCode Rating</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 text-center p-6">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">
                Top <AnimatedCounter target={5} />%
              </div>
              <div className="text-sm text-muted-foreground">Global Ranking</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 text-center p-6">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-secondary mb-2">
                <AnimatedCounter target={4} />
              </div>
              <div className="text-sm text-muted-foreground">Platform Badges</div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-10`}>
                      <achievement.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{achievement.platform}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.badge}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.rating}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
