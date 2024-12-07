'use client';
import { HeroSection } from './_components/hero';
import AnimatedLayout from '@/components/animated-presence';
export default function Home() {
  return (
    <main className="max-w-full h-full px-2">
      <AnimatedLayout>
        <HeroSection />
      </AnimatedLayout>
    </main>
  );
}
