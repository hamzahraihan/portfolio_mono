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

export default function Layout({ children, certificate }: Readonly<LayoutProps>) {
  return (
    <div className="container mx-auto max-w-full my-20">
      <div>{children}</div>
      <div>{certificate}</div>
    </div>
  );
}
