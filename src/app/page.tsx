import type { Metadata } from 'next';
import { BigText } from './components/big-text';
import { HeroPage } from './components/hero';
import { AboutPage } from './components/about';

export const metadata: Metadata = {
  title: 'Hamzah Raihan',
  description: 'portfolio website',
};

export default function Home() {
  return (
    <main className="max-w-full h-full">
      <HeroPage />
      <BigText title="software_engineer" />
      <BigText title="software_engineer" />
      <BigText title="software_engineer" />
      <BigText title="software_engineer" />
      <BigText title="software_engineer" />
      <AboutPage />
    </main>
  );
}
