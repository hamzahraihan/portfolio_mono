'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function MyServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const string =
    "I deliver comprehensive digital solutions tailored to your unique business needs. Through my expertise in web and mobile development. Whether you need a campaign built from scratch or assistance at a specific phase, I've got you covered.";

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
        <AccordionItem value="item-1">
          <AccordionTrigger className="max-w-[40rem] mx-auto">Is it accessible?</AccordionTrigger>
          <AccordionContent className="relative">
            <div className="group relative w-full ">
              <p className="relative max-w-[40rem] mx-auto text-start z-10 transition-colors duration-300 group-hover:text-neutral-100 dark:group-hover:text-neutral-900">Yes. It adheres to the WAI-ARIA design pattern.</p>
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="max-w-[40rem] mx-auto">Is it accessible?</AccordionTrigger>
          <AccordionContent className="relative">
            <div className="group relative w-full ">
              <p className="relative max-w-[40rem] mx-auto text-start z-10 transition-colors duration-300 group-hover:text-neutral-100 dark:group-hover:text-neutral-900">Yes. It adheres to the WAI-ARIA design pattern.</p>
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="max-w-[40rem] mx-auto">Is it accessible?</AccordionTrigger>
          <AccordionContent className="relative">
            <div className="group relative w-full ">
              <p className="relative max-w-[40rem] mx-auto text-start z-10 transition-colors duration-300 group-hover:text-neutral-100 dark:group-hover:text-neutral-900">Yes. It adheres to the WAI-ARIA design pattern.</p>
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { MyServicePage, ServicesList };
