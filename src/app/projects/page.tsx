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
      <div className="gap-4 max-w-7xl mx-auto px-2">
        <ProjectHeadSection />
        <div className="flex flex-col gap-10">
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
            description="Internship platform is designed to bridge the gap between academia and industry, empowering students to achieve their career goals and helping employers find the perfect interns."
            tech={['Javascript', 'React JS', 'MySQL', 'Express JS', 'Sequelize']}
            link="javascript:(0)"
          />
          <ProjectCard
            serviceProvide={['frontend developer', 'UI UX design']}
            title="New York Times Clone"
            application="web"
            description="Experience the power of journalism with our New York Times clone. This web application replicates the iconic newspaper's digital experience, offering a curated selection of news articles, opinion pieces, and multimedia content."
            tech={['Javascript', 'HTML', 'CSS']}
            link="javascript:(0)"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
