import Image from 'next/image';
import React from 'react';

type ProjectProps = {
  description: string;
  title: string;
  tech: string[];
  image?: string;
  serviceProvide: string[];
  link?: string;
  application?: 'mobile' | 'web';
};

function ProjectCard({ description, title, tech, image, serviceProvide, link, application }: Readonly<ProjectProps>) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-10">
          <p className="text-sm text-neutral-400">{serviceProvide}</p>
          <p className="text-sm">{application}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer noopener" className="text-sm text-neutral-400 hover:text-neutral-50 duration-150">
            live site
          </a>
        )}
      </div>
      <div className="border-t border-l border-neutral-500 pt-8 pl-8">
        <div className="grid grid-cols-3 gap-4">
          <div>{title}</div>
          <div className="mx-auto text-start text-sm w-60 text-neutral-500 hover:text-neutral-50 duration-150">
            <p>{description}</p>
            {tech.map((item) => (
              <p key={item}>{item} </p>
            ))}
          </div>
          <div className="flex justify-end">{image ? <Image src={image} width={300} height={200} alt="project-image" /> : <div className="animate-pulse bg-gray-400 h-36 w-full" />}</div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
