import ContactSection from '../components/ContactSection';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
