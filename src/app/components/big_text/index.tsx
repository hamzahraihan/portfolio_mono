import React from 'react';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  return (
    <div className="text-center text-[10rem] max-w-full h-fit text-wrap">
      <span className="animate-flash ">{'>'}</span>
      {title}
    </div>
  );
}

export default BigText;
