'use client';

import { BigText } from './components/big-text';
import { HeroPage } from './components/hero';
import { AboutPage } from './components/about';
import { OtherProjectCTA, MyServicePage } from './components/my-services';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const fadeVariant = {
    hidden: { opacity: 0, filter: 'blur(5px)' },
    visible: { opacity: 1, filter: 'none' },
    exit: { opacity: 0, filter: 'blur(5px)' },
  };
  return (
    <main className="max-w-full h-full">
      <AnimatePresence mode="popLayout">
        <motion.section variants={fadeVariant} initial="hidden" animate="visible" exit="exit" transition={{ ease: 'easeInOut', duration: 0.75 }}>
          <HeroPage />
          <BigText title="software_engineer" />
          <AboutPage />
          <MyServicePage />
          <OtherProjectCTA />
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
