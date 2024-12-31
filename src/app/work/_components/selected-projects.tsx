import HorizontalAccordion from '@/components/ui/horizontal-accordion';
import { fetcher } from '@/lib/swr/fetcher';
import Image from 'next/image';
import React, { Suspense } from 'react';
import useSWR from 'swr';

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

function SelectedProjects() {
  const { data, isLoading, error } = useSWR('/api/projects', fetcher);
  console.log('🚀 ~ SelectedProjects ~ data:', data?.result);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="h-full w-full lg:py-10 lg:px-2">
      {/* web view */}
      <div className="hidden lg:flex flex-col justify-between w-full h-full">
        <h1 className="h-fit w-fit text-[8vh] md:text-[9vh] lg:text-[10vh]">Selected Projects</h1>
        <div className="w-full">
          <Suspense fallback={<>Loading...</>}>
            <HorizontalAccordion data={isLoading ? [] : data?.result} />
          </Suspense>
        </div>
      </div>
      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl">Selected Projects</h1>
          <Suspense fallback={<>Loading...</>}>
            {data?.result.map((project: ProjectProps) => (
              <div key={project.slug} className="flex flex-col gap-2 border-t py-4">
                <div className="flex flex-col justify-between">
                  <h1 className="text-2xl ">{project.title}</h1>
                  <div className="flex flex-wrap gap-2 text-neutral-400">{project?.tech.toLocaleString('id-ID')}</div>
                </div>
                {project.image ? (
                  <a href={project.link}>
                    <Image className="object-cover h-full w-full" src={project.image} width={400} height={400} alt="project-image" />
                  </a>
                ) : (
                  <div className="bg-neutral-600 w-full h-56 animate-pulse" />
                )}
                <p className="leading-tight">{project.description}</p>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default SelectedProjects;
