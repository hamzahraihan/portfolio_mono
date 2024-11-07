'use client';

import { motion } from 'framer-motion';

function BigText({ title = '' }: Readonly<{ title: string }>) {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'center center'],
  // });

  // Transform scrollYProgress (0 to 1) into y position (100px to 0)
  // const yPos = useTransform(scrollYProgress, [0, 1], [200, 0]);
  // insert yPos to motion div with style

  return (
    <div className="h-fit overflow-hidden border-b border-neutral-200 dark:border-neutral-600 pb-4">
      <motion.div className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] max-w-full">
        <span className="animate-flash ">{'>'}</span>
        {title}
      </motion.div>
    </div>
  );
}

export { BigText };
