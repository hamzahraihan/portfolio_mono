import React from 'react';

type ProjectProps = {
  description: string;
  title: string;
  tech: string[];
  image?: string;
};

function ProjectCard({ description, title, tech, image }: Readonly<ProjectProps>) {
  return (
    <div className="border-t border-l border-neutral-500 pt-8 pl-8">
      <div className="grid grid-cols-3 gap-4">
        <div>{title}</div>
        <div className="mx-auto text-start text-sm w-60 text-neutral-500 hover:text-neutral-50 duration-150">
          <p>{description}</p>

          {tech.map((item) => (
            <p key={item}>{item} </p>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="animate-pulse bg-gray-400 h-36 w-full" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
