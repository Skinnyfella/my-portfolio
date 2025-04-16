
import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Technology = {
  name: string;
  color: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoLink: string;
  codeLink: string;
};

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'Landing Page',
      description: 'A landing page for a bakery with a modern design and smooth animations. It includes sections for products, testimonials, and a contact form.',
      image: 'public/lovable-uploads/25fd122e-0b86-4722-bec0-352eda770c19.png',
      technologies: [
        { name: 'CSS', color: 'bg-blue-600' },
        { name: 'Bootstraps', color: 'bg-purple-600' }
      ],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Travel Guide App',
      description: 'A modern travel guide that helps travelers and locals discover exciting places around them. With a sleek glass-morphic design and intuitive interface, users can easily find hotels, restaurants, and fun activities in any location.',
      image: 'public/lovable-uploads/69ad2248-766c-47c9-9f25-70017207e5a3.png',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'API', color: 'bg-green-600' },
        { name: 'Node/Express', color: 'bg-gray-700' }
      ],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A mobile application for managing tasks and projects with team collaboration features.',
      image: 'public/lovable-uploads/555170fd-e9ef-43af-b218-2d307f797563.png',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'Node/Express', color: 'bg-gray-700' },
        { name: 'Firebase', color: 'bg-yellow-600' },
        { name: 'Supabase', color: 'bg-emerald-600' }
      ],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto mt-4 mb-8"></div>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card opacity-0 glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              {/* Project Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:transform hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-3 py-1 rounded-full text-white ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center gap-1 text-neon-cyan hover:text-neon-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center gap-1 text-neon-pink hover:text-neon-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">Code</span>
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
