
import { Code, Database, Layers, Globe } from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: <Code className="h-10 w-10 text-neon-cyan" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and technologies.'
    },
    {
      icon: <Database className="h-10 w-10 text-neon-blue" />,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side applications with Node.js, Express, and PostgreSQL.'
    },
    {
      icon: <Layers className="h-10 w-10 text-neon-purple" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from database design to frontend implementation.'
    },
    {
      icon: <Globe className="h-10 w-10 text-neon-pink" />,
      title: 'Web Performance',
      description: 'Optimizing websites for speed, accessibility, and search engine visibility.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-transform duration-300 hover:transform hover:translate-y-[-10px] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-lg glass-card flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-muted-foreground text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
