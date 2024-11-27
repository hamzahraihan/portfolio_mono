import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function AchievementSection() {
  return (
    <div className="h-full w-full py-10 px-2">
      <div className="grid grid-cols-6 grid-rows-3 gap-2 h-full w-full">
        <div className="col-span-3 row-end-4">
          <div className="flex flex-col leading-none justify-center">
            <h1 className="font-bold text-[12vh]">Certification</h1>
            <p className="text-neutral-500 text-[2vh] pb-2 flex items-center gap-1">Continuous learning and improvement are the keys to success</p>
            <h1 className="font-bold text-[12vh]">& Achievements</h1>
          </div>
        </div>
        <div className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2">Front-end Development</div>
        <div className="">lorem</div>
        <div className="">lorem</div>
        <div className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2">Back-end Development</div>

        <Dialog>
          <DialogTrigger className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2" asChild>
            <button>Best Project</button>
          </DialogTrigger>

          <DialogTitle hidden></DialogTitle>
          <DialogContent className="flex justify-center border-none max-w-4xl !bg-transparent">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
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
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>

        <div className=" "></div>
      </div>
    </div>
  );
}

export default AchievementSection;
