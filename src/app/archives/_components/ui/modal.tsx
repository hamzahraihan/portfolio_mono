import { ReactNode } from 'react';

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

function Modal({ children, title }: Readonly<{ children: ReactNode; title: string }>) {
  return (
    <Dialog>
      <DialogTrigger className="dark:bg-neutral-50 bg-neutral-900 dark:text-neutral-800 text-neutral-50 rounded-xl p-2 col-end-3" asChild>
        <button>{title}</button>
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
