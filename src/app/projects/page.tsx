import type { Metadata } from 'next';
import React from 'react';
import ProjectHeadSection from './components/header';
import ProjectCard from './components/card';

export const metadata: Metadata = {
  title: 'Projects - Hamzah Raihan',
  description: 'portfolio website',
};

function ProjectPage() {
  return (
    <div className="container mx-auto max-w-full my-20">
      <div className="max-w-5xl mx-auto px-2">
        <ProjectHeadSection />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectPage;
