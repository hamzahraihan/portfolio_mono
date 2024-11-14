/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const AnimatedText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center center', 'start end'],
  });

  const firstString = 'BASED IN';
  const secondString = 'INDONESIA';

  const firstLetters = firstString.split('');
  const secondLetters = secondString.split('');

  const handleAnimatedText = (letters: string[]) => {
    const totalLetters = letters.length;
    const opacityArray = letters.map((_, i) => {
      const reverseIndex = totalLetters - 1 - i;

      return useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [1, 0], { clamp: false });
    });

    const yArray = letters.map((_, i) => {
      const reverseIndex = totalLetters - 1 - i;
      return useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [0, 210]);
    });

    const physics = { damping: 15, mass: 0.1, stiffness: 200 };
    const springArray = yArray.map((y) => useSpring(y, physics));
    return { opacityArray, springArray };
  };

  return (
    <div ref={containerRef} className="container max-w-full flex justify-end px-6  flex-col">
      <div className="flex flex-wrap justify-end">
        {firstLetters.map((letter, i) => (
          <div key={`${letter}-${i}`}>
            <motion.span className="text-[17rem] font-bold flex justify-end h-64" style={{ opacity: handleAnimatedText(firstLetters).opacityArray[i], y: handleAnimatedText(firstLetters).springArray[i] }}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-end">
        {secondLetters.map((letter, i) => (
          <div key={`${letter}-${i}`}>
            <motion.span className="text-[17rem] font-bold flex justify-end h-64" style={{ opacity: handleAnimatedText(secondLetters).opacityArray[i], y: handleAnimatedText(secondLetters).springArray[i] }}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
