import { Questrial } from 'next/font/google';
import './globals.css';
import FollowingCursor from '../components/following-dots';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';
import SmoothScroll from '@/components/smooth-scroll';

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
        <SmoothScroll navigation={<Navigation />}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <FollowingCursor dotSize={12} dotLag={10} wrapperElement={<>{children}</>} />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
