'use client';

import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isPageTop, setIsPageTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const previousCurrentScrollPos = useRef(0);

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavbarVisible]);

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

  const { push } = useRouter();

  return (
    <motion.div
      className="p-4 min-w-full flex justify-between items-center border-b dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm h-12 z-10"
      initial={{ position: 'fixed', y: 0 }}
      animate={!isPageTop && isNavbarVisible ? { y: -100 } : { y: 0 }}
      transition={{ duration: 0.5, type: 'spring', damping: 20, stiffness: 100, restDelta: 0.001 }}
    >
      <button onClick={() => push('/')}>hamzahraihan</button>
      <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme != 'light'} />
      <div className="flex gap-20 h-12">
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 h-full">
          <button className="flex h-full items-center" onClick={() => push('/about')}>
            <p>About</p>
          </button>
        </div>
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
          <button className="flex h-full items-center" onClick={() => push('/projects')}>
            <p>Work</p>
          </button>
        </div>
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
          <div className="flex h-full items-center">
            <p>Talk to me</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navigation;
