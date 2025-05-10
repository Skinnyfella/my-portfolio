import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Array<{ name: string; color: string }>;
  demoLink: string;
  githubLink: string;
  tutorialLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  tutorialLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out" 
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"
        ></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs px-3 py-1 rounded-full text-white ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <a 
            href={demoLink} 
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          
          <a 
            href={githubLink} 
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
  );
};

export default ProjectCard;