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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.className} antialiased transition-colors duration-300 bg-white dark:bg-neutral-900 selection:bg-black selection:text-white dark:selection:text-black dark:selection:bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <FollowingCursor
            dotSize={12}
            dotLag={10}
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
