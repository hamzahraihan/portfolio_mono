'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-8 w-[5.6rem] shrink-0 cursor-pointer items-center rounded-3xl border dark:border-neutral-700 border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 bg-transparent relative transition-all duration-200',
      className
    )}
    {...props}
    ref={ref}
  >
    <Sun className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-800  opacity-100 transition-opacity z-10" aria-hidden="true" />
    <Moon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white opacity-100 transition-opacity z-10" aria-hidden="true" />
    <SwitchPrimitives.Thumb
      className={cn('pointer-events-none block h-[1.6rem] w-9 rounded-3xl bg-neutral-950 ring-0 transition-transform duration-300 ease-in-out data-[state=checked]:translate-x-12 data-[state=unchecked]:translate-x-[0.17rem] dark:bg-white')}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
