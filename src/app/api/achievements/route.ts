import { NextResponse } from 'next/server';

export type AchievementProps = {
  title: string;
  provider: string;
  image: string;
  link?: string;
};

const AchievementData: AchievementProps[] = [
  {
    title: 'Best Top 8 project',
    provider: 'Skilvul',
    image: '/certificates/skilvul-top8.png',
    link: 'https://drive.google.com/file/d/1EmbJKaNN66DdNvgY4xw4emf0oxqRevAT/view',
  },
  {
    title: 'Developing Front-end Apps with React',
    provider: 'IBM',
    image: '/certificates/ibm-react.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/5YMQKS6VIDVK',
  },
  {
    title: 'Programming with Javascript',
    provider: 'Meta',
    image: '/certificates/meta-javascript.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/DBOPOOKLTPFT',
  },
  {
    title: 'Introduction to Software Engineering',
    provider: 'IBM',
    image: '/certificates/ibm-soft-engi.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/VLX1Y7JSDFE1',
  },
];

export async function GET() {
  return NextResponse.json({ status: 200, message: 'success', result: AchievementData });
}
