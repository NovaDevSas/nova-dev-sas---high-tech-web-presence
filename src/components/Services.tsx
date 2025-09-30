
import React, { useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import useParallax from '../hooks/useParallax';

interface Service {
    title: string;
    description: string;
    icon: string;
}

interface ServicesProps {
    t: {
        title: string;
        description: string;
        cards: {
            web: { title: string; description: string };
            uiux: { title: string; description: string };
            mobile: { title: string; description: string };
            cloud: { title: string; description: string };
            ai: { title: string; description: string };
            blockchain: { title: string; description: string };
        }
    }
}

const ServiceIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
    const icons: { [key: string]: React.ReactNode } = {
        "code": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        "pen-tool": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path></svg>,
        "smartphone": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
        "cloud": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
        "cpu": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
        "share-2": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    };
    return icons[iconName] || null;
};


const Services = React.forwardRef<HTMLElement, ServicesProps>(({ t }, ref) => {
    const parallaxBgStyle = useParallax(0.1);
    const servicesData: Service[] = useMemo(() => [
        { title: t.cards.web.title, description: t.cards.web.description, icon: "code" },
        { title: t.cards.uiux.title, description: t.cards.uiux.description, icon: "pen-tool" },
        { title: t.cards.mobile.title, description: t.cards.mobile.description, icon: "smartphone" },
        { title: t.cards.cloud.title, description: t.cards.cloud.description, icon: "cloud" },
        { title: t.cards.ai.title, description: t.cards.ai.description, icon: "cpu" },
        { title: t.cards.blockchain.title, description: t.cards.blockchain.description, icon: "share-2" },
    ], [t]);

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed" 
          style={{ ...parallaxBgStyle, backgroundImage: "url('https://source.unsplash.com/1920x1080/?datacenter,dark')" }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-brand-dark/90" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-light">{t.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                    {t.description}
                </p>
            </AnimatedSection>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
                <AnimatedSection key={index} delay={400 + index * 150}>
                    <div className="bg-brand-dark/50 backdrop-blur-sm border border-brand-light/20 p-8 rounded-lg h-full transition-all duration-300 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/10 transform hover:-translate-y-2">
                        <div className="text-brand-accent w-12 h-12">
                            <ServiceIcon iconName={service.icon} />
                        </div>
                        <h3 className="mt-4 text-2xl font-display font-semibold text-brand-light">{service.title}</h3>
                        <p className="mt-2 text-brand-light/60">{service.description}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Services;