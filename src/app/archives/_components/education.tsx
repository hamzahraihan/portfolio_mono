import React from 'react';

function EducationSection() {
  return (
    <div className="h-full w-full p-10">
      <div className="grid grid-cols-3 h-full">
        <div className="flex mt-auto">
          <h1 className="text-[14vh]">Journey</h1>
        </div>
        <div className="col-span-2">
          <div className="grid grid-rows-3 grid-flow-col gap-2 h-full">
            <div className="flex flex-col gap-4 text-sm row-end-3 row-span-2">
              <div className="flex flex-col gap-4 border-t border-l p-2">
                <div className="container">
                  <div className="grid grid-cols-3">
                    <p className="col-span-2">University of Singaperbangsa Karawang</p>
                    <p className="text-neutral-400">Sep 2020 - Jul 2024</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>Information System</p>
                    <p>Karawrang, West Java, ID</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dicta quo atque iusto inventore doloribus placeat quas quaerat nesciunt quis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, corrupti! Error,
                  rem eligendi. Voluptas aut voluptatibus ab qui sequi ipsam.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm row-start-2 row-span-2">
              <div className="flex flex-col gap-4 border-t border-l p-2">
                <div className="container">
                  <div className="flex justify-between">
                    <p>Skilvul</p>
                    <p className="text-neutral-400">Aug 2023 - Dec 2023</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>Fullstack Developer</p>
                    <p>Sout Jakarta, West Java, iD</p>
                  </div>
                </div>
                <p>Led a team of 3 members in developing a full stack application and managed to get our project into the top 8 best project out of 40 teams or 121 participants.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm row-end-6 col-start-1 row-span-3">
              <div className="flex flex-col gap-4 border-t border-l p-2">
                <div className="container">
                  <div className="flex justify-between">
                    <p>Diskominfo Purwakarta</p>
                    <p className="text-neutral-400">Sep 2022 - Dec 2022</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>Fullstack Developer</p>
                    <p>Sout Jakarta, West Java, iD</p>
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
