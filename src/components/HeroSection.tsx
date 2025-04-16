
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Split text animation for the title
    const title = titleRef.current;
    if (!title) return;
    
    const text = title.innerText;
    const words = text.split(' ');
    
    let newHTML = '';
    words.forEach((word, wordIndex) => {
      if (word === 'Ideas') {
        newHTML += `<span class="text-neon-pink animate-pulse">${word}</span> `;
      } else {
        newHTML += `<span class="word" style="animation-delay: ${wordIndex * 0.1}s">${word}</span> `;
      }
    });
    
    title.innerHTML = newHTML;
    
    // Add animation class to each word
    const wordElements = title.querySelectorAll('.word');
    wordElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Bringing Your Ideas Into Reality with Tech
          </h1>
          
          <div className="w-20 h-20 relative my-8 animate-float">
            <div className="w-full h-full rounded-full border-4 border-neon-cyan border-opacity-20 flex items-center justify-center animate-pulse">
              <div className="w-16 h-16 rounded-full border-4 border-neon-pink border-opacity-40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-blue opacity-70"></div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <Link to="/work" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Let's Connect</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
        <span className="text-sm mb-2 text-muted-foreground">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-neon-pink" />
      </div>
    </section>
  );
};

export default HeroSection;
