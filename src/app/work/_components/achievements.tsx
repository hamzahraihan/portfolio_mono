import React from 'react';
import Modal from './ui/modal';
import { CarouselItem } from '@/components/ui/carousel';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/fetcher';
import Image from 'next/image';
import { AchievementProps } from '@/app/api/achievements/route';

function Carousel({ data }: { data: AchievementProps }) {
  return (
    <Modal title={data.title} description={data.description}>
      {data?.image.map((image, index) => (
        <CarouselItem key={index + 1}>
          <div className="p-1">
            <div className="flex aspect-square items-center justify-center p-6">
              <Image className="object-cover w-full h-56" src={image} alt="achivement image" width={200} height={200} />
            </div>
          </div>
        </CarouselItem>
      ))}
    </Modal>
  );
}

function AchievementSection() {
  const { data, isLoading } = useSWR('/api/achievements', fetcher);
  console.log(data);

  return (
    <div className="h-full w-full py-10 lg:px-10">
      {/* web view */}
      <div className="hidden lg:grid grid-cols-6 grid-rows-3 gap-2 h-full w-full">
        <div className="text-xl text-neutral-500">Continuous</div>
        <div className="text-xl text-neutral-500 text-center">learning and</div>
        <div className="text-xl text-neutral-500 text-center">improvement</div>
        <div className="text-xl text-neutral-500 text-center">are the </div>
        <div className="text-xl text-neutral-500 text-center">keys</div>
        <div className="text-xl text-neutral-500 text-end">to success</div>

        <div className="col-span-3 row-end-4 mt-auto">
          <div className="flex flex-col leading-none justify-center">
            <h1 className="uppercase font-semibold text-[6vh] md:text-[7vh] lg:text-[8vh]">Certification</h1>
          </div>
        </div>

        <div className="row-end-4 col-end-7 col-span-2">
          <div className="flex justify-evenly items-end w-full h-full">
            <h1 className="uppercase font-semibold text-[6vh] md:text-[7vh] lg:text-[8vh]">& Achievements</h1>
          </div>
        </div>
        {isLoading ? (
          'loading...'
        ) : (
          <>
            {data?.result.map((item: AchievementProps) => (
              <Carousel key={item.title} data={item} />
            ))}
          </>
        )}
      </div>
      {/* mobile view */}
      <div className="flex flex-col lg:hidden">
        <h1 className="text-4xl border-b pb-4">Certification & Achievements</h1>
        <div className="flex flex-col gap-2 mt-5">
          {isLoading ? (
            'loading...'
          ) : (
            <>
              {data?.result.map((item: AchievementProps) => (
                <Carousel key={item.title} data={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
