import React from 'react';
import type { Metadata } from 'next';
import AnimatedLayout from '@/components/animated-presence';

export const metadata: Metadata = {
  title: 'Projects - Hamzah Raihan',
  description: 'selected projects',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <AnimatedLayout>
      <div className="container mx-auto max-w-full py-20">
        <div>{children}</div>
      </div>
    </AnimatedLayout>
  );
}
