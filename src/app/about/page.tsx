import type { Metadata } from 'next';
import React from 'react';
import AnimatedText from './components/animated-text';

export const metadata: Metadata = {
  title: 'About - Hamzah Raihan',
  description: 'about hamzah raihan',
};

function AboutPage() {
  return (
    <div className="container max-w-full my-20 ">
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolor quis. Necessitatibus eligendi expedita nam sunt aliquam reiciendis blanditiis dolorum laudantium sapiente. Quos autem fugiat excepturi odio corrupti eveniet
        facilis perspiciatis ab ea vero officiis corporis, enim totam doloribus doloremque? Id itaque voluptates molestiae labore nam, necessitatibus nihil fugit atque, adipisci enim nisi reiciendis magnam iure fuga neque! Ipsum maxime at
        nihil repellat neque quos nam eum perferendis nisi adipisci doloribus amet numquam vero corrupti, porro nemo pariatur eaque earum veritatis ab commodi? Aut suscipit minus debitis quam blanditiis ipsum aliquid amet natus expedita
        vero corrupti, porro accusamus? Quibusdam consequuntur exercitationem, inventore delectus incidunt quas blanditiis quam libero tenetur voluptatem aliquid assumenda asperiores deserunt dolor animi sunt ad, adipisci id nostrum officia
        commodi, aliquam quos voluptatibus eum. Officia labore similique est nam quos corrupti alias, culpa autem quisquam? Similique reprehenderit iusto praesentium tempore voluptas! Aspernatur porro doloremque nisi, natus praesentium, cum
        beatae ea facere incidunt quae modi tempora? Dolorem ea alias laborum quam ex dolore rerum! Eligendi quam dolore culpa nemo, cupiditate quasi tenetur ipsa hic molestias dolorum. Quia deserunt molestiae distinctio dolorem mollitia
        laborum ipsa odit molestias qui, eius pariatur provident vel quam. Placeat optio reiciendis sed quas esse!
      </div>
      <AnimatedText firstString="WEB &" secondString="MOBILE DEV" reverse={false} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
      <div className="flex justify-center items-center py-20 text-xs">
        <div className="w-56 text-center uppercase text-neutral-500">Driven by a spirit of curiosity, his interests encompass language arts, literature, visual design, film and music.</div>
      </div>
      <AnimatedText firstString="BASED IN" secondString="INDONESIA" reverse={true} className="text-[32vh] font-bold inline-block whitespace-nowrap leading-[24vh]" />
    </div>
  );
}

export default AboutPage;
