import { Questrial } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';
import SmoothScroll from '@/components/smooth-scroll';
import Transition from './transition';

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
          <Transition>
            <SmoothScroll navigation={<Navigation />}>{children}</SmoothScroll>
          </Transition>
        </ThemeProvider>
      </body>
    </html>
  );
}
