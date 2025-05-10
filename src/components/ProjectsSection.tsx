import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
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
      githubLink: 'https://github.com/Skinnyfella/TripScoot',
      videoLink: 'https://x.com/Iamskinny_fella/status/1911745913736802521'
    },
    {
      title: 'full-stack e-commerce platform',
      description: 'A modern, full-stack e-commerce platform with separate admin and customer interfaces.',
      image: '/lovable-uploads/ecomnmerce.PNG',
      technologies: [
        { name: 'React', color: 'bg-cyan-500' },
        { name: 'API', color: 'bg-green-600' },
        { name: 'Node/Express', color: 'bg-gray-700' },
        { name: 'Supabase', color: 'bg-emerald-600' }
      ],
      demoLink: 'https://full-stack-e-commerce-green.vercel.app/',
      githubLink: 'https://github.com/Skinnyfella/full-stack-e-commerce',
      videoLink: 'https://x.com/Iamskinny_fella/status/1920901009703841922'
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
      githubLink: 'https://github.com/Skinnyfella/task-manager',
      videoLink: 'https://x.com/Iamskinny_fella/status/1904578768552767816'
    },
    {
      title: 'Landing Page',
      description: 'A landing page for a bakery with a modern design and smooth animations. It includes sections for products, testimonials, and a contact form.',
      image: '/lovable-uploads/bakrey.PNG',
      technologies: [
        { name: 'CSS', color: 'bg-blue-600' },
        { name: 'Bootstraps', color: 'bg-purple-600' }
      ],
      demoLink: 'https://skinnyfella.github.io/sugar-and-crumb-bakery/',
      githubLink: 'https://github.com/Skinnyfella/sugar-and-crumb-bakery',
      
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
      demoLink: 'https://my-portfolio-nine-theta-80.vercel.app/',
      githubLink: '#'
    }
  ];

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
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
