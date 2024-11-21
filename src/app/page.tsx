'use client';

import { BigText } from './components/big-text';
import { HeroPage } from './components/hero';
import { AboutPage } from './components/about';
import { OtherProjectCTA, MyServicePage } from './components/my-services';

export default function Home() {
  return (
    <main className="max-w-full h-full">
      <HeroPage />
      <BigText title="software_engineer" />
      <AboutPage />
      <MyServicePage />
      <OtherProjectCTA />
    </main>
  );
}
