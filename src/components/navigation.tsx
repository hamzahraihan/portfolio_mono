'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { Switch } from './ui/switch';

function Navigation() {
  const { theme, setTheme } = useTheme();
  console.log('🚀 ~ Navigation ~ theme:', theme);

  return (
    <div className="flex sticky top-0 justify-between items-center border-b dark:border-neutral-800 text-sm h-12 mx-4">
      <div>hamzahraihan</div>
      <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme != 'light'} aria-readonly />
      <div className="flex gap-20 h-full">
        <div className="after:duration-200 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-900 after:dark:bg-neutral-300 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
          <div className="flex h-full items-center">
            <p>What i do</p>
          </div>
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
    </div>
  );
}

export default Navigation;
