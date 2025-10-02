import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

interface TeamMember {
    name: string;
    designation: string;
    quote: string;
    src: string;
}

interface AboutProps {
    t: {
        title: string;
        subtitle: string;
        teamMembers: TeamMember[];
    }
}

const ArrowIcon: React.FC<{ direction?: 'left' | 'right'; onClick: () => void; }> = ({ direction = 'left', onClick }) => (
    <button
        onClick={onClick}
        className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-brand-light/10 border border-brand-light/20 transition-colors hover:bg-brand-light/20"
        aria-label={direction === 'left' ? 'Previous member' : 'Next member'}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-6 w-6 text-brand-light/70 transition-transform duration-300 group-hover/button:text-brand-accent ${direction === 'left' ? 'group-hover/button:-translate-x-1' : 'group-hover/button:translate-x-1'}`}
        >
            {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
        </svg>
    </button>
);


const About = React.forwardRef<HTMLElement, AboutProps>(({ t }, ref) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % t.teamMembers.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [t.teamMembers.length]);

    const handleNext = () => setActive((prev) => (prev + 1) % t.teamMembers.length);
    const handlePrev = () => setActive((prev) => (prev - 1 + t.teamMembers.length) % t.teamMembers.length);

    // Indices vecinos para mostrar detrás de la imagen activa
    const len = t.teamMembers.length;
    const prevIndex = (active - 1 + len) % len;
    const nextIndex = (active + 1) % len;

    return (
        <section id="about" ref={ref} className="py-20 md:py-32 bg-brand-dark text-brand-light relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">{t.title}</h2>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                            {t.subtitle}
                        </p>
                    </AnimatedSection>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[500px]">
                    {/* Image Column */}
                    <div className="relative flex items-center justify-center" style={{ perspective: '1000px' }}>
                        <div className="relative h-80 w-72 md:h-96 md:w-80">
                            {t.teamMembers.map((member, index) => (
                                <div
                                    key={member.src}
                                    className="absolute inset-0 origin-center transition-all duration-800 ease-in-out"
                                    style={{
                                        opacity: index === active ? 1 : ((index === prevIndex || index === nextIndex) ? 0.4 : 0),
                                        transform:
                                            index === active
                                                ? 'scale(1) translateX(0) translateY(0) rotate(0deg)'
                                                : index === prevIndex
                                                    ? 'scale(0.95) translateX(-40px) translateY(20px) rotate(-15deg)'
                                                    : index === nextIndex
                                                        ? 'scale(0.95) translateX(40px) translateY(20px) rotate(15deg)'
                                                        : 'scale(0.9) translateY(30px)',
                                        zIndex: index === active ? 30 : ((index === prevIndex || index === nextIndex) ? 20 : 10),
                                    }}
                                >
                                    <img
                                        src={member.src}
                                        alt={member.name}
                                        draggable={false}
                                        className={`h-full w-full rounded-2xl object-cover object-center ${index === active ? 'shadow-2xl' : 'shadow-lg brightness-50'}`}
                                        loading="lazy"
                                        decoding="async"
                                        width={800}
                                        height={800}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="flex flex-col justify-between text-center md:text-left min-h-[350px]">
                        <div key={active} className="animate-fade-in" style={{ animationDuration: '0.9s' }}>
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-brand-light">{t.teamMembers[active].name}</h3>
                            <p className="text-md text-brand-light/90 font-semibold mt-1">{t.teamMembers[active].designation}</p>
                            <blockquote className="mt-6 text-lg text-brand-light/70 leading-relaxed italic">
                                "{t.teamMembers[active].quote}"
                            </blockquote>
                        </div>
                        <div className="flex gap-4 pt-8 justify-center md:justify-start">
                            <ArrowIcon direction="left" onClick={handlePrev} />
                            <ArrowIcon direction="right" onClick={handleNext} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;