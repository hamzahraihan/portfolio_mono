'use client';

import React, { useState } from 'react';

function HorizontalAccordion({ data }: { data: Array<{ title: string; description: string }> }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex w-[80vw] h-[60vh] gap-2">
      {data.map((item, index) => (
        <button
          type="button"
          key={index + 1}
          className={`border-r relative overflow-hidden transition-all duration-500 ease-in-out
        ${activeTab === index ? 'flex-grow' : 'flex-grow-0 hover:flex-grow-[0.1]'}
        ${activeTab === index ? 'w-96' : 'w-[5vw]'}`}
          onClick={() => setActiveTab(index)}
        >
          <div className="flex h-full bg-transparent">
            <div className="flex flex-col justify-between w-[5vw] h-full transition-opacity duration-300">
              <div className="transform -rotate-90 translate-y-7 whitespace-nowrap">
                <h3 className="text-[3vh]" style={{ direction: 'rtl' }}>
                  {item.title}
                </h3>
              </div>
              <h4 className="transform -translate-y-7 -rotate-90 text-xs whitespace-nowrap">2023 / 2024</h4>
            </div>
            <div
              className={`h-full w-full flex flex-col justify-between transition-opacity duration-300
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
