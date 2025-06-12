import { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

const AboutSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', percentage: 70, color: 'from-neon-cyan to-neon-blue' },
    { name: 'JavaScript', percentage: 70, color: 'from-neon-yellow to-neon-blue' },
    { name: 'Python', percentage: 75, color: 'from-[#306998] to-[#FFD43B]' },
    { name: 'Node.js/Express', percentage: 75, color: 'from-neon-purple to-neon-pink' },
    { name: 'Automation/Scripting', percentage: 70, color: 'from-[#FF6B6B] to-[#4ECDC4]' },
    { name: 'CSS/Tailwind/SCSS', percentage: 63, color: 'from-neon-pink to-neon-purple' },
    { name: 'Database Management', percentage: 72, color: 'from-neon-cyan to-neon-blue' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all progress bars within this section
            const progressBars = entry.target.querySelectorAll('.skills-progress-bar');
            progressBars.forEach((bar, index) => {
              if (bar instanceof HTMLElement) {
                // Set a CSS variable to control the animation width
                bar.style.setProperty('--progress-width', `${skills[index].percentage}%`);
                bar.classList.add('animate-progress');
              }
            });
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skills]);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-pink">Me</span>
          </h2>
          <div className="h-1 w-20 bg-neon-pink mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-blue">
                <img 
                  src="/lovable-uploads/7e736fc7-8fab-432d-a6f6-38a7a194d265.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg text-muted-foreground">
            I'm Ayanfe Toyinbo, a junior full-stack developer with a backend focus and a passion for building clean, scalable systems. I bring a strong eye for design and a commitment to seamless user experiences — whether it's crafting responsive UIs or engineering robust APIs.
            </p>
            <p className="text-lg text-muted-foreground">
            I thrive at the intersection of creativity and logic, combining technical depth with problem-solving to build modern web apps, automation tools, and data-driven solutions. I'm continuously learning, writing efficient code, and staying up to date with best practices in development, architecture, and workflow automation.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="skills-progress">
                  <div 
                    className={`skills-progress-bar bg-gradient-to-r ${skill.color}`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="mt-12 p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
          <h3 className="text-xl font-semibold mb-4 text-white">Certification</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-medium text-white">Full Stack Web Development</h4>
              <p className="text-muted-foreground">Udemy BootCamp</p>
              <p className="text-sm text-muted-foreground">2024</p>
            </div>
            <a 
              href="http://ude.my/UC-b8d8ed60-4702-425b-a902-d1ea1951f60f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-700 rounded-md hover:bg-slate-700/50 transition-colors duration-300 text-white"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
