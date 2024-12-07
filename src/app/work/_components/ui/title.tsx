import { ReactNode } from 'react';

function ArchiveTitle({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="lg:flex-shrink-1 mt-auto h-full dark:bg-neutral-50 bg-neutral-900">
      <h1 className="text-[9vh] lg:text-[11vh] xl:text-[13vh] text-neutral-50 dark:text-neutral-800 p-3">{children}</h1>
    </div>
  );
}

export default ArchiveTitle;
