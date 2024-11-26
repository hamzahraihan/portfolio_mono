import React from 'react';

function AchievementSection() {
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
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <p className="pb-2 flex items-center gap-1">
          Continuous learning and improvement are the keys to success <span className="w-5 h-0.5 rounded-lg bg-white"></span>
        </p>
      </div>
    </div>
  );
}

export default AchievementSection;
