
import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import AnimatedSection from './AnimatedSection';
import useParallax from '../hooks/useParallax';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    cta: string;
  }
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(({ t }, ref) => {
    const parallaxBgStyle = useParallax(0.15);
    const parallaxGridStyle = useParallax(0.3);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
  return (
    <section 
      id="hero" 
      ref={ref} 
      className="min-h-screen flex items-center justify-center bg-brand-dark relative overflow-hidden"
    >
      {/* Subtle radial gradient for lighting effect */}
      <div className="absolute inset-0 bg-radial-gradient-accent" aria-hidden="true"></div>

      <AnimatedBackground style={parallaxBgStyle} />
      <div style={{...parallaxGridStyle, zIndex: 1 }} className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark" style={{ zIndex: 2 }}></div>
      <div className="container mx-auto px-6 text-center" style={{ zIndex: 3 }}>
        <AnimatedSection>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-brand-light tracking-wide sm:tracking-wider uppercase leading-tight px-2 sm:px-0" dangerouslySetInnerHTML={{ __html: t.title.replace('Deploy.', '<span class="animated-gradient-text">Deploy.</span>').replace('Desplegar.', '<span class="animated-gradient-text">Desplegar.</span>') }}></h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-brand-light/80 px-4 sm:px-6 md:px-0 leading-relaxed">
            {t.subtitle}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <button onClick={scrollToContact} className="font-display text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-brand-accent text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-sm uppercase tracking-wide sm:tracking-widest hover:bg-brand-accent-dark hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 transform hover:-translate-y-1 w-auto min-w-[160px] sm:min-w-[200px]">
              {t.cta}
            </button>
          </div>
        </AnimatedSection>
      </div>
       <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bg-radial-gradient-accent {
          background-image: radial-gradient(circle at center, rgba(133, 72, 239, 0.15), transparent 60%);
        }
        .animated-gradient-text {
          background: linear-gradient(90deg, #8548ef, #f5f5f7, #8548ef);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
});

export default Hero;