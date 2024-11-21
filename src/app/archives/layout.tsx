import React from 'react';
import type { Metadata } from 'next';
import HorizontalScroll from '@/components/horizontal-scroll';

export const metadata: Metadata = {
  title: 'Archives - Hamzah Raihan',
  description: 'archive page for portfolio website',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="overscroll-none overflow-hidden">
      <h1 className="text-center text-neutral-400">( archives )</h1>
      <HorizontalScroll>{children}</HorizontalScroll>
    </div>
  );
}
