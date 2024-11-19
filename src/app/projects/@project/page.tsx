import React from 'react';
import ProjectCard from '../components/card';
import { getData } from '@/services/dataFetcher';

type ProjectProps = {
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
  console.log('🚀 ~ ProjectSection ~ projects:', projects);
  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      {projects.map((project: ProjectProps) => (
        <ProjectCard key={project.title} roles={project.roles} title={project.title} application={project.application} description={project.description} tech={project.tech} link={project.link} />
      ))}
    </div>
  );
}

export default ProjectSection;
