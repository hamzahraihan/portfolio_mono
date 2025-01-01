import { ReactNode } from 'react';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function Modal({ children, title }: Readonly<{ children: ReactNode; title: string }>) {
  return (
    <Dialog modal>
      <DialogTrigger className="rounded-md p-2 w-full cursor-pointer transition-all hover:dark:bg-neutral-700 hover:bg-neutral-200 lg:dark:bg-neutral-50 lg:bg-neutral-900 lg:rounded-xl overflow-hidden" asChild>
        <div className="group overflow-hidden">
          <div className="transition-all group-hover:translate-x-4">
            <h1
              className="text-lg lg:dark:text-neutral-800 lg:group-hover:dark:text-neutral-50 
            lg:text-neutral-50 lg:group-hover:text-neutral-800"
            >
              {title}
            </h1>
            <p className="lg:text-neutral-300 lg:group-hover:text-neutral-600  dark:text-neutral-400 lg:group-hover:dark:text-neutral-300 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogTitle hidden></DialogTitle>
      <DialogContent className="flex justify-center border-none !bg-transparent">
        <Carousel className="w-full max-w-sm flex flex-col">
          <div className="relative">
            <CarouselContent>{children}</CarouselContent>
          </div>
          <div className="flex justify-end gap-2 mt-4 pt-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
