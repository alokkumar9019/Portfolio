const languages = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  },
  
];

const Skills = () => {
  // Duplicate the languages array for seamless infinite scroll
  const duplicatedLanguages = [...languages, ...languages];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills & Expertise
        </h2>

        {/* Auto-scrolling container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling content */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-horizontal hover:pause-animation">
              {duplicatedLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:border-primary hover:scale-110 hover:shadow-[0_0_30px_hsla(189,94%,55%,0.4)] min-w-[120px]">
                    <img
                      src={lang.icon}
                      alt={lang.name}
                      className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {lang.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
