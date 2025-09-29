import { useState, useEffect, RefObject } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useCountUp = (endValue: number, duration: number = 2000): [RefObject<HTMLSpanElement>, number] => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = endValue;
      if (start === end) return;

      const totalFrames = Math.round(duration / (1000 / 60));
      const increment = (end - start) / totalFrames;

      let currentFrame = 0;
      const counter = setInterval(() => {
        currentFrame++;
        
        // Use easing function for a smoother effect
        const progress = currentFrame / totalFrames;
        const easedValue = end * (1 - Math.pow(1 - progress, 4)); // easeOutQuart

        setCount(easedValue);

        if (currentFrame >= totalFrames) {
          setCount(end); // Ensure it ends exactly on the end value
          clearInterval(counter);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isVisible, endValue, duration]);

  return [ref, count];
};

export default useCountUp;
