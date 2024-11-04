import type { Metadata } from 'next';
import { BigText } from './components/big_text';
import { HeadPage } from './components/hero';

export const metadata: Metadata = {
  title: 'Hamzah Raihan',
  description: 'portfolio website',
};

export default function Home() {
  return (
    <div className="h-fit mx-auto">
      <HeadPage />
      <BigText title="software_engineer" />
    </div>
  );
}
