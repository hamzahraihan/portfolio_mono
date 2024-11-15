'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  texts: string[];
  title: string;
  id: number;
  position: 'left' | 'right';
  links?: Array<{ title: string; link: string }>;
  gap: boolean;
};

function IntroductionSection({ texts, title, id, position, links, gap }: Readonly<SectionProps>) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className={`h-fit w-[40vw] px-10 py-5 ${position == 'right' ? '' : 'ml-auto'} `}>
      <h1 className="pb-2 flex items-center gap-1">
        {id} <div className="w-2 h-0.5 rounded-lg bg-white" /> {title}
      </h1>
      <div className="border-t border-l border-neutral-500 p-3 lowercase">
        <div className={`flex flex-col ${gap && 'gap-2'}`}>
          {texts.map((text, i) => (
            <div key={i + 2} className="text-[2vh]">
              {text}{' '}
              <span>
                <a href={links?.[i]?.link} target="_blank" rel="noreferrer noopener" className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100">
                  {links?.[i]?.title}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default IntroductionSection;
