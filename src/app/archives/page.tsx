'use client';

import React from 'react';
import OtherSection from './_components/other';
import AnimatedLayout from '@/components/animated-presence';
import EducationSection from './_components/education';

function ArchivePage() {
  return (
    <AnimatedLayout>
      <div className="relative flex">
        <div className="h-screen w-screen">
          <EducationSection />
        </div>
        <div className="h-screen w-screen">
          <OtherSection />
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default ArchivePage;
