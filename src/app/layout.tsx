import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';
import FollowingCursor from '../components/following-dots';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';

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
      <body className={`${questrial.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FollowingCursor
            dotSize={12}
            dotLag={10}
            dotColor="white"
            wrapperElement={
              <>
                <Navigation />
                {children}
              </>
            }
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
