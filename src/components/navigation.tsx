'use client';

import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';
import { motion } from 'framer-motion';

function Navigation() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 48; // Height of your fixed header
      const elementTop = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div className="p-4 min-w-full flex justify-between items-center border-b dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-sm h-12 transform-none" initial={{ y: 0 }}>
      <button onClick={() => scrollToSection('hero')}>hamzahraihan</button>
      <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme != 'light'} aria-readonly />
      <div className="flex gap-20 h-12">
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 h-full">
          <button className="flex h-full items-center" onClick={() => scrollToSection('what-i-do')}>
            <p>What i do</p>
          </button>
        </div>
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
          <div className="flex h-full items-center">
            <p>Who am i</p>
          </div>
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
