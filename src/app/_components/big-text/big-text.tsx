'use client';

import { motion } from 'framer-motion';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  return (
    <div className="h-fit overflow-hidden border-b border-neutral-200 dark:border-neutral-800 pb-10">
      <motion.div className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] max-w-full">
        <span className="animate-flash ">{'>'}</span>
        {title}
      </motion.div>
    </div>
  );
}

export { BigText };
