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
    <div className="h-full w-full lg:px-2">
      {/* web view */}
      <div className="hidden lg:flex flex-col justify-between w-full h-full">
        <h1 className="h-fit w-fit text-[8vh] md:text-[9vh] lg:text-[10vh]">Other noteworthy projects</h1>
        <div className="w-full">
          <HorizontalAccordion data={items} />
        </div>
      </div>
      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">Other noteworthy project</h1>
          {items.map((item, index) => (
            <div key={index + 1} className="border-t py-4">
              <div className="flex justify-between">
                <h1>{item.title}</h1>
                <h1>2023 / 2024</h1>
              </div>
              <div className="bg-neutral-600 w-full h-56 animate-pulse" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoteworthySection;
