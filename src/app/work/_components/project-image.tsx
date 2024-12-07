import Image from 'next/image';
import React from 'react';

function ProjectImage({ url }: { url: string | undefined }) {
  return <Image className="h-full w-full object-cover" src={url ?? '/default-image.jpg'} alt="project image" width={1280} height={1080} />;
}

export default ProjectImage;
