import React from 'react';
import AnimatedSection from './AnimatedSection';
import useCountUp from '../hooks/useCountUp';

interface ImpactProps {
    t: {
        title: string;
        description: string;
        metrics: {
            metric1: { label: string; value: number; prefix: string; suffix: string };
            metric2: { label: string; value: number; prefix: string; suffix: string };
            metric3: { label: string; value: number; prefix: string; suffix: string };
            metric4: { label: string; value: number; prefix: string; suffix: string };
        }
    }
}

const MetricCounter: React.FC<{ metric: { value: number; label: string; prefix: string; suffix: string; } }> = ({ metric }) => {
    const [ref, count] = useCountUp(metric.value, 2500);
    const isFloat = metric.value % 1 !== 0;

    return (
         <div className="text-center">
            <span ref={ref} className="text-5xl md:text-6xl font-display font-bold text-brand-accent">
                {metric.prefix}{isFloat ? (Math.floor(count * 10) / 10).toFixed(1) : Math.floor(count)}{metric.suffix}
            </span>
            <p className="mt-2 text-lg text-brand-light/70">{metric.label}</p>
        </div>
    )
}

const Impact = React.forwardRef<HTMLElement, ImpactProps>(({ t }, ref) => {
    const metricsData = [
        t.metrics.metric1,
        t.metrics.metric2,
        t.metrics.metric3,
        t.metrics.metric4
    ];

    return (
        <section id="impact" ref={ref} className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{ backgroundSize: '40px 40px' }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-[#0A0A0A]"></div>
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
                <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                    {metricsData.map((metric, index) => (
                        <AnimatedSection key={index} delay={400 + index * 150}>
                           <MetricCounter metric={metric} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
             <style>{`
                .bg-grid-pattern {
                  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
});

export default Impact;
