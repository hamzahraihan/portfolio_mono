import React from 'react';

type CardProps = {
  row: string;
  span: string;
  col?: string;
  title: string;
  date: string;
  position: string;
  location: string;
  description: string;
};

function ArchiveCard({ row, span, col, title, date, position, location, description }: Readonly<CardProps>) {
  return (
    <div className={`flex flex-col text-[1.4vh] md:text-[1.6vh] lg:text-[1.8vh] xl:text-[2vh] ${row} ${span} ${col}`}>
      <div className="flex justify-between">
        <p>{title}</p>
        <p className="text-neutral-400">{date}</p>
      </div>
      <div className="flex flex-col gap-4 border-t border-l border-neutral-500 p-2">
        <div className="container">
          <div className="flex justify-between text-md">
            <p>{position}</p>
            <p className="text-neutral-400">{location}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ArchiveCard;
