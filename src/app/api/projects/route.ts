import { NextRequest, NextResponse } from 'next/server';

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

const ProjectData: ProjectProps[] = [
  {
    slug: 'weather-app',
    roles: ['frontend developer'],
    title: 'Weather App',
    application: 'web',
    description:
      'Weather app is your go-to source for accurate and up-to-date weather information. With a sleek and intuitive interface, you can easily check the current conditions, hourly forecasts, and 7-day outlooks for your desired location.',
    tech: ['Typescript', 'React JS', 'TailwindCSS', 'Geopify API', 'Open Mateo API', 'Open Weather API'],
    image: '/projects/weather-app.png',
    link: 'https://weather-app-cyan-omega.vercel.app/',
  },
  {
    slug: 'student-internship-platform',
    roles: ['fullstack developer', 'UI UX design'],
    title: 'Student Internship Platform',
    application: 'web',
    description: 'Internship platform is designed to bridge the gap between academia and industry, empowering students to achieve their career goals and helping employers find the perfect interns.',
    tech: ['Javascript', 'React JS', 'TailwindCSS', 'MySQL', 'Express JS', 'Sequelize'],
    image: '/projects/student-internship.png',
    link: 'https://sistem-magang-unsika.vercel.app/',
  },
  {
    slug: 'new-york-times-clone',
    roles: ['frontend developer', 'UI UX design'],
    title: 'New York Times Clone',
    application: 'web',
    description:
      "Experience the power of journalism with our New York Times clone. This web application replicates the iconic newspaper's digital experience, offering a curated selection of news articles, opinion pieces, and multimedia content.",
    tech: ['Javascript', 'HTML', 'CSS'],
    link: 'javascript:(0)',
  },
  {
    slug: 'cookbook',
    roles: ['frontend developer', 'UI UX design'],
    title: 'Cookbook',
    application: 'mobile',
    description: 'Discover a world of flavors with our Cookbook App! This intuitive app is your personal chef, providing a vast collection of recipes, cooking tips, and meal planning tools.',
    tech: ['Dart', 'Flutter'],
    link: 'javascript:(0)',
  },
  {
    slug: 'public-health-center-purwakarta',
    roles: ['fullstack developer'],
    title: 'Public Health Center Purwakarta',
    application: 'web',
    description: 'The Public Health Center Purwakarta is committed to improving the health and well-being of our community. Our dedicated team of healthcare professionals provides a wide range of services to meet your health needs.',
    tech: ['PHP', 'CodeIgniter', 'Bootstrap'],
    link: 'javascript:(0)',
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const projects = ProjectData;
  if (slug) {
    const projectById = projects.find((project) => project.slug == slug);
    return NextResponse.json({ status: 200, message: 'success', result: projectById });
  }
  return NextResponse.json({ status: 200, message: 'success', result: projects });
}
