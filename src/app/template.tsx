'use client';

import React from 'react';
import { motion } from 'framer-motion';

function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.75 }}>
      {children}
    </motion.div>
  );
}

export default Template;
