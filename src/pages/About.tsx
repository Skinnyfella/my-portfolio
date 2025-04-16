
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
};

export default About;
