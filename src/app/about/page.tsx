import type { Metadata } from 'next';
import React from 'react';
import AnimatedText from './components/animated-text';

export const metadata: Metadata = {
  title: 'About - Hamzah Raihan',
  description: 'about hamzah raihan',
};

function AboutPage() {
  return (
    <div className="container max-w-full my-20 h-[1000vh]">
      <AnimatedText firstString="WEB &" secondString="MOBILE DEV" reverse={false} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
      <div className="flex justify-center items-center py-20 text-xs">
        <div className="w-56 text-center uppercase text-neutral-500">Driven by a spirit of curiosity, his interests encompass language arts, literature, visual design, film and music.</div>
      </div>
      <AnimatedText firstString="BASED IN" secondString="INDONESIA" reverse={true} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
    </div>
  );
}

export default AboutPage;
