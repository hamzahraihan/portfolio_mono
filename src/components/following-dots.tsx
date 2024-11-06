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
    this.position.x += (x - this.position.x) / this.lag;
    this.position.y += (y - this.position.y) / this.lag;

    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

const FollowingCursor: React.FC<FollowingCursorProps> = ({ wrapperElement = null, dotSize = 10, dotLag = 10 }) => {
  const { theme } = useTheme();
  const toggleTheme = () => {
    if (theme == 'dark') {
      return 'white';
    } else {
      return 'black';
    }
  };

  const dotColor: 'white' | 'black' = toggleTheme();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<Position>({ x: 0, y: 0 });
  const dotRef = useRef<Dot | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

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

      const element = wrapperElement ? elementRef.current : document.body;
      if (!element) return false;

      canvas.style.top = '0px';
      canvas.style.left = '0px';
      canvas.style.pointerEvents = 'none';

      if (wrapperElement) {
        canvas.style.position = 'absolute';
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.style.position = 'fixed';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      cursorRef.current = { x: centerX, y: centerY };
      dotRef.current = new Dot(centerX, centerY, dotSize, dotLag, dotColor);

      return true;
    };

    const onMouseMove = (e: MouseEvent): void => {
      if (!elementRef.current && !wrapperElement) {
        // For body-level tracking, include scroll position only when not using a wrapper
        cursorRef.current = {
          x: e.clientX + (wrapperElement ? 0 : window.scrollX),
          y: e.clientY + (wrapperElement ? 0 : window.scrollY),
        };
        return;
      }

      if (elementRef.current) {
        const boundingRect = elementRef.current.getBoundingClientRect();
        cursorRef.current = {
          x: e.clientX - boundingRect.left + (wrapperElement ? 0 : window.scrollX),
          y: e.clientY - boundingRect.top + (wrapperElement ? 0 : window.scrollY),
        };
      }
    };

    const onWindowResize = (): void => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const element = wrapperElement ? elementRef.current : document.body;
      if (!element) return;

      if (wrapperElement) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const updateDot = (): void => {
      const canvas = canvasRef.current;
      const dot = dotRef.current;
      if (!canvas || !dot) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      dot.moveTowards(cursorRef.current.x, cursorRef.current.y, context);
    };

    const loop = (): void => {
      updateDot();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const initialized = init();
    if (initialized) {
      const element = wrapperElement ? elementRef.current : document.body;
      if (!element) return;

      element.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);

      // Add scroll event listener when not using wrapper
      if (!wrapperElement) {
        window.addEventListener('scroll', () => {
          if (cursorRef.current) {
            cursorRef.current.y += window.scrollY;
          }
        });
      }

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

      return () => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        element.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onWindowResize);
        if (!wrapperElement) {
          window.removeEventListener('scroll', () => {});
        }
        prefersReducedMotion.removeEventListener('change', handlePrefersMotionChange);
      };
    }
  }, [wrapperElement, dotSize, dotLag, dotColor]);

  return (
    <>
      {wrapperElement && (
        <div ref={elementRef} className="relative w-full h-full">
          {wrapperElement}
          <canvas ref={canvasRef} className="absolute top-0 left-0 z-50" />
        </div>
      )}
      {!wrapperElement && <canvas ref={canvasRef} />}
    </>
  );
};

export default FollowingCursor;
