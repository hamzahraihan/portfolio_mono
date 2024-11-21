'use client';

import { BigText } from './components/big-text';
import { HeroPage } from './components/hero';
import { AboutPage } from './components/about';
import { OtherProjectCTA, MyServicePage } from './components/my-services';
import AnimatedLayout from '@/components/animated-presence';

export default function Home() {
  return (
    <main className="max-w-full h-full">
      <AnimatedLayout>
        <HeroPage />
        <BigText title="software_engineer" />
        <AboutPage />
        <MyServicePage />
        <OtherProjectCTA />
      </AnimatedLayout>
    </main>
  );
}
