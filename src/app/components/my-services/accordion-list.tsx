import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DatasProps } from '@/datas';
import React from 'react';

function AccordionList({ id, description, title }: Readonly<DatasProps>) {
  return (
    <AccordionItem value={`item-${id}`} className="border-neutral-300 dark:border-neutral-600">
      <AccordionTrigger className="max-w-[40rem] mx-auto text-lg">{title}</AccordionTrigger>
      <AccordionContent className="relative">
        {description.map((desc, i) => (
          <div key={i} className="group relative w-full py-2">
            <p className="cursor-default relative max-w-[40rem] mx-auto text-start z-10 transition-colors duration-300 group-hover:text-neutral-100 dark:group-hover:text-neutral-900">{desc}</p>
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ease-out group-hover:scale-y-100" />
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default AccordionList;
