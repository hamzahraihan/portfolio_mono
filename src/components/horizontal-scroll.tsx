'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function HorizontalScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  console.log('🚀 ~ HorizontalScroll ~ scrollRange:', scrollRange);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setViewportWidth(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (ghostRef.current) {
      resizeObserver.observe(ghostRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportWidth]);

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="!fixed left-0 right-0 will-change-transform overflow-hidden">
        <motion.section ref={scrollRef} style={{ x: spring }} className="relative max-w-max flex items-center h-screen">
          {children}
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="w-screen" />
    </>
  );
}

export default HorizontalScroll;
