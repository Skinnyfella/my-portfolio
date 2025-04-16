
import React from 'react';
import { Typed } from 'react-typed';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <Typed
              strings={["Bringing Your Ideas Into Reality with Tech"]}
              typeSpeed={50}
              showCursor={true}
              cursorChar="|"
              className="text-foreground"
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
