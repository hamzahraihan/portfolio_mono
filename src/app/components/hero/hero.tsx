'use client';

import CircularText from '@/components/circular-text';
import { Scroll } from '@/components/scroll';
import { motion } from 'framer-motion';
import React from 'react';

function HeadPage() {
  return (
    <div className="flex container mx-auto h-[32rem] gap-20 justify-center mt-10">
      <motion.div className="flex flex-col gap-5 h-fit w-96 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <h1 className="text-2xl">Hi, my name is Hamzah Raihan I&apos;m a Front-End Developer</h1>
        <p>a highly motivated developer with a passion for web development. I am currently seeking new opportunities to expand my skills and contribute to the field of technology.</p>
        <div className="h-10 w-10">
          <Scroll />
        </div>
      </motion.div>
      <motion.div className="w-fit" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>
        <CircularText text="HAMZAHRAIHAN-SOFTWAREENGINEER-" className="motion-safe:animate-spin-slow duration-1000 dark:text-white" />
      </motion.div>
    </div>
  );
}

export { HeadPage };
