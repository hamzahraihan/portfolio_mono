'use client';
import React from 'react';
import { motion } from 'framer-motion';

function IntroductionSection() {
  return (
    <div className="max-w-full px-10 py-5">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: 'tween', duration: 1, delay: 0.3 }} className="h-fit w-[40vw] border-t border-l border-neutral-500 p-3 lowercase">
        <h1 className="pb-2">
          1 <span className="w-5 h-1 bg-white"></span> about
        </h1>
        <p className="text-[2vh] pb-2">
          Hamzah is a fullstack developer based in Indonesia. Driven by a spirit of curiosity, his interests encompass language, the arts, literature, visual design, digital media, and music. With a particular passion for coding and design,
        </p>
        <p className="text-[2vh]">
          Hamzah creates powerful both mobile and web app with visual aesthetics but easy to understands by users. His portfolio includes UI/UX design, web application, and mobile application. Additionally, he have hands-on experience with
          technologies like React JS, Next JS, JavaScript, TypeScript, and Flutter.
        </p>
      </motion.div>
    </div>
  );
}

export default IntroductionSection;
