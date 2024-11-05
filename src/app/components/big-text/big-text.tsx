'use client';

import { motion } from 'framer-motion';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  return (
    <motion.div className="text-center text-[10rem] max-w-full h-fit text-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.8 }}>
      <span className="animate-flash ">{'>'}</span>
      {title}
    </motion.div>
  );
}

export { BigText };
