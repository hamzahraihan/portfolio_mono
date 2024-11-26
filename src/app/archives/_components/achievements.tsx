import EmblaCarousel from '@/components/ui/embla-carousel';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

function AchievementSection() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="h-full w-full py-10 px-2">
      <div className="grid grid-cols-6 grid-rows-3 h-full w-full">
        <div className="col-span-3 row-end-4">
          <div className="flex flex-col leading-none justify-center">
            <h1 className="font-bold text-[12vh]">Certification</h1>
            <p className="text-neutral-500 text-[2vh] pb-2 flex items-center gap-1">Continuous learning and improvement are the keys to success</p>
            <h1 className="font-bold text-[12vh]">& Achievements</h1>
          </div>
        </div>
        <div>Front-end Development</div>
        <div>Back-end Development</div>
        <div>Best Project</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div className="col-span-3">lorem</div>
        <div className="col-span-3 row-span-3">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
