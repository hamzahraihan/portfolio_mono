import { Inconsolata } from 'next/font/google';
import '@/app/ui/globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/ui/navigation';
import SmoothScroll from '@/components/smooth-scroll';
import { ContactSection } from './_components/contact';
import { Metadata } from 'next';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Hamzah Raihan',
  description: 'portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased transition-colors duration-300`}>
        <div id="noise-bg"></div>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <SmoothScroll>
            {children}
            <ContactSection />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
