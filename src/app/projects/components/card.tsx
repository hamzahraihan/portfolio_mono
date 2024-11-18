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
    <div className="container">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <p className="text-sm text-neutral-400">{serviceProvide.join(' | ')}</p>
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
          <h1 className="text-2xl uppercase">{title}</h1>
          <div className="flex flex-col gap-5 mx-auto text-start text-sm w-60 text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 hover:dark:text-neutral-50 duration-150">
            <h1>{description}</h1>
            <div className="flex flex-wrap gap-1 leading-none dark:text-neutral-50 text-neutral-800">
              {tech.map((item) => (
                <p key={item}>{item} </p>
              ))}
            </div>
          </div>
          <div className="flex justify-end">{image ? <Image src={image} width={300} height={200} alt="project-image" /> : <div className="animate-pulse bg-gray-400 h-36 w-full" />}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
