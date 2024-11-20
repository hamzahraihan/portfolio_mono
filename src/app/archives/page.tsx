import VerticalScroll from '@/components/vertical-scroll';
import React from 'react';

function ArchivePage() {
  return (
    <div className="gap-4 max-w-7xl mx-auto px-2">
      <h1 className="text-center text-neutral-400">( archives )</h1>
      <div className="grid grid-cols-3">
        <VerticalScroll />
        <div className="col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias cupiditate obcaecati quia omnis aspernatur deserunt voluptatem consectetur rem tenetur.</div>
      </div>
    </div>
  );
}

export default ArchivePage;
