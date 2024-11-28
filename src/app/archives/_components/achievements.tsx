import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function AchievementSection() {
  return (
    <div className="h-full w-full py-10 px-2">
      <div className="grid grid-cols-6 grid-rows-3 gap-2 h-full w-full">
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

        <Dialog>
          <DialogTrigger className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2 col-end-3" asChild>
            <button>Best Project</button>
          </DialogTrigger>

          <DialogTitle hidden></DialogTitle>
          <DialogContent className="flex justify-center border-none !bg-transparent">
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
        <Dialog>
          <DialogTrigger className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2" asChild>
            <button>Best Project</button>
          </DialogTrigger>

          <DialogTitle hidden></DialogTitle>
          <DialogContent className="flex justify-center border-none !bg-transparent">
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
        <Dialog>
          <DialogTrigger className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2" asChild>
            <button>Best Project</button>
          </DialogTrigger>

          <DialogTitle hidden></DialogTitle>
          <DialogContent className="flex justify-center border-none !bg-transparent">
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
      </div>
    </div>
  );
}

export default AchievementSection;
