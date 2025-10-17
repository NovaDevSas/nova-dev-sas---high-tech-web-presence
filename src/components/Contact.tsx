
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ContactProps {
    t: {
        title: string;
        subtitle: string;
        description: string;
        cta: {
            button: string;
            subtext: string;
        };
        features: {
            instant: string;
            direct: string;
            available: string;
        }
    }
}

const Contact = React.forwardRef<HTMLElement, ContactProps>(({ t }, ref) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "573108644580"; // Número de WhatsApp de Nova Dev SAS
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los servicios de Nova Dev SAS. ¿Podríamos conversar?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const commonSectionProps = {
    id: "contact",
    ref: ref,
    className: "py-20 md:py-32 bg-gradient-to-br from-brand-dark via-[#0a0a0a] to-brand-dark text-brand-light relative overflow-hidden",
  };
  
  // Patrón de fondo tecnológico mejorado
  const backgroundPattern = (
    <div className="absolute inset-0">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(133, 72, 239, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(133, 72, 239, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating geometric shapes - responsive */}
      <div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-brand-accent/20 rotate-45 animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-brand-accent/30 rotate-12 animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-12 md:w-16 h-12 md:h-16 bg-brand-accent/5 rotate-45 animate-pulse delay-500"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5"></div>
    </div>
  );

  return (
    <section {...commonSectionProps}>
      {backgroundPattern}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          {/* Header */}
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-brand-light via-brand-accent to-brand-light bg-clip-text text-transparent leading-tight">
              {t.title}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-brand-accent mt-4 leading-relaxed">
              {t.subtitle}
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto text-brand-light/70 leading-relaxed">
              {t.description}
            </p>
          </AnimatedSection>

          {/* Features Grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl sm:max-w-3xl mx-auto">
            <AnimatedSection delay={600}>
              <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-light leading-relaxed">{t.features.instant}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-light leading-relaxed">{t.features.direct}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-light leading-relaxed">{t.features.available}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Main CTA Button */}
          <AnimatedSection delay={1000} className="mt-12 sm:mt-16">
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-accent-dark to-brand-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <button
                onClick={handleWhatsAppClick}
                className="relative group bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] text-white font-display font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/30 flex items-center gap-3 sm:gap-4 mx-auto"
              >
                {/* WhatsApp Icon */}
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                
                <span className="text-sm sm:text-base md:text-lg">{t.cta.button}</span>
                
                {/* Arrow */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection delay={1200}>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-brand-light/60 max-w-xs sm:max-w-md mx-auto leading-relaxed">
              {t.cta.subtext}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
});

export default Contact;