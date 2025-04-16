
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Bringing Your Ideas Into Reality with Tech"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span ref={typedRef} className="text-foreground"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
