import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';

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

  const projects = [
    {
      title: 'Landing Page',
      description: 'A landing page for a bakery with a modern design and smooth animations. It includes sections for products, testimonials, and a contact form.',
      image: '/lovable-uploads/bakrey.PNG',
      technologies: [
        { name: 'CSS', color: 'bg-blue-600' },
        { name: 'Bootstraps', color: 'bg-purple-600' }
      ],
      demoLink: 'https://skinnyfella.github.io/sugar-and-crumb-bakery/',
      codeLink: 'https://github.com/Skinnyfella/sugar-and-crumb-bakery'
    },
    {
      title: 'Travel Guide App',
      description: 'A modern travel guide that helps travelers and locals discover exciting places around them. With a sleek glass-morphic design and intuitive interface, users can easily find hotels, restaurants, and fun activities in any location.',
      image: '/lovable-uploads/trip.PNG',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'API', color: 'bg-green-600' },
        { name: 'Node/Express', color: 'bg-gray-700' }
      ],
      demoLink: 'https://trip-scout.vercel.app/',
      codeLink: 'https://github.com/Skinnyfella/TripScoot'
    },
    {
      title: 'Task Management App',
      description: 'A mobile application for managing tasks and projects with team collaboration features.',
      image: '/lovable-uploads/task.PNG',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'Node/Express', color: 'bg-gray-700' },
        { name: 'Firebase', color: 'bg-yellow-600' },
        { name: 'Supabase', color: 'bg-emerald-600' }
      ],
      demoLink: 'https://task-manager-rho-flax.vercel.app',
      codeLink: 'https://github.com/Skinnyfella/task-manager'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A sleek portfolio website showcasing my skills, projects, and journey as a developer. Features a responsive design, smooth animations, and a particle background.',
      image: '/lovable-uploads/portfolio.PNG',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'TypeScript', color: 'bg-blue-600' },
        { name: 'Tailwind', color: 'bg-teal-500' }
      ],
      demoLink: '#',
      codeLink: 'https://github.com/Skinnyfella/motion-master-portfolio'
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
    <section id="projects" className="py-20 bg-background/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient-pink">Work</span>
          </h2>
          <div className="h-1 w-20 bg-neon-pink mx-auto mt-4 mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of my recent projects. Each project reflects my passion for creating beautiful,
            functional, and user-friendly applications.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card opacity-0 glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] bg-background/30 backdrop-blur-sm border-border"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
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
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center gap-2 text-neon-pink hover:text-neon-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Code</span>
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
