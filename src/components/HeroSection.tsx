import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const redText = 'Bringing your ideas';
  const remainingFirstLine = ' Into';
  const secondLine = 'Reality with Tech';
  
  useEffect(() => {
    let currentIndex = 0;
    const totalLength = redText.length + remainingFirstLine.length + secondLine.length;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= totalLength) {
        if (currentIndex <= redText.length + remainingFirstLine.length) {
          setText1((redText + remainingFirstLine).slice(0, currentIndex));
        } else {
          setText1(redText + remainingFirstLine);
          setText2(secondLine.slice(0, currentIndex - (redText.length + remainingFirstLine.length)));
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
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-col gap-2">
            <h1>
              <span className="text-red-500">
                {text1.slice(0, redText.length)}
              </span>
              {text1.slice(redText.length)}
            </h1>
            <h1>{text2}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;