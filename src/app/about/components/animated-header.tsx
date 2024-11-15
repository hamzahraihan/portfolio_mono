/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const AnimatedHeader = ({ firstString, secondString, reverse, className }: { firstString: string; secondString: string; reverse: boolean; className: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center center', 'start end'],
  });

  const firstLetters = firstString.split('');
  const secondLetters = secondString.split('');

  const HandleAnimatedText = (letters: string[], i: number) => {
    const totalLetters = letters.length;
    const handleReverseIndex = () => {
      if (reverse) {
        return totalLetters - 1 - i;
      }
      if (!reverse) {
        return i;
      }
    };
    const reverseIndex = handleReverseIndex() ?? 0;
    const opacityArray = useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [1, 0], { clamp: true });

    const yArray = useTransform(scrollYProgress, [reverseIndex * 0.02, (reverseIndex + 1) * 0.05], [0, 210], { clamp: true });

    const physics = { damping: 15, mass: 0.1, stiffness: 200 };
    const springArray = useSpring(yArray, physics);
    return { opacityArray, springArray };
  };

  return (
    <div ref={containerRef} className="container max-w-full h-fit flex justify-end px-6 flex-col">
      <div className={`flex flex-wrap ${!reverse ? 'justify-start' : 'justify-end'}`}>
        {firstLetters.map((letter, i) => (
          <div key={`${letter}-${i}`}>
            <motion.span className={className} style={{ opacity: HandleAnimatedText(firstLetters, i).opacityArray, y: HandleAnimatedText(firstLetters, i).springArray }}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </div>
        ))}
      </div>
      <div className={`flex flex-wrap ${!reverse ? 'justify-start' : 'justify-end'}`}>
        {secondLetters.map((letter, i) => (
          <motion.span key={`${letter}-${i}`} className={className} style={{ opacity: HandleAnimatedText(secondLetters, i).opacityArray, y: HandleAnimatedText(secondLetters, i).springArray }}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeader;
