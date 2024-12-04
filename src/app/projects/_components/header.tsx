import React from 'react';

function ProjectHeadSection() {
  return (
    <div className="flex flex-col lg:p-10 mb-10">
      <h1 className="text-5xl font-bold">Projects</h1>
      <h1 className="pb-2 flex items-center gap-1">
        <div className="w-5 h-0.5 rounded-lg bg-white" /> selected projects
      </h1>
    </div>
  );
}

export default ProjectHeadSection;
