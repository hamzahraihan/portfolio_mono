'use client';

import React from 'react';
import NoteworthySection from './_components/noteworthy-project';
import AnimatedLayout from '@/components/animated-presence';
import JourneySection from './_components/journey';
import AchievementSection from './_components/achievements';

function ArchivePage() {
  return (
    <AnimatedLayout>
      <div className="relative flex">
        <div className="h-screen w-screen">
          <JourneySection />
        </div>
        <div className="h-screen w-screen">
          <NoteworthySection />
        </div>
        <div className="h-screen w-screen">
          <AchievementSection />
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default ArchivePage;
