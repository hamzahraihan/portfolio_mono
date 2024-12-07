import ProjectImage from '@/app/work/_components/project-image';
import Link from 'next/link';
import React, { useState } from 'react';
type ProjectProps = {
  slug: string;
  description: string;
  title: string;
  tech: string[];
  image?: string;
  roles: string[];
  link?: string;
  application?: 'mobile' | 'web';
};

function HorizontalAccordion({ data }: { data: ProjectProps[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-[80vw] h-[60vh] gap-2">
      {data.map((item, index) => (
        <button
          type="button"
          key={index + 1}
          className={`border-r relative overflow-hidden transition-all duration-500 ease-in-out
        ${activeTab === index ? 'flex-grow' : 'flex-grow-0 hover:flex-grow-[0.1]'}
        ${activeTab === index ? 'w-96' : 'w-[5vw]'}`}
          onClick={() => setActiveTab(index)}
        >
          <div className="flex h-full bg-transparent">
            <div className="flex flex-col justify-between w-[5vw] h-full transition-opacity duration-300">
              <div className="transform -rotate-90 translate-y-7 whitespace-nowrap">
                <h3 className="text-[3vh]" style={{ direction: 'rtl' }}>
                  {item.title}
                </h3>
              </div>
              <h4 className="transform -translate-y-7 -rotate-90 text-xs whitespace-nowrap">2023/2024</h4>
            </div>
            <Link
              className={`relative h-full w-full flex flex-col justify-between transition-opacity duration-300 p-4 text-white
          ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}
              href={`work/project/${item.slug}`}
            >
              <div className="w-full h-full absolute inset-0 top-0 left-0 bg-gradient-to-t from-black opacity-90 -z-10" />
              <div className="absolute inset-0 top-0 left-0 -z-20">
                <ProjectImage url={item.image} />
              </div>

              <div className="mt-auto mx-auto w-96">
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          </div>
        </button>
      ))}
    </div>
  );
}

export default HorizontalAccordion;
