'use client';

import CircularText from '@/components/circular-text';
import { Scroll } from '@/components/scroll';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div id="hero" className="flex flex-col lg:flex-row max-w-full  h-[50rem] justify-evenly pt-24 mb-10">
      <motion.div className="flex flex-col gap-5 lg:w-80 h-fit lg:mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        <h1 className="text-3xl">Hi, my name is Hamzah Raihan I&apos;m a Full-stack Developer</h1>
        <p>a highly motivated developer with a passion for mobile and web development. I am currently seeking new opportunities to expand my skills and contribute to the field of technology.</p>
        <div className="h-10 w-10">
          <Scroll />
        </div>
      </motion.div>
      <motion.div className="flex justify-center lg:w-fit lg:h-fit overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }}>
        <CircularText text="HAMZAHRAIHAN-FULLSTACKDEVELOPER-MOBILE-WEB-" className="motion-safe:animate-spin-slow duration-1000 dark:text-white" />
      </motion.div>
    </div>
  );
}

export { HeroSection };
