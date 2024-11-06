'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useRef, ReactNode } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DotClass {
  position: Position;
  width: number;
  lag: number;
  moveTowards: (x: number, y: number, context: CanvasRenderingContext2D) => void;
}

interface FollowingCursorProps {
  wrapperElement?: ReactNode;
  dotSize?: number;
  dotLag?: number;
  dotColor?: string;
}

class Dot implements DotClass {
  position: Position;
  width: number;
  lag: number;
  private readonly color: string;

  constructor(x: number, y: number, width: number, lag: number, color: string) {
    this.position = { x, y };
    this.width = width;
    this.lag = lag;
    this.color = color;
  }

  moveTowards(x: number, y: number, context: CanvasRenderingContext2D): void {
    const smoothing = Math.max(1, this.lag / 2);
    this.position.x += (x - this.position.x) / smoothing;
    this.position.y += (y - this.position.y) / smoothing;

    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

const FollowingCursor: React.FC<FollowingCursorProps> = ({ wrapperElement = null, dotSize = 10, dotLag = 10 }) => {
  const { theme } = useTheme();
  const dotColor = theme === 'dark' ? 'white' : 'black';

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<Position>({ x: 0, y: 0 });
  const dotRef = useRef<Dot | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const context = canvas.getContext('2d');

    if (wrapperElement && elementRef.current) {
      // For wrapper element, use the wrapper's dimensions
      const rect = elementRef.current.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    } else {
      // For full window, use document dimensions to account for scrolling
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

      canvas.width = window.innerWidth * dpr;
      canvas.height = docHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${docHeight}px`;
    }

    if (context) {
      context.scale(dpr, dpr);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const init = (): boolean => {
      if (prefersReducedMotion.matches) {
        console.log('This browser has prefers reduced motion turned on, so the cursor did not init');
        return false;
      }

      const canvas = canvasRef.current;
      if (!canvas) return false;

      const context = canvas.getContext('2d');
      if (!context) return false;

      canvas.style.position = wrapperElement ? 'absolute' : 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';

      updateCanvasSize();

      const centerX = canvas.width / (2 * (window.devicePixelRatio || 1));
      const centerY = canvas.height / (2 * (window.devicePixelRatio || 1));

      cursorRef.current = { x: centerX, y: centerY };
      dotRef.current = new Dot(centerX, centerY, dotSize, dotLag, dotColor);

      return true;
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!elementRef.current && !wrapperElement) {
        cursorRef.current = {
          x: e.clientX,
          y: e.clientY + window.scrollY,
        };
        return;
      }

      if (elementRef.current) {
        const boundingRect = elementRef.current.getBoundingClientRect();
        cursorRef.current = {
          x: e.clientX - boundingRect.left,
          y: e.clientY - boundingRect.top,
        };
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    const onResize = () => {
      updateCanvasSize();
    };

    const updateDot = (): void => {
      const canvas = canvasRef.current;
      const dot = dotRef.current;
      if (!canvas || !dot) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (!isScrollingRef.current) {
        dot.moveTowards(cursorRef.current.x, cursorRef.current.y, context);
      }
    };

    const loop = (): void => {
      updateDot();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const initialized = init();
    if (initialized) {
      const element = wrapperElement ? elementRef.current : window;
      if (!element) return;

      // Set up resize observer for the wrapper element
      if (wrapperElement && elementRef.current) {
        resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(elementRef.current);
      }

      // Event listeners
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onResize);
      window.addEventListener('scroll', () => {
        updateCanvasSize();
        if (!wrapperElement) {
          isScrollingRef.current = true;
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 50);
        }
      });

      // Start animation loop
      loop();

      const handlePrefersMotionChange = (): void => {
        if (prefersReducedMotion.matches) {
          if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        } else {
          init();
          loop();
        }
      };

      prefersReducedMotion.addEventListener('change', handlePrefersMotionChange);

      // Cleanup
      return () => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('scroll', () => {});
        prefersReducedMotion.removeEventListener('change', handlePrefersMotionChange);
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperElement, dotSize, dotLag, dotColor]);

  return (
    <>
      {wrapperElement ? (
        <div ref={elementRef} className="relative w-full h-full">
          {wrapperElement}
          <canvas ref={canvasRef} className="absolute top-0 left-0 z-50" />
        </div>
      ) : (
        <canvas ref={canvasRef} />
      )}
    </>
  );
};

export default FollowingCursor;
