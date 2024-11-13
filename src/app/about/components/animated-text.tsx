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

  const string = 'BASED IN INDONESIA';
  const letters = string.split('');
  console.log('🚀 ~ AnimatedText ~ letters:', letters);
  const totalLetters = letters.length;

  const opacityArray = letters.map((_, i) => {
    const reverseIndex = totalLetters - 1 - i;

    return useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [1, 0], { clamp: false });
  });

  const yArray = letters.map((_, i) => {
    const reverseIndex = totalLetters - 1 - i;
    return useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [0, 50]);
  });

  const physics = { damping: 15, mass: 0.1, stiffness: 200 };
  const springArray = yArray.map((y) => useSpring(y, physics));

  return (
    <div ref={containerRef} className="flex flex-wrap">
      {letters.map((letter, i) => (
        <div key={`${letter}-${i}`}>
          <motion.span className="text-[10rem] font-medium flex justify-center h-36 white" style={{ opacity: opacityArray[i], y: springArray[i] }}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
