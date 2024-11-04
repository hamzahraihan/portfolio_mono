import type { Metadata } from 'next';
import HeadPage from './components/head';
import BigText from './components/big_text';

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
