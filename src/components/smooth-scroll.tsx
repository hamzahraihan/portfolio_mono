'use client';

import { useSpring, useTransform, useScroll, motion } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';
import { ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type PhysicsProp = {
  damping: number;
  mass: number;
  stiffness: number;
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserber = new ResizeObserver((entries) => resizePageHeight(entries));
    if (scrollRef?.current) {
      resizeObserber.observe(scrollRef.current);
    }
    return () => resizeObserber.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics: PhysicsProp = { damping: 15, mass: 0.1, stiffness: 100 };
  const spring = useSpring(transform, physics);

  const pathname = usePathname();
  console.log('🚀 ~ SmoothScroll ~ pathname:', pathname);

  return (
    <>
      <motion.div ref={scrollRef} style={{ y: spring }} className="fixed top-0 left-0 w-full overflow-hidden will-change-transform">
        {children}
      </motion.div>
      {pathname !== '/archives' ? <div style={{ height: pageHeight }} /> : ''}
    </>
  );
};

export default SmoothScroll;
