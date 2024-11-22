'use client';

import { BigText } from './_components/big-text';
import { HeroPage } from './_components/hero';
import { AboutPage } from './_components/about';
import { OtherProjectCTA, MyServicePage } from './_components/my-services';
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
