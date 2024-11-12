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
  const GetYPos = (index: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(
      scrollYProgress,
      [0, 1],
      [10 + index * 2, 0], // Smoother progression with index * 2
      { clamp: false }
    );
  };

  const GetOpacity = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [0, 1], [0, 1]);
  };

  return (
    <div className="pb-4">
      <div className="flex flex-col gap-16 mx-auto my-10 max-w-2xl">
        <h1 className="text-lg">MY SERVICES</h1>
        <div ref={containerRef} className="flex flex-wrap gap-x-2">
          {words.map((word, i) => (
            <div key={`${word[i]} ${i}`} className="overflow-hidden">
              <motion.p
                className="text-3xl font-medium"
                style={{
                  y: GetYPos(i),
                  opacity: GetOpacity(),
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
    <div className="max-w-full my-16">
      <Accordion type="single" collapsible className="w-full">
        {datas.map((data) => (
          <AccordionList key={data.id} id={data.id} title={data.title} description={data.description} />
        ))}
      </Accordion>
    </div>
  );
}

function ContactCallToAction() {
  return (
    <div className="mx-auto my-16 max-w-2xl">
      <div className="w-60">
        <p>Got a project in mind? Drop me a line at hamzahraihanif@gmail.com or use the form below.</p>
      </div>
    </div>
  );
}

export { MyServicePage, ServicesList, ContactCallToAction };
