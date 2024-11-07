'use client';

import React from 'react';

function AboutPage() {
  return (
    <section id="what-i-do" className="text-center h-96 my-32">
      <div className="flex justify-evenly items-start">
        <div className="flex gap-1 justify-center items-center text-2xl">
          <p>01</p> <div className="h-[0.10rem] w-5 bg-neutral-900 dark:bg-neutral-200 rounded-md" /> <p>WHAT I DO</p>
        </div>
        <div className="w-52">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quis aliquid! Est, consectetur? Necessitatibus sapiente odio ut molestias ratione ipsam!</div>
      </div>
    </section>
  );
}

export { AboutPage };
