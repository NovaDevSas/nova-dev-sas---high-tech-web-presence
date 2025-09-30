
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement,>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const targetRef = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = targetRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersecting(true);
            if (triggerOnce) {
              observer.unobserve(currentRef);
            }
          } else if (!triggerOnce) {
            setIntersecting(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetRef, threshold, root, rootMargin, triggerOnce]);

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;