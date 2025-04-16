
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Lightbulb } from 'lucide-react';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["into reality with tech"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
        showCursor: false
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <Lightbulb className="w-16 h-16 text-neon-pink animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-neon-pink">Bringing Your Ideas </span>
            <span ref={typedRef}></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
