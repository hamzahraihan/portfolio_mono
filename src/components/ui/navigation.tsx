'use client';

import { useTheme } from 'next-themes';
import { Switch } from './switch';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isPageTop, setIsPageTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const previousCurrentScrollPos = useRef(0);
  const screenWidth = useMediaQuery();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsPageTop(currentScrollPos == 0);
      if (previousCurrentScrollPos.current < currentScrollPos && !isNavbarVisible) {
        setIsNavbarVisible(true);
      }
      if (previousCurrentScrollPos.current > currentScrollPos && isNavbarVisible) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPos.current = currentScrollPos;
    };
    if (pathname == '/archives' && screenWidth >= 1000) return;
    if (pathname == '/archives' && screenWidth <= 1000) {
      window.addEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavbarVisible, pathname, screenWidth]);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const headerHeight = 48; // Height of your fixed header
  //     const elementTop = element.offsetTop - headerHeight;

  //     window.scrollTo({
  //       top: elementTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <motion.nav
      className="p-4 min-w-full flex justify-between items-center border-b dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm h-12 z-10"
      initial={{ position: 'fixed', y: 0 }}
      animate={!isPageTop && isNavbarVisible ? { y: -100 } : { y: 0 }}
      transition={{ duration: 0.5, type: 'spring', damping: 20, stiffness: 100, restDelta: 0.001 }}
    >
      <Link href="/" className="block lg:hidden">
        hamzah<span className="dark:bg-neutral-50 dark:text-neutral-800 bg-neutral-800 text-neutral-50">raihan</span>
      </Link>
      <div className="hidden lg:flex w-full justify-between items-center">
        <Link href="/">
          hamzah<span className="dark:bg-neutral-50 dark:text-neutral-800 bg-neutral-800 text-neutral-50">raihan</span>
        </Link>
        <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme != 'light'} />
        <div className="flex gap-20 h-12">
          <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 h-full">
            <Link href="/about" className="flex h-full items-center">
              <p>About</p>
            </Link>
          </div>
          {/* <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link href="/projects" className="flex h-full items-center">
              <p>Work</p>
            </Link>
          </div> */}
          <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link href="/archives" className="flex h-full items-center">
              <p>Archives</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <HamburgerMenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm h-[50vh]">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-4 p-4">
                <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 h-full">
                  <Link href="/" className="flex h-full items-center">
                    <p>Home</p>
                  </Link>
                </div>
                <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 h-full">
                  <Link href="/about" className="flex h-full items-center">
                    <p>About</p>
                  </Link>
                </div>
                {/* <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
                  <Link href="/projects" className="flex h-full items-center">
                    <p>Work</p>
                  </Link>
                </div> */}
                <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
                  <Link href="/work" className="flex h-full items-center">
                    <p>Work</p>
                  </Link>
                </div>
                <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme != 'light'} />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.nav>
  );
}

export default Navigation;
