'use client';

import CircularText from '@/components/circular-text';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div id="hero" className="flex flex-col max-w-full h-screen justify-between pt-16 px-6 pb-6">
      <motion.div className="flex flex-col h-fit lg:mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <h1 className="text-2xl lg:text-5xl">Hamzah Raihan</h1>
        <p>Software Engineer</p>
      </motion.div>
      <motion.div className="flex justify-center w-full h-fit lg:mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <CircularText text="HAMZAHRAIHAN-FULLSTACKDEVELOPER-MOBILE-WEB-" className="motion-safe:animate-spin-slow duration-1000 dark:text-white" />
      </motion.div>
      <motion.div className="flex justify-end w-full lg:h-fit overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>
        <p className="w-80">a highly motivated developer with a passion for mobile and web development. I am currently seeking new opportunities to expand my skills and contribute to the field of technology.</p>
      </motion.div>
    </div>
  );
}

export { HeroSection };
