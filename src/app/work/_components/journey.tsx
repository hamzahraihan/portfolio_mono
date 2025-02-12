import React from 'react';
import ArchiveCard from './ui/card';
import ArchiveTitle from './ui/title';

function JourneySection() {
  return (
    <>
      {/* web view */}
      <div className="hidden lg:block h-screen w-screen p-10">
        <div className="flex h-full gap-5">
          <ArchiveTitle>Journey</ArchiveTitle>
          <div className="col-span-2">
            <div className="grid grid-rows-3 grid-flow-col gap-2 h-full">
              <ArchiveCard
                title="University of Singaperbangsa Karawang"
                date="Sep 2020 - Jul 2024"
                position="Information System"
                location="Karawang, West Java, ID"
                description="  Specializing in Information Systems, focusing on designing and managing technology-driven solutions to optimize organizational processes, including analyzing data systems, integrating software, and enhancing
                  decision-making strategies through technology."
                row="row-end-3"
                span="row-span-2"
              />
              <ArchiveCard
                title="Skilvul"
                date="Aug 2023 - Dec 2023"
                position="Fullstack Developer"
                location="Remote, ID"
                description="Led a team of 3 members in developing a full stack application and managed to get our project into the top 8 best project out of 40 teams or 121 participants."
                row="row-start-2"
                span="row-span-2"
              />
              <ArchiveCard
                title="Diskominfo Purwakarta"
                date="Sep 2022 - Dec 2022"
                position="Fullstack Developer"
                location="Purwakarta, West Java, ID"
                description="Designed and developed a news center of public health in Purwakarta using PHP and MySQL. Developed a health center information system using the CodeIgniter framework and MySQL. Designed and developed internal tools using
                  Bootstrap CSS, and Composer."
                row="row-end-6"
                span="row-span-3"
                col="col-start-1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="h-full dark:bg-neutral-50 bg-neutral-900 mb-4">
          <h1 className="text-[9vh] lg:text-[11vh] xl:text-[13vh] text-neutral-50 dark:text-neutral-800 p-2">Journey</h1>
        </div>
        <div className="flex flex-col gap-5">
          <ArchiveCard
            title="University of Singaperbangsa Karawang"
            date="Sep 2020 - Jul 2024"
            position="Information System"
            location="Karawang, West Java, ID"
            description="  Specializing in Information Systems, focusing on designing and managing technology-driven solutions to optimize organizational processes, including analyzing data systems, integrating software, and enhancing
          decision-making strategies through technology."
            row="row-end-3"
            span="row-span-2"
          />
          <ArchiveCard
            title="Skilvul"
            date="Aug 2023 - Dec 2023"
            position="Fullstack Developer"
            location="Remote, ID"
            description="Led a team of 3 members in developing a full stack application and managed to get our project into the top 8 best project out of 40 teams or 121 participants."
            row="row-start-2"
            span="row-span-2"
          />
          <ArchiveCard
            title="Diskominfo Purwakarta"
            date="Sep 2022 - Dec 2022"
            position="Fullstack Developer"
            location="Purwakarta, West Java, ID"
            description="Designed and developed a news center of public health in Purwakarta using PHP and MySQL. Developed a health center information system using the CodeIgniter framework and MySQL. Designed and developed internal tools using
      Bootstrap CSS, and Composer."
            row="row-end-6"
            span="row-span-3"
            col="col-start-1"
          />
        </div>
      </div>
    </>
  );
}

export default JourneySection;
