import type { Metadata } from 'next';
import HeadPage from './components/head';

export const metadata: Metadata = {
  title: 'Hamzah Raihan',
  description: 'portfolio website',
};

export default function Home() {
  return (
    <div className="container h-fit mx-auto">
      <HeadPage />
      <HeadPage />
      <HeadPage />
      <HeadPage />
      <HeadPage />
      <HeadPage />
      <HeadPage />
      <HeadPage />
    </div>
  );
}
