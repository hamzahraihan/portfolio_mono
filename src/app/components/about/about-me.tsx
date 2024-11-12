'use client';

import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <section id="what-i-do" className="text-center h-fit my-32 border-b border-neutral-200 dark:border-neutral-800 pb-36">
      <div className="flex justify-evenly items-start">
        <div className="flex gap-1 justify-center items-center text-2xl">
          <p>WHAT I DO</p>
        </div>
        <div className="w-72 text-start">
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="pb-52 text-2xl">
            I transform complex ideas into elegant digital solutions through code and creativity.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }} className="text-sm pb-4">
            As a full-stack software engineer, I specialize in crafting seamless experiences across web and mobile platforms.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }} className="text-sm">
            My expertise lies in building robust applications that combine intuitive design with powerful functionality. Every project I undertake is driven by a commitment to clean code, user-centered design, and innovative
            problem-solving.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export { AboutPage };
