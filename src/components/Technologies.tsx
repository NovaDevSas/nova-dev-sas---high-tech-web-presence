import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Types and constants adapted from the provided example
type LogoItem = {
  src: string;
  alt: string;
  title: string;
};

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

// Helper function
const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

// Resize observer hook
const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback(); // Initial call
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback(); // Initial call

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

// Image loader hook
const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };
    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

// Animation loop hook
const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};


interface TechnologiesProps {
    t: {
        title: string;
        description: string;
        techNames: { [key: string]: string };
    }
}

const techStack = [
    { id: 'react', logoUrl: '/logos/react.webp' },
    { id: 'nodejs', logoUrl: '/logos/nodejs.webp' },
    { id: 'python', logoUrl: '/logos/phyton.webp' },
    { id: 'typescript', logoUrl: '/logos/typescript.webp' },
    { id: 'docker', logoUrl: '/logos/docker.webp' },
    { id: 'postgres', logoUrl: '/logos/postgresql.webp' },
];

const getCarouselSettings = (width: number) => {
    if (width < 768) { // Mobile
        return {
            speed: 40,
            logoHeight: 48, // w-12
            gap: 40,
        };
    }
    // Desktop
    return {
        speed: 80,
        logoHeight: 80, // w-20
        gap: 80,
    };
};

const Technologies = React.forwardRef<HTMLElement, TechnologiesProps>(({ t }, ref) => {
    // State for responsive settings - use default desktop settings for SSR
    const [settings, setSettings] = useState(() => {
        if (typeof window !== 'undefined') {
            return getCarouselSettings(window.innerWidth);
        }
        // Default to desktop settings for server-side rendering
        return {
            speed: 80,
            logoHeight: 80,
            gap: 80,
        };
    });

    // Update settings on window resize
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;
        
        // Set initial settings based on current window size
        setSettings(getCarouselSettings(window.innerWidth));
        
        const handleResize = () => {
            setSettings(getCarouselSettings(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Props for the loop, now using state
    const { speed, logoHeight, gap } = settings;
    const direction = 'left';
    const pauseOnHover = true;
    const fadeOut = true;
    const fadeOutColor = "#0D0D0D"; // brand-dark
    const scaleOnHover = true;

    // Logic adapted from LogoLoop component
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const logos: LogoItem[] = useMemo(() => techStack.map(tech => ({
        src: tech.logoUrl,
        alt: t.techNames[tech.id],
        title: t.techNames[tech.id]
    })), [t.techNames]);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      return magnitude * directionMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);
    
    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        ['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover']
          .filter(Boolean)
          .join(' '),
      [fadeOut, scaleOnHover]
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback((item: LogoItem, key: React.Key) => (
        <li className="logoloop__item" key={key} role="listitem">
             <img
                src={item.src}
                alt={item.alt ?? ''}
                title={item.title}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="transition-all duration-300 filter invert brightness-75 opacity-70"
            />
        </li>
      ), []);

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

  return (
    <section id="technologies" ref={ref} className="py-20 md:py-32 bg-brand-dark text-brand-light relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
            style={{ backgroundImage: "url('https://source.unsplash.com/1920x1080/?circuit,technology')" }}
            aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-display font-bold">{t.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                    {t.description}
                </p>
            </AnimatedSection>
        </div>
        
        <AnimatedSection delay={300} className="mt-16">
            {(() => {
                const [techRef, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.15, triggerOnce: false });
                return (
                    <div ref={techRef}>
                        <div
                            ref={containerRef}
                            className={rootClassName}
                            style={cssVariables}
                            role="region"
                            aria-label="Technology stack logos"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {inView && (
                                <div className="logoloop__track" ref={trackRef}>
                                    {logoLists}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })()}
        </AnimatedSection>
      </div>
       <style>{`
        .logoloop {
            position: relative;
            overflow-x: hidden;
            --logoloop-fadeColorAuto: #0D0D0D;
        }

        .logoloop--scale-hover {
            padding-top: calc(var(--logoloop-logoHeight) * 0.1);
            padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);
        }
        
        .logoloop__track {
            display: flex;
            width: max-content;
            will-change: transform;
            user-select: none;
        }

        .logoloop__list {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .logoloop__item {
            flex: 0 0 auto;
            margin-right: var(--logoloop-gap);
            font-size: var(--logoloop-logoHeight);
            line-height: 1;
        }

        .logoloop__item:last-child {
            margin-right: var(--logoloop-gap);
        }

        .logoloop__item img {
            height: var(--logoloop-logoHeight);
            width: auto;
            display: block;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            -webkit-user-drag: none;
            pointer-events: none;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logoloop--scale-hover .logoloop__item {
            overflow: visible;
        }
        
        .logoloop--scale-hover .logoloop__item:hover img {
            transform: scale(1.2);
            transform-origin: center center;
            filter: invert(1) brightness(1.1) opacity(1);
        }

        .logoloop--fade::before,
        .logoloop--fade::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: clamp(24px, 8%, 120px);
            pointer-events: none;
            z-index: 1;
        }

        .logoloop--fade::before {
            left: 0;
            background: linear-gradient(
                to right,
                var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
                transparent 100%
            );
        }

        .logoloop--fade::after {
            right: 0;
            background: linear-gradient(
                to left,
                var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
                transparent 100%
            );
        }

        @media (prefers-reduced-motion: reduce) {
            .logoloop__track {
                transform: translate3d(0, 0, 0) !important;
            }
            .logoloop__item img {
                transition: none !important;
            }
        }
      `}</style>
    </section>
  );
});

export default Technologies;