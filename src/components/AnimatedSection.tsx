
import React, { ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animation = 'fade-in-up', delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationClass = animation === 'fade-in-up'
    ? 'opacity-0 translate-y-16'
    : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : animationClass
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;