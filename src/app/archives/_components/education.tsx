import React from 'react';

function EducationSection() {
  return (
    <div className="h-full w-full p-10">
      <div className="grid grid-cols-3 h-full">
        <div className="flex mt-auto">
          <h1 className="text-[14vh]">Journey</h1>
        </div>
        <div className="col-span-2 p-10">
          <div className="grid grid-rows-2 grid-flow-col grid-cols-2 gap-2 h-full">
            <div className="flex flex-col gap-4 text-sm row-end-3 row-span-2">
              <div className="flex flex-col gap-4 border-t border-l p-2">
                <div className="container">
                  <div className="flex justify-between">
                    <p>University of Singaperbangsa Karawang</p>
                    <p className="text-neutral-400">2020 - 2024</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
