
import React, { useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import useParallax from '../hooks/useParallax';

interface TimelineItem {
    number: string;
    title: string;
    description: string;
}

interface ProcessProps {
    t: {
        title: string;
        description: string;
        steps: {
            discovery: { title: string; description: string };
            design: { title: string; description: string };
            development: { title: string; description: string };
            deployment: { title: string; description: string };
            support: { title: string; description: string };
        }
    }
}


const TimelineStep: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className="relative">
            <div className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full mb-8`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="hidden md:block w-1/12">
                    <div className="h-full w-px bg-brand-light/20 mx-auto"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-bold">
                        {item.number.charAt(1)}
                    </div>
                </div>
                <div className="w-full md:w-5/12">
                    <div className={`p-6 rounded-lg border border-brand-light/20 bg-brand-dark/50 backdrop-blur-sm shadow-lg ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <div className="flex items-center mb-2">
                             <div className="md:hidden mr-4 w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-bold flex-shrink-0">
                                {item.number.charAt(1)}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-brand-accent">{item.title}</h3>
                        </div>
                        <p className="text-brand-light/70">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Process = React.forwardRef<HTMLElement, ProcessProps>(({ t }, ref) => {
    const parallaxBgStyle = useParallax(0.1);
    const timelineData: TimelineItem[] = useMemo(() => [
        { number: "01", title: t.steps.discovery.title, description: t.steps.discovery.description },
        { number: "02", title: t.steps.design.title, description: t.steps.design.description },
        { number: "03", title: t.steps.development.title, description: t.steps.development.description },
        { number: "04", title: t.steps.deployment.title, description: t.steps.deployment.description },
        { number: "05", title: t.steps.support.title, description: t.steps.support.description },
    ], [t]);

    return (
        <section id="process" ref={ref} className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ ...parallaxBgStyle, backgroundImage: "url('https://source.unsplash.com/1920x1080/?network,abstract,flow')" }}
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-brand-dark/95" aria-hidden="true"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedSection>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-light px-4 sm:px-0">{t.title}</h2>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                            {t.description}
                        </p>
                    </AnimatedSection>
                </div>
                <div className="relative wrap overflow-hidden">
                    <div className="absolute h-full border border-dashed border-brand-light/20 hidden md:block" style={{ left: '50%' }}></div>
                    {timelineData.map((item, index) => (
                        <AnimatedSection key={index} delay={400 + index * 250}>
                            <TimelineStep item={item} index={index} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
});


export default Process;