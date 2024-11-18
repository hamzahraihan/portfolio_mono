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
      <div className="max-w-7xl mx-auto px-2">
        <ProjectHeadSection />
        <ProjectCard
          serviceProvide={['frontend developer']}
          title="Weather App"
          application="web"
          description="Weather app is your go-to source for accurate and up-to-date weather information. With a sleek and intuitive interface, you can easily check the current conditions, hourly forecasts, and 7-day outlooks for your desired location."
          tech={['Typescript', 'React JS', 'Geopify API', 'Open Mateo API', 'Open Weather API']}
          link="javascript:(0)"
        />
        <ProjectCard
          serviceProvide={['fullstack developer', 'UI UX design']}
          title="Student Internship Platform"
          application="web"
          description="Weather app is your go-to source for accurate and up-to-date weather information. With a sleek and intuitive interface, you can easily check the current conditions, hourly forecasts, and 7-day outlooks for your desired location."
          tech={['Typescript', 'React JS', 'Geopify API', 'Open Mateo API', 'Open Weather API']}
          link="javascript:(0)"
        />
      </div>
    </div>
  );
}

export default ProjectPage;
