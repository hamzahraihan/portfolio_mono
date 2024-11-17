import React from 'react';

type ProjectProps = {
  description: string;
  title: string;
  tech?: string[];
  image?: string;
};

function ProjectCard({ description, title, tech, image }: Readonly<ProjectProps>) {
  return (
    <div className="border-t border-l border-neutral-500 p-2">
      <div className="grid grid-cols-3 gap-4">
        <div>{title}</div>
        <div className="mx-auto text-start text-sm w-60">{description}</div>
        <div className="flex justify-end">image</div>
      </div>
    </div>
  );
}

export default ProjectCard;
