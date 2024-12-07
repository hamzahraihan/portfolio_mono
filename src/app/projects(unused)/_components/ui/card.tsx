'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ProjectProps = {
  slug: string;
  description: string;
  title: string;
  tech: string[];
  image?: string;
  roles: string[];
  link?: string;
  application?: 'mobile' | 'web';
};

function ProjectCard({ slug, description, title, tech, image, roles, link, application }: Readonly<ProjectProps>) {
  const router = useRouter();

  return (
    <motion.div className="h-72 w-full overflow-hidden" initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', damping: 20, stiffness: 80, duration: 1.2, delay: 0.5 }} viewport={{ once: true }}>
      <div className="flex justify-between">
        <div className="flex gap-10">
          <p className="text-sm text-neutral-400">{roles.join(' | ')}</p>
          <p className="text-sm">{application}</p>
        </div>
        {link && (
          <Link href={link} target="_blank" rel="noreferrer noopener" className="text-sm text-neutral-400 hover:text-neutral-50 duration-150">
            live site
          </Link>
        )}
      </div>
      <div className="border-t border-l border-neutral-500 pt-8 pl-8">
        <div className="grid lg:grid-cols-3 gap-4">
          <Link href={`/projects/${slug}`} className="text-2xl uppercase w-fit h-fit hover:text-neutral-500 duration-200 ease-out">
            {title}
          </Link>
          <div className="hidden lg:flex flex-col gap-5 mx-auto text-start text-sm w-60 text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 hover:dark:text-neutral-50 duration-150">
            <h1>{description}</h1>
            <div className="flex flex-wrap gap-1 leading-none dark:text-neutral-50 text-neutral-800">
              {tech.map((item) => (
                <p key={item}>{item} </p>
              ))}
            </div>
          </div>
          <button className="flex justify-end" onClick={() => router.push('')}>
            {image ? <Image src={image} width={300} height={200} alt="project-image" /> : <div className="animate-pulse bg-gray-400 h-96 w-full" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
