'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AnimatedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fadeVariant = {
    hidden: { opacity: 0, filter: 'blur(5px)' },
    visible: { opacity: 1, filter: 'none' },
    exit: { opacity: 0, filter: 'blur(5px)' },
  };
  return (
    <AnimatePresence mode="popLayout">
      <motion.section variants={fadeVariant} initial="hidden" animate="visible" exit="exit" transition={{ ease: 'easeInOut', duration: 0.75 }}>
        {children}
      </motion.section>
    </AnimatePresence>
  );
}

export default AnimatedLayout;
