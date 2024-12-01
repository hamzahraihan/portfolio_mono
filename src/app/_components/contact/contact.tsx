'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function ContactSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const screenWidth = useMediaQuery();
  const pathname = usePathname();

  const handleClipboard = () => {
    navigator.clipboard.writeText('hamzahraihanif@gmail.com');
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 2000);
  };

  if (pathname == '/archives' && screenWidth >= 1000) return;

  if (pathname !== '/archives' || screenWidth <= 1000) {
    return (
      <footer className="flex justify-between p-3 text-sm h-16 w-full">
        <div className="flex flex-col gap-1">
          <p>( socials )</p>
          <ul className="flex gap-2 space-y-0">
            <li>
              <a href="https://www.instagram.com/hamzah_raihan/" target="_blank" rel="noreferrer noopener" className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100">
                IG
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hamzah-raihan-ikhsanul-fikri-786b101a1/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100"
              >
                LI
              </a>
            </li>
            <li>
              <a href="https://www.github.com/hamzahraihan/" target="_blank" rel="noreferrer noopener" className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100">
                GH
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:text-center text-end">
          <p>( reach out )</p>
          <div className="flex flex-col">
            <button
              className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100 lg:w-64 text-end lg:text-center"
              onClick={handleClipboard}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              disabled={isClick}
            >
              {isHovering ? 'clip to copy' : 'hamzahraihanif@gmail.com'}
            </button>
            <p className={`transition-all ${isClick ? 'opacity-100 visible' : 'invisible opacity-0'} duration-200`}> copied</p>
          </div>
        </div>
        <div className="hidden lg:flex items-end gap-1">
          <p>hamzahraihan</p>
        </div>
      </footer>
    );
  }
}

export { ContactSection };
