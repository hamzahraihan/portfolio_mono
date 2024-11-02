import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hamzah Raihan',
  description: 'portfolio website',
};

export default function Home() {
  return (
    <div className="container h-screen mx-auto">
      <Image src="/next.svg" alt="next icon" width={200} height={200} />
    </div>
  );
}
