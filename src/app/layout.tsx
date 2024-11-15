import { Questrial } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';
import SmoothScroll from '@/components/smooth-scroll';
import { LayoutTransition } from '@/components/layout-transition';
import { ContactSection } from './components/contact';

const questrial = Questrial({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.className} antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <nav>
            <Navigation />
          </nav>
          <SmoothScroll>
            <LayoutTransition initial={{ opacity: 0, filter: 'blur(5px)' }} animate={{ opacity: 1, filter: 'none' }} exit={{ opacity: 0, filter: 'blur(5px)' }}>
              {children}
              <footer>
                <ContactSection />
              </footer>
            </LayoutTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
