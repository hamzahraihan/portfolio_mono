'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { Switch } from './ui/switch';

function Navigation() {
  const { theme, setTheme } = useTheme();
  console.log('🚀 ~ Navigation ~ theme:', theme);

  return (
    <div className="flex p-4 justify-between items-center border-b dark:border-neutral-800">
      <div>hamzahraihan</div>
      <Switch onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} checked={theme == 'dark' ? false : true} aria-readonly />
      <div className="flex gap-20">
        <div>What i do</div>
        <div>Who am i</div>
        <div>Talk to me</div>
      </div>
    </div>
  );
}

export default Navigation;
