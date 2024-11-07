'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  // Transform scrollYProgress (0 to 1) into y position (100px to 0)
  const yPos = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div ref={ref} className="h-fit overflow-hidden">
      <motion.div className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] max-w-full" style={{ y: yPos }}>
        <span className="animate-flash ">{'>'}</span>
        {title}
      </motion.div>
    </div>
  );
}

export { BigText };
