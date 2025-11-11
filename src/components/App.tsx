
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import Header from './Header';
import { translations, Language, Post as BlogPostType } from '../translations';
import FloatingWhatsApp from './FloatingWhatsApp';
import Hero from './Hero';
import LoadingSpinner from './LoadingSpinner';

// Critical components loaded immediately
import About from './About';
import Services from './Services';

// Non-critical components loaded lazily
const Technologies = lazy(() => import('./Technologies'));
const Portfolio = lazy(() => import('./Portfolio'));
const CaseStudies = lazy(() => import('./CaseStudies'));
const Process = lazy(() => import('./Process'));
const Testimonials = lazy(() => import('./Testimonials'));
const Blog = lazy(() => import('./Blog'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));
const BlogModal = lazy(() => import('./BlogModal'));


// FIX: Defined MappedPost to correctly type the `selectedPost` state. The Blog component
// passes an object with an `imageUrl`, which is required by `BlogModal`.
interface MappedPost extends BlogPostType {
    imageUrl: string;
}

type SectionName = 'hero' | 'about' | 'services' | 'technologies' | 'portfolio' | 'casestudies' | 'process' | 'testimonials' | 'blog' | 'contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('es');
  const [activeSection, setActiveSection] = useState<SectionName>('hero');
  // FIX: Updated `selectedPost` state to use `MappedPost` to match the data structure passed
  // from the `Blog` component and expected by the `BlogModal` component.
  const [selectedPost, setSelectedPost] = useState<MappedPost | null>(null);

  const t = translations[language];

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    technologies: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    casestudies: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  
    useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);


  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let debounceTimer: NodeJS.Timeout | null = null;
    let lastActiveSection: SectionName | null = null;
    
    const initializeObserver = () => {
      if (observer) {
        observer.disconnect();
      }
      
      observer = new IntersectionObserver(
        (entries) => {
          // Clear previous debounce timer
          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          
          // Debounce the section change to avoid rapid switching
          debounceTimer = setTimeout(() => {
            // Find the section that is most visible in the viewport
            const allSections = Object.keys(sectionRefs) as SectionName[];
            let bestSection: SectionName = lastActiveSection || 'hero';
            let bestScore = -1;
            
            allSections.forEach(sectionName => {
              const element = sectionRefs[sectionName]?.current;
              if (element) {
                const rect = element.getBoundingClientRect();
                const headerHeight = 80;
                
                // Calculate how much of the section is visible
                const viewportHeight = window.innerHeight;
                const sectionTop = Math.max(rect.top, headerHeight);
                const sectionBottom = Math.min(rect.bottom, viewportHeight);
                const visibleHeight = Math.max(0, sectionBottom - sectionTop);
                const visibilityRatio = visibleHeight / (rect.height || 1);
                
                // Prefer sections that are more visible and closer to the top
                let score = visibilityRatio;
                
                // Bonus for sections that start near the top of viewport (after header)
                if (rect.top <= headerHeight + 50 && rect.bottom > headerHeight + 100) {
                  score += 0.3;
                }
                
                // Small hysteresis: give current active section a slight advantage
                if (sectionName === lastActiveSection) {
                  score += 0.1;
                }
                
                if (score > bestScore && visibilityRatio > 0.2) {
                  bestScore = score;
                  bestSection = sectionName;
                }
              }
            });
            
            // Only update if we have a meaningful change
            if (bestSection !== lastActiveSection && bestScore > 0.2) {
              lastActiveSection = bestSection;
              setActiveSection(bestSection);
            }
          }, 100); // 100ms debounce
        },
        { 
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-80px 0px -20% 0px'
        }
      );

      // Observe all available sections
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer!.observe(ref.current);
        }
      });
    };

    // Initial setup
    initializeObserver();
    
    // Re-initialize observer when lazy components load
    const reinitializeTimer = setTimeout(() => {
      initializeObserver();
    }, 1000);
    
    // Also reinitialize on window resize
    const handleResize = () => {
      setTimeout(initializeObserver, 100);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearTimeout(reinitializeTimer);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const seoData = (t as any)[activeSection]?.seo;
    if (seoData) {
      document.title = seoData.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seoData.description);
      }

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.keywords);
      }
    }
  }, [activeSection, t]);
  
  useEffect(() => {
      if (selectedPost || isMenuOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
      return () => { // cleanup on unmount
          document.body.style.overflow = 'auto';
      };
  }, [selectedPost, isMenuOpen]);


  return (
    <>
      <div className="bg-brand-dark text-brand-light font-sans antialiased">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          language={language}
          setLanguage={setLanguage}
          t={t.nav}
          activeSection={activeSection}
        />
        <main>
            <Hero ref={sectionRefs.hero} t={t.hero} />
            <About ref={sectionRefs.about} t={t.about} />
            <Services ref={sectionRefs.services} t={t.services} />
            <Suspense fallback={<LoadingSpinner />}>
              <Technologies ref={sectionRefs.technologies} t={t.technologies} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Portfolio ref={sectionRefs.portfolio} t={t.portfolio} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <CaseStudies ref={sectionRefs.casestudies} t={t.casestudies} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Process ref={sectionRefs.process} t={t.process} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Testimonials ref={sectionRefs.testimonials} t={t.testimonials} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Blog ref={sectionRefs.blog} t={t.blog} setSelectedPost={setSelectedPost} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact ref={sectionRefs.contact} t={t.contact} />
            </Suspense>
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer t={t.footer} />
        </Suspense>
         <Suspense fallback={null}>
            <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
         </Suspense>
      </div>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
