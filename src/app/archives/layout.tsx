import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archives - Hamzah Raihan',
  description: 'archive page for portfolio website',
};

type LayoutProps = {
  children: React.ReactNode;
  certificate: React.ReactNode;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="overscroll-none">
      <div>{children}</div>
    </div>
  );
}
