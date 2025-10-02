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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & Social */}
                    <div className="lg:col-span-1">
                        <div className="text-2xl font-display font-bold text-brand-accent tracking-widest mb-4">
                            NOVA DEV
                        </div>
                        <p className="max-w-sm pr-4">{t.tagline}</p>
                        <div className="mt-6">
                            <h3 className="text-lg font-display font-bold text-brand-light mb-3">{t.socialTitle}</h3>
                            <div className="flex space-x-5">
                                <SocialIcon href="https://linkedin.com" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                </SocialIcon>
                                <SocialIcon href="https://github.com" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </SocialIcon>
                                <SocialIcon href="https://twitter.com" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.297 1.634 4.209 3.803 4.649-.6.164-1.242.207-1.86.084.6 1.948 2.348 3.245 4.41 3.282-1.748 1.425-3.868 2.158-6.096 2.046-.422 0-.83-.024-1.227-.074 2.115 1.423 4.648 2.12 7.34 2.023 8.544-.06 13.522-7.51 13.44-14.646 0-.21-.005-.422-.014-.632.91-.67 1.7-1.516 2.325-2.5z"></path></svg>
                                </SocialIcon>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-bold text-brand-light mb-4">{t.quickLinksTitle}</h3>
                        <ul className="space-y-3">
                            {Object.entries(t.links).map(([key, value]) => (
                                <li key={key}>
                                    <a href={`#${key}`} onClick={(e) => { e.preventDefault(); scrollToSection(key); }} className="hover:text-brand-accent transition-colors duration-300">{value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-display font-bold text-brand-light mb-4">{t.contactTitle}</h3>
                        <ul className="space-y-3">
                            <li><p>{t.contactInfo.address}</p></li>
                            <li><a href={`mailto:${t.contactInfo.email}`} className="hover:text-brand-accent transition-colors duration-300">{t.contactInfo.email}</a></li>
                            <li><a href={`tel:${t.contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors duration-300">{t.contactInfo.phone}</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-lg font-display font-bold text-brand-light mb-4">{t.newsletterTitle}</h3>
                         <p className="mb-4">Recibe las últimas noticias y artículos directamente en tu bandeja de entrada.</p>
                         <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex">
                                <label htmlFor="footer-email" className="sr-only">{t.newsletterPlaceholder}</label>
                                <input id="footer-email" type="email" placeholder={t.newsletterPlaceholder} className="w-full bg-[#1e1e1e] border border-brand-light/20 rounded-l-md px-4 py-2 text-brand-light focus:ring-brand-accent focus:border-brand-accent" />
                                <button type="submit" className="bg-brand-accent text-white font-bold px-4 rounded-r-md hover:bg-brand-accent-dark transition-colors">{t.newsletterButton}</button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
            
            {/* Interactive Canvas Section (lazy in viewport) */}
            {(() => {
              const [canvasRef, inView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: false });
              return (
                <div ref={canvasRef} className="relative w-full h-64 md:h-80" role="application" aria-label="Interactive NOVA DEV logo">
                  <Suspense fallback={null}>{inView && <PostFooter />}</Suspense>
                </div>
              );
            })()}

            <div className="container mx-auto px-6">
                <div className="border-t border-brand-light/10 py-8 text-center">
                    <p className="text-sm">{copyrightText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;