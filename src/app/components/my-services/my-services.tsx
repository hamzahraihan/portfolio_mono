'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion } from '@/components/ui/accordion';
import AccordionList from './accordion-list';
import { datas } from '@/datas';

function MyServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const string =
    "I deliver comprehensive digital solutions tailored to your unique business needs. Through my expertise in web and mobile development. Whether you need an application built from scratch or a help to improve your existing app, I've got you covered.";

  const words = string.split(' ');

  // Create transform function for each word
  const getYPos = (index: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(
      scrollYProgress,
      [0, 1],
      [10 + index * 2, 0], // Smoother progression with index * 2
      { clamp: false }
    );
  };

  const getOpacity = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [0, 1], [0, 1]);
  };

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-36">
      <div className="flex flex-col gap-16 mx-auto my-10 max-w-2xl">
        <h1 className="text-lg">MY SERVICES</h1>
        <div ref={containerRef} className="flex flex-wrap gap-x-2">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                className="text-3xl font-medium"
                style={{
                  y: getYPos(i),
                  opacity: getOpacity(),
                }}
              >
                {word}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesList() {
  return (
    <div className="max-w-full my-36">
      <Accordion type="single" collapsible className="w-full">
        {datas.map((data) => (
          <AccordionList key={data.id} id={data.id} title={data.title} description={data.description} />
        ))}
      </Accordion>
    </div>
  );
}

export { MyServicePage, ServicesList };
