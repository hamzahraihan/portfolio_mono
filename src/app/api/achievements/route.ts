import { NextResponse } from 'next/server';

export type AchievementProps = {
  title: string;
  description: string;
  image: string[];
  link?: string[];
};

const AchievementData: AchievementProps[] = [
  {
    title: 'Best Top 8 project',
    description: 'Top 8 project recognized for innovation and technical skills.',
    image: ['/certificates/skilvul-top8.png'],
    link: ['https://drive.google.com/file/d/1EmbJKaNN66DdNvgY4xw4emf0oxqRevAT/view'],
  },
  {
    title: 'Developing Front-end Apps with React',
    description: 'Completed courses on React.js front-end development, covering key concepts like component-based architecture, state management, and modern development practices.',
    image: ['/certificates/ibm-react.png', '/certificates/dicoding-react.png'],
    link: ['https://www.coursera.org/account/accomplishments/verify/5YMQKS6VIDVK', 'https://www.dicoding.com/certificates/2VX363RLJXYQ'],
  },
  {
    title: 'Programming with Javascript',
    description: 'Gained expertise in JavaScript programming, including ES6+ features, asynchronous programming, and modern development techniques.',
    image: ['/certificates/meta-javascript.png', '/certificates/dicoding-javascript.png'],
    link: ['https://www.coursera.org/account/accomplishments/verify/DBOPOOKLTPFT', 'https://drive.google.com/file/d/1QFVXh2ynRvtIkRoO3UzsjillNSLUAHPo/view'],
  },
  {
    title: 'Mobile Programming',
    description: 'Mastered the basics of mobile app development using Flutter, and cross-platform capabilities.',
    image: ['/certificates/dicoding-flutter.png'],
    link: ['https://www.dicoding.com/certificates/98XW5E8M0PM3'],
  },
];

export async function GET() {
  return NextResponse.json({ status: 200, message: 'success', result: AchievementData });
}
