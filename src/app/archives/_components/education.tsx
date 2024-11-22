import React from 'react';

function EducationSection() {
  return (
    <div className="h-full w-full p-10">
      <div className="grid grid-cols-3 h-full gap-2">
        <div className="flex mt-auto h-full w-full dark:bg-neutral-50 bg-neutral-900">
          <h1 className="text-[14vh] text-neutral-50 dark:text-neutral-800 p-3">Journey</h1>
        </div>
        <div className="col-span-2">
          <div className="grid grid-rows-3 grid-flow-col gap-2 h-full">
            <div className="flex flex-col text-sm row-end-3 row-span-2">
              <div className="flex justify-between">
                <p>University of Singaperbangsa Karawang</p>
                <p className="text-neutral-400">Sep 2020 - Jul 2024</p>
              </div>
              <div className="flex flex-col gap-4 border-t border-l border-neutral-500 p-2">
                <div className="container">
                  <div className="flex justify-between text-md">
                    <p>Information System</p>
                    <p className="text-neutral-400">Karawrang, West Java, ID</p>
                  </div>
                </div>
                <p>
                  Specializing in Information Systems, focusing on designing and managing technology-driven solutions to optimize organizational processes, including analyzing data systems, integrating software, and enhancing
                  decision-making strategies through technology.
                </p>
              </div>
            </div>
            <div className="flex flex-col text-sm row-start-2 row-span-2">
              <div className="flex justify-between">
                <p>Skilvul</p>
                <p className="text-neutral-400">Aug 2023 - Dec 2023</p>
              </div>
              <div className="flex flex-col gap-4 border-t border-l p-2">
                <div className="container">
                  <div className="flex justify-between text-md">
                    <p>Fullstack Developer</p>
                    <p className="text-neutral-400">Sout Jakarta, West Java, iD</p>
                  </div>
                </div>
                <p>Led a team of 3 members in developing a full stack application and managed to get our project into the top 8 best project out of 40 teams or 121 participants.</p>
              </div>
            </div>
            <div className="flex flex-col text-sm row-end-6 col-start-1 row-span-3">
              <div className="flex justify-between">
                <p>Diskominfo Purwakarta</p>
                <p className="text-neutral-400">Sep 2022 - Dec 2022</p>
              </div>
              <div className="flex flex-col border-t border-l p-2">
                <div className="container">
                  <div className="mb-4 flex justify-between text-md">
                    <p>Fullstack Developer</p>
                    <p className="text-neutral-400">Sout Jakarta, West Java, iD</p>
                  </div>
                </div>
                <p>
                  Designed and developed a news center of public health in Purwakarta using PHP and MySQL. Developed a health center information system using the CodeIgniter framework and MySQL. Designed and developed internal tools using
                  Bootstrap CSS, and Composer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
