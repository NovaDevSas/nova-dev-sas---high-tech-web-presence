
import { useState, useEffect } from 'react';

const useParallax = (speed: number) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return {
    transform: `translateY(${offsetY}px)`,
    willChange: 'transform', // Performance hint for the browser
  };
};

export default useParallax;