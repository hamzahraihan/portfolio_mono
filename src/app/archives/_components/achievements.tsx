import React from 'react';
import Modal from './ui/modal';
import { CarouselItem } from '@/components/ui/carousel';

function AchievementSection() {
  return (
    <div className="h-full w-full py-10 px-2">
      {/* web view */}
      <div className="hidden lg:grid grid-cols-6 grid-rows-3 gap-2 h-full w-full">
        <div className="text-xl text-neutral-500">Continuous</div>
        <div className="text-xl text-neutral-500">learning and</div>
        <div className="text-xl text-neutral-500">improvement</div>
        <div className="text-xl text-neutral-500">are the </div>
        <div className="text-xl text-neutral-500">keys</div>
        <div className="text-xl text-neutral-500">to success</div>

        <div className="col-span-3 row-end-4 mt-auto">
          <div className="flex flex-col leading-none justify-center">
            <h1 className="uppercase font-semibold text-[6vh] md:text-[7vh] lg:text-[8vh]">Certification</h1>
            <h1 className="uppercase font-semibold text-[6vh] md:text-[7vh] lg:text-[8vh]">& Achievements</h1>
          </div>
        </div>

        <div className="row-end-4 col-end-7 col-span-2">
          <div className="flex justify-evenly items-end w-full h-full">
            <div className="h-20 w-20 bg-neutral-300 animate-pulse"></div>
            <div className="h-20 w-20 bg-neutral-300 animate-pulse"></div>
            <div className="h-20 w-20 bg-neutral-300 animate-pulse"></div>
          </div>
        </div>

        <Modal title="Best project">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index + 1}>
              <div className="p-1">
                <div className="border">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Modal>
        <Modal title="Best project">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index + 1}>
              <div className="p-1">
                <div className="border">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Modal>
        <Modal title="Best project">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index + 1}>
              <div className="p-1">
                <div className="border">
                  <div className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Modal>
      </div>
      {/* mobile view */}
      <div className="flex flex-col lg:hidden">
        <h1 className="text-4xl border-b pb-4">Certification & Achievements</h1>
        <div className="flex flex-col gap-2 mt-5">
          <Modal title="Best project">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index + 1}>
                <div className="p-1">
                  <div className="border">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Modal>
          <Modal title="Best project">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index + 1}>
                <div className="p-1">
                  <div className="border">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Modal>
          <Modal title="Best project">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index + 1}>
                <div className="p-1">
                  <div className="border">
                    <div className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
