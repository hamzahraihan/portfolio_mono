import type { Metadata } from 'next';
import React from 'react';
import AnimatedText from './components/animated-text';

export const metadata: Metadata = {
  title: 'About - Hamzah Raihan',
  description: 'about hamzah raihan',
};

function AboutPage() {
  return (
    <div className="container max-w-full my-16 h-[1000vh]">
      <div className="text-[13rem] flex flex-wrap">
        <div>WEB &</div>
        <div>MOBILE DEVELOPER</div>
      </div>
      <AnimatedText />
    </div>
  );
}

export default AboutPage;
