import React from 'react';
import CertificateSection from './_components/certificate';

function ArchivePage() {
  return (
    <>
      <div className="h-screen w-screen">
        <CertificateSection />
      </div>
      <div className="h-screen w-screen">
        <CertificateSection />
      </div>
      <div className="h-screen w-screen">
        <CertificateSection />
      </div>
    </>
  );
}

export default ArchivePage;
