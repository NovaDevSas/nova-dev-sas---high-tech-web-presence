
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface CaseStudy {
    client: string;
    logoUrl: string;
    title: string;
    description: string;
    tags: string[];
}

interface CaseStudiesProps {
    t: {
        title: string;
        description: string;
        case1: { client: string; title: string; description: string; tags: string[]; };
        case2: { client: string; title: string; description: string; tags: string[]; };
        case3: { client: string; title: string; description: string; tags: string[]; };
        readMore: string;
    }
}

const CaseStudies = React.forwardRef<HTMLElement, CaseStudiesProps>(({ t }, ref) => {
    const caseStudiesData: CaseStudy[] = [
        {
            client: t.case1.client,
            logoUrl: '/logos/nova.webp',
            title: t.case1.title,
            description: t.case1.description,
            tags: t.case1.tags,
        },
        {
            client: t.case2.client,
            logoUrl: '/logos/nova.webp',
            title: t.case2.title,
            description: t.case2.description,
            tags: t.case2.tags,
        },
        {
            client: t.case3.client,
            logoUrl: '/logos/nova.webp',
            title: t.case3.title,
            description: t.case3.description,
            tags: t.case3.tags,
        },
    ];

    return (
        <section id="casestudies" ref={ref} className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{ backgroundSize: '40px 40px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-light px-4 sm:px-0">{t.title}</h2>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                            {t.description}
                        </p>
                    </AnimatedSection>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudiesData.map((study, index) => (
                        <AnimatedSection key={index} delay={400 + index * 150}>
                            <div className="group bg-brand-dark/50 backdrop-blur-sm border border-brand-light/20 p-8 rounded-lg h-full flex flex-col transition-all duration-300 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/10 transform hover:-translate-y-2">
                                <div className="flex-shrink-0">
                                    <img
                                      className="h-10 opacity-70 group-hover:opacity-100 transition-opacity"
                                      src={study.logoUrl}
                                      alt={`Nova Dev logo`}
                                      loading="lazy"
                                      decoding="async"
                                      width={158}
                                      height={48}
                                    />
                                </div>
                                <div className="flex-grow mt-6">
                                    <h3 className="text-2xl font-display font-semibold text-brand-light">{study.title}</h3>
                                    <p className="mt-2 text-brand-light/60 line-clamp-3">{study.description}</p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-brand-accent/10 text-brand-accent rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <a href="#" className="font-semibold text-brand-accent group-hover:text-brand-accent-dark transition-colors duration-300">
                                        {t.readMore} &rarr;
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
            {/* Adding the style for bg-grid-pattern locally as it's not global */}
            <style>{`
                .bg-grid-pattern {
                  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
});

export default CaseStudies;