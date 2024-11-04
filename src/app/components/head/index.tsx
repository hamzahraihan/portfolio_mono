import CircularText from '@/components/circular-text';
import React from 'react';

function HeadPage() {
  return (
    <div className="flex gap-20 h-96 justify-center mt-10">
      <div className="flex flex-col gap-5 h-fit w-96 mt-10">
        <h1 className="text-2xl">Hi, my name is Hamzah Raihan I&apos;m a Front-End Developer</h1>
        <p>a highly motivated developer with a passion for web development. I am currently seeking new opportunities to expand my skills and contribute to the field of technology.</p>
      </div>
      <div className="w-fit">
        <CircularText text="HAMZAHRAIHAN-SOFTWAREENGINEER-" className="motion-safe:animate-spin-slow duration-1000 dark:text-white" />
      </div>
    </div>
  );
}

export default HeadPage;
