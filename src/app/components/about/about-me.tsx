'use client';

import React from 'react';

function AboutPage() {
  return (
    <section id="what-i-do" className="text-center h-fit my-32">
      <div className="flex justify-evenly items-start">
        <div className="flex gap-1 justify-center items-center text-2xl">
          <p>01</p> <div className="h-[0.10rem] w-5 bg-neutral-900 dark:bg-neutral-200 rounded-md" /> <p>WHAT I DO</p>
        </div>
        <div className="w-72 text-start">
          <h1 className="pb-52 text-2xl">I transform complex ideas into elegant digital solutions through code and creativity.</h1>
          <p className="text-sm pb-4">As a full-stack software engineer, I specialize in crafting seamless experiences across web and mobile platforms.</p>
          <p className="text-sm">
            My expertise lies in building robust applications that combine intuitive design with powerful functionality. Every project I undertake is driven by a commitment to clean code, user-centered design, and innovative
            problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export { AboutPage };
