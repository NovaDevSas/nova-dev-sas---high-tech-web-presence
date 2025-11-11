import React, { Suspense } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
const PostFooter = React.lazy(() => import('./PostFooter'));

interface FooterProps {
    t: {
        copyright: string;
        tagline: string;
        quickLinksTitle: string;
        contactTitle: string;
        socialTitle: string;
        newsletterTitle: string;
        newsletterPlaceholder: string;
        newsletterButton: string;
        links: { [key: string]: string };
        contactInfo: {
            email: string;
            phone: string;
            address: string;
        };
    }
}

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-brand-light/50 hover:text-brand-accent transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ t }) => {
    const currentYear = new Date().getFullYear();
    const copyrightText = t.copyright.replace('{year}', currentYear.toString());

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <footer className="bg-[#0A0A0A] text-brand-light/70 pt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {/* Column 1: Brand & Social */}
                    <div className="lg:col-span-1">
                        <div className="text-xl sm:text-2xl font-display font-bold text-brand-accent tracking-widest mb-4">
                            NOVA DEV
                        </div>
                        <p className="max-w-sm pr-0 sm:pr-4 text-sm sm:text-base leading-relaxed">{t.tagline}</p>
                        <div className="mt-4 sm:mt-6">
                            <h3 className="text-base sm:text-lg font-display font-bold text-brand-light mb-3">{t.socialTitle}</h3>
                            <div className="flex space-x-5">
                                {/* LinkedIn */}
                                <SocialIcon href="https://www.linkedin.com/in/nova-dev-s-a-s-883244350/es?trk=org-employees&originalSubdomain=co" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.79 0 1 1.79 1 4v16c0 2.21 1.79 4 4 4h14c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM8 19H5V9h3v10zm-1.5-11.2c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V9h3v1.77c1.4-2.58 7-2.78 7 2.48V19z"/></svg>
                                </SocialIcon>
                                {/* Instagram */}
                                <SocialIcon href="https://www.instagram.com/wearenovadev?igsh=MW12OTQ1cTFnNmlscg==" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg>
                                </SocialIcon>
                                {/* Facebook */}
                                <SocialIcon href="https://www.facebook.com/share/14PoU87Lbbn/?mibextid=wwXIfr" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                                </SocialIcon>
                                {/* TikTok */}
                                <SocialIcon href="https://www.tiktok.com/@wearenovadev?_r=1&_t=ZS-91JX2Fp0kCN" aria-label="TikTok">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                                    </svg>
                                </SocialIcon>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-brand-light mb-3 sm:mb-4">{t.quickLinksTitle}</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {Object.entries(t.links).map(([key, value]) => (
                                <li key={key}>
                                    <a href={`#${key}`} onClick={(e) => { e.preventDefault(); scrollToSection(key); }} className="text-sm sm:text-base hover:text-brand-accent transition-colors duration-300">{value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-brand-light mb-3 sm:mb-4">{t.contactTitle}</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li><p className="text-sm sm:text-base leading-relaxed">{t.contactInfo.address}</p></li>
                            <li><a href={`mailto:${t.contactInfo.email}`} className="text-sm sm:text-base hover:text-brand-accent transition-colors duration-300 break-all">{t.contactInfo.email}</a></li>
                            <li><a href={`tel:${t.contactInfo.phone.replace(/\s/g, '')}`} className="text-sm sm:text-base hover:text-brand-accent transition-colors duration-300">{t.contactInfo.phone}</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            
            {/* Interactive Canvas Section (lazy in viewport) */}
            {(() => {
              const [canvasRef, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: false });
              return (
                <div ref={canvasRef} className="relative w-full h-48 sm:h-64 md:h-80" role="application" aria-label="Interactive NOVA DEV logo">
                  <Suspense fallback={null}>{inView && <PostFooter />}</Suspense>
                </div>
              );
            })()}

            <div className="container mx-auto px-6">
                <div className="border-t border-brand-light/10 py-6 sm:py-8 text-center">
                    <p className="text-xs sm:text-sm px-4">{copyrightText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;