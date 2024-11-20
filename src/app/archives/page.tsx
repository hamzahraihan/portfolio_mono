'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

function ArchivePage() {
  const fadeVariant = {
    hidden: { opacity: 0, filter: 'blur(5px)' },
    visible: { opacity: 1, filter: 'none' },
    exit: { opacity: 0, filter: 'blur(5px)' },
  };

  return (
    <AnimatePresence mode="popLayout">
      <div className="relative flex">
        {Array.from({ length: 7 }).map((_, index) => (
          <motion.div key={index + 1} className="w-[500px]" variants={fadeVariant} initial="hidden" animate="visible" exit="exit" transition={{ ease: 'easeInOut', duration: 0.75 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias cupiditate obcaecati quia omnis aspernatur deserunt voluptatem consectetur rem tenetur.
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default ArchivePage;
