'use client';

import React, { useState } from 'react';

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
    title: 'Coastal Cliffs',

    description: 'Dramatic coastal cliffs with crashing waves and ocean views.',
  },
];

function HorizontalAccordion() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex w-full h-[60vh] gap-2">
      {items.map((item, index) => (
        <button
          type="button"
          key={index + 1}
          className={`border-l relative overflow-hidden transition-all duration-500 ease-in-out
        ${activeTab === index ? 'flex-grow' : 'flex-grow-0 hover:flex-grow-[0.1]'}
        ${activeTab === index ? 'w-96' : 'w-12'}`}
          onClick={() => setActiveTab(index)}
        >
          <div className="flex h-full bg-transparent">
            <div className="flex flex-col justify-between w-12 transition-opacity duration-300">
              <h3 className="font-semibold transform -rotate-90 text-xs">{item.title}</h3>
              <h4 className="transform -rotate-90 text-xs">2023 / 2024</h4>
            </div>
            <div
              className={`h-full flex flex-col justify-between p-4 text-white transition-opacity duration-300
          ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default HorizontalAccordion;
