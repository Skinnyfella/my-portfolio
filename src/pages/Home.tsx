import HeroSection from '../components/HeroSection';
import ParticleBackground from '../components/ParticleBackground';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      <HeroSection />
    </motion.div>
  );
};

export default Home;
