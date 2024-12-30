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
    image: 'https://raw.githubusercontent.com/hamzahraihan/new-york-times-clone/refs/heads/main/screenshots/preview1.png',
    link: 'https://new-york-times-clone-javascript.netlify.app/',
  },
  {
    slug: 'e-plant-shopping',
    roles: ['frontend developer', 'UI UX design'],
    title: 'E-Plant Shopping',
    application: 'web',
    description:
      "The app provides an intuitive shopping experience with detailed product descriptions, cultivation tips, and health benefits for each herb. Whether you're looking to grow your own herbal garden or find the perfect ingredients for natural remedies, our app is your one-stop shop for all things herbal.",
    tech: ['React JS', 'Typescript'],
    image: '/projects/e-plantshopping.png',
    link: 'https://hamzahraihan.github.io/e-plantShopping/',
  },
  {
    slug: 'public-health-center-purwakarta',
    roles: ['fullstack developer'],
    title: 'Public Health Center Purwakarta',
    application: 'web',
    description: 'The Public Health Center Purwakarta is committed to improving the health and well-being of our community. Our dedicated team of healthcare professionals provides a wide range of services to meet your health needs.',
    tech: ['PHP', 'CodeIgniter', 'Bootstrap'],
    image: '/projects/puskesmas.png',
    link: 'https://puskesmaskota.purwakartakab.go.id/',
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
