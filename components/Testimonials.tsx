
import React, { useState, useEffect, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import useParallax from '../hooks/useParallax';

interface Testimonial {
    quote: string;
    author: string;
}

interface TestimonialsProps {
    t: {
        title: string;
        testimonials: {
            jane: { quote: string; author: string };
            john: { quote: string; author: string };
            emily: { quote: string; author: string };
        }
    }
}

const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(({ t }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const parallaxBgStyle = useParallax(0.1);

    const testimonialsData: Testimonial[] = useMemo(() => [
        { quote: t.testimonials.jane.quote, author: t.testimonials.jane.author },
        { quote: t.testimonials.john.quote, author: t.testimonials.john.author },
        { quote: t.testimonials.emily.quote, author: t.testimonials.emily.author },
    ], [t]);


    useEffect(() => {
        if (testimonialsData.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonialsData]);
    

    return (
        <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ ...parallaxBgStyle, backgroundImage: "url('https://source.unsplash.com/1920x1080/?globe,connections')" }}
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm" aria-hidden="true"></div>
            <div className="container mx-auto px-6 relative">
                <AnimatedSection className="text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-light">{t.title}</h2>
                </AnimatedSection>
                <AnimatedSection className="mt-16 relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative h-64">
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center text-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <p className="text-xl md:text-2xl italic text-brand-light/90">"{testimonial.quote}"</p>
                                <p className="mt-6 font-semibold text-brand-accent">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brand-accent' : 'bg-brand-light/30 hover:bg-brand-light/50'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
});

export default Testimonials;