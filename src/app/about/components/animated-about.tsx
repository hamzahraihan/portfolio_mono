'use client';

import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection({ texts, title, id }: Readonly<{ texts: string[]; title: string; id: number }>) {
  return (
    <div className="max-w-full px-10 py-5">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="h-fit w-[40vw] border-t border-l border-neutral-500 p-3 lowercase">
        <h1 className="pb-2 flex items-center gap-1">
          {id} <div className="w-2 h-0.5 rounded-lg bg-white" /> {title}
        </h1>
        <div className="flex flex-col gap-2">
          {texts.map((text, i) => (
            <p key={i + 2} className="text-[2vh]">
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default IntroductionSection;
