import { ReactNode } from 'react';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function Modal({ children, title }: Readonly<{ children: ReactNode; title: string }>) {
  return (
    <Dialog>
      <DialogTrigger className="lg:dark:bg-neutral-50 lg:bg-neutral-900 lg:dark:text-neutral-800 lg:text-neutral-50 lg:rounded-xl rounded-md p-2 w-full cursor-pointer transition-all hover:dark:bg-neutral-700 hover:bg-neutral-200" asChild>
        <div className="group">
          <div className="transition-all group-hover:translate-x-4">
            <h1 className="text-lg">{title}</h1>
            <p className="dark:text-neutral-400 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogTitle hidden></DialogTitle>
      <DialogContent className="flex justify-center border-none !bg-transparent">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>{children}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
