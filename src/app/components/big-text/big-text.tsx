'use client';

import { motion } from 'framer-motion';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  return (
    <div className="h-fit overflow-hidden border-b border-neutral-200 dark:border-neutral-600 pb-4">
      <motion.div className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] max-w-full">
        <span className="animate-flash ">{'>'}</span>
        {title}
      </motion.div>
    </div>
  );
}

export { BigText };
