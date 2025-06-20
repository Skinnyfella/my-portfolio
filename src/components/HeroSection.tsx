import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const staticText = 'Full-Stack Developer ';
  const redText = 'Creative Problem Solver';
  
  useEffect(() => {
    let currentIndex = 0;
    const totalLength = staticText.length + redText.length;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= totalLength) {
        if (currentIndex <= staticText.length) {
          setText1(staticText.slice(0, currentIndex));
        } else {
          setText1(staticText);
          setText2(redText.slice(0, currentIndex - staticText.length));
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <h1 className="flex flex-wrap justify-center gap-x-4">
              <span>{text1}</span>
              <span className="text-red-500">{text2}</span>
            </h1>
          </div>

          <h2 className="text-xl md:text-2xl text-muted-foreground mt-2">
            Backend-Focused | Automation-Ready
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mt-6">
            Hi, I'm Ayanfe — I turn complex ideas into clean, scalable code.
            From dynamic UIs to backend automation systems, I build with performance and purpose.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex flex-col items-center">
              <p className="text-lg mb-3">Tech I Work With:</p>
              <div className="flex flex-wrap justify-center gap-y-2 gap-x-3 text-lg max-w-2xl">
                <span className="text-[#F7DF1E]">JavaScript</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[#61DAFB]">React</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[#68A063]">Node.js</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[#306998]">Python</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[#336791]">PostgreSQL</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-[#FF6B6B]">REST APIs</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link
                to="/work"
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="btn-outline transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;