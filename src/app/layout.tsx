import { Questrial } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';
import SmoothScroll from '@/components/smooth-scroll';
import { ContactSection } from './components/contact';
import { Metadata } from 'next';
import AnimatedLayout from '@/components/animated-presence';

const questrial = Questrial({
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
      <body className={`${questrial.className} antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <SmoothScroll>
            <AnimatedLayout>
              {children}
              <footer>
                <ContactSection />
              </footer>
            </AnimatedLayout>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
