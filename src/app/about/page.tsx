import type { Metadata } from 'next';
import React from 'react';
import AnimatedHeader from './components/animated-header';
import Image from 'next/image';
import IntroductionSection from './components/animated-about';

export const metadata: Metadata = {
  title: 'About - Hamzah Raihan',
  description: 'about hamzah raihan',
};

function AboutPage() {
  return (
    <div className="container max-w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col h-96 gap-2">
          <div className="flex justify-between text-xs uppercase">
            <p>web</p>
            <p className="text-neutral-400">( frontend developer )</p>
            <p>mobile</p>
          </div>
          <div className="bg-neutral-400 h-96 w-72 overflow-hidden blur grayscale hover:blur-0 transition-all duration-300 ease-in-out">
            <Image className="object-cover translate-y-10 w-full h-full mix-blend-multiply" src="/icepop.png" alt="icepop guy" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="h-[150vh]">
        <AnimatedHeader firstString="WEB &" secondString="MOBILE DEV" reverse={false} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
        <div className="flex justify-center items-center py-20 text-xs">
          <div className="w-56 text-center uppercase text-neutral-500">Driven by a spirit of curiosity, his interests encompass language arts, literature, visual design, film and music.</div>
        </div>
        <AnimatedHeader firstString="BASED IN" secondString="INDONESIA" reverse={true} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
      </div>

      <IntroductionSection
        texts={[
          'Hamzah is a fullstack developer based in Indonesia. Driven by a spirit of curiosity, his interests encompass language, the arts, literature, visual design, digital media, and music. With a particular passion for coding and design,',
          ' Hamzah creates powerful both mobile and web app with visual aesthetics but easy to understands by users. His portfolio includes UI/UX design, web application, and mobile application. Additionally, he have hands-on experience with technologies like React JS, Next JS, JavaScript, TypeScript, and Flutter.',
        ]}
        title="about"
        id={1}
      />
    </div>
  );
}

export default AboutPage;
