
import React, { useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import InfiniteMenu from './InfiniteMenu';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface PortfolioItem {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface PortfolioProps {
    t: {
        title: string;
        description: string;
        items: PortfolioItem[];
    }
}

const Portfolio = React.forwardRef<HTMLElement, PortfolioProps>(({ t }, ref) => {
    
    // Map the translation data to the format expected by InfiniteMenu
    const mappedItems = useMemo(() => t.items.map(item => ({
        title: item.title,
        description: item.description,
        image: item.imageUrl,
        link: item.link
    })), [t.items]);

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-32 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-display font-bold">{t.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                    {t.description}
                </p>
            </AnimatedSection>
        </div>
        
        <AnimatedSection delay={400}>
            {(() => {
              const [gridRef, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, triggerOnce: false });
              return (
                <div ref={gridRef} className="relative h-[70vh] w-full">
                  {inView && <InfiniteMenu items={mappedItems} />}
                </div>
              );
            })()}
        </AnimatedSection>

      </div>
    </section>
  );
});

export default Portfolio;