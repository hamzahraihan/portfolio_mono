'use client';

import React from 'react';
import CertificateSection from './_components/certificate';
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
          <CertificateSection />
        </div>
        <div className="h-screen w-screen">
          <CertificateSection />
        </div>
      </div>
    </AnimatedLayout>
  );
}

export default ArchivePage;
