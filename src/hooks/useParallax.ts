
import { useState, useEffect } from 'react';

const useParallax = (speed: number) => {
  const [offsetY, setOffsetY] = useState(0);

  // Throttle scroll work with requestAnimationFrame to reduce main-thread usage
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          setOffsetY(lastScrollY * speed);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return {
    transform: `translateY(${offsetY}px)`,
    willChange: 'transform', // Performance hint for the browser
  };
};

export default useParallax;