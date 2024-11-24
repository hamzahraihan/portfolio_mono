/* eslint-disable react/no-unescaped-entities */
import HorizontalAccordion from '@/components/ui/horizontal-accordion';
import React from 'react';

function NoteworthySection() {
  return (
    <div className="h-full w-full py-10 px-2">
      <div className="flex flex-col justify-between w-full h-full">
        <h1 className="h-fit w-fit text-[12vh]">Other noteworthy projects</h1>
        <div className="w-full">
          <HorizontalAccordion />
        </div>
      </div>
    </div>
  );
}

export default NoteworthySection;
