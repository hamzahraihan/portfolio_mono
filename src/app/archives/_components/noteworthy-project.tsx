/* eslint-disable react/no-unescaped-entities */
import HorizontalAccordion from '@/components/ui/horizontal-accordion';
import React from 'react';

const items = [
  {
    title: 'Mountain Lakes',

    description: 'Crystal clear mountain lakes surrounded by towering peaks. Perfect for hiking and photography.',
  },
  {
    title: 'Desert Sunset',

    description: 'Breathtaking desert landscapes with vibrant orange and purple sunsets.',
  },
  {
    title: 'Forest Trails',

    description: 'Serene forest paths winding through ancient trees and lush undergrowth.',
  },
  {
    title: 'Coastal Cliffs',

    description: 'Dramatic coastal cliffs with crashing waves and ocean views.',
  },
  {
    title: 'Coastal Cliffs',

    description: 'Dramatic coastal cliffs with crashing waves and ocean views.',
  },
  {
    title: 'Coastal Cliffs Coastal Cliffs',

    description: 'Dramatic coastal cliffs with crashing waves and ocean views.',
  },
];

function NoteworthySection() {
  return (
    <div className="h-full w-full py-10 px-2">
      <div className="hidden lg:flex flex-col justify-between w-full h-full">
        <h1 className="h-fit w-fit text-[8vh] md:text-[9vh] lg:text-[10vh]">Other noteworthy projects</h1>
        <div className="w-full">
          <HorizontalAccordion data={items} />
        </div>
      </div>
      <div className="block lg:hidden">
        <div>
          <h1 className="text-5xl">Other noteworthy project</h1>
        </div>
      </div>
    </div>
  );
}

export default NoteworthySection;
