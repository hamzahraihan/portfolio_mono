'use client';

import React, { useState } from 'react';

function ContactSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleClipboard = () => {
    navigator.clipboard.writeText('hamzahraihanif@gmail.com');
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 2000);
  };

  return (
    <div className="flex justify-between p-3 text-sm h-16">
      <div className="flex flex-col gap-1">
        <p>( socials )</p>
        <ul className="flex gap-2 ">
          <li>IG</li>
          <li>LI</li>
          <li>GH</li>
        </ul>
      </div>
      <div className="flex flex-col text-center">
        <p>( reach out )</p>
        <div className="flex flex-col space-y-0">
          <button
            className="text-neutral-700 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 duration-100 w-64"
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
      <div className="flex items-end gap-1">
        <p>hamzahraihan</p>
      </div>
    </div>
  );
}

export { ContactSection };
