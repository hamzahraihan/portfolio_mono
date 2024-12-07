import React, { Suspense } from 'react';
import ProjectCard from './ui/card';
import { getData } from '@/services/dataFetcher';

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

async function ProjectSection() {
  const res = await getData('http://localhost:3000/api/projects');
  const projects = res.data;

  return (
    <div className="flex flex-wrap lg:flex-col gap-10 overflow-hidden">
      <Suspense fallback={<>loading...</>}>
        {projects.map((project: ProjectProps) => (
          <ProjectCard key={project.title} roles={project.roles} title={project.title} application={project.application} description={project.description} tech={project.tech} link={project.link} slug={project.slug} />
        ))}
      </Suspense>
    </div>
  );
}

export default ProjectSection;
