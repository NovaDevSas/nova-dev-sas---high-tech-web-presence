
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
const Impact = lazy(() => import('./Impact'));
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

type SectionName = 'hero' | 'about' | 'services' | 'technologies' | 'portfolio' | 'casestudies' | 'impact' | 'process' | 'testimonials' | 'blog' | 'contact';

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
    impact: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  
    useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter sections that are intersecting and have a meaningful intersection
        const visibleSections = entries
          .filter(entry => entry.isIntersecting && entry.intersectionRatio > 0.1)
          .map(entry => ({
            id: entry.target.id as SectionName,
            ratio: entry.intersectionRatio,
            boundingRect: entry.boundingClientRect,
            rootBounds: entry.rootBounds
          }));

        if (visibleSections.length > 0) {
          // Find the section that is most prominently visible
          // Priority: section closest to center of viewport
          const centerY = window.innerHeight / 2;
          
          let bestSection = visibleSections[0];
          let bestScore = -Infinity;
          
          for (const section of visibleSections) {
            const sectionCenter = section.boundingRect.top + section.boundingRect.height / 2;
            const distanceFromCenter = Math.abs(centerY - sectionCenter);
            
            // Score based on intersection ratio and proximity to center
            // Higher intersection ratio and closer to center = better score
            const score = section.ratio * 100 - distanceFromCenter * 0.1;
            
            if (score > bestScore) {
              bestScore = score;
              bestSection = section;
            }
          }
          
          setActiveSection(bestSection.id);
        } else {
          // Fallback: if no sections are intersecting, find the closest one to the viewport center
          const allSections = Object.keys(sectionRefs) as SectionName[];
          const centerY = window.innerHeight / 2;
          let closestSection: SectionName = 'hero';
          let closestDistance = Infinity;
          
          allSections.forEach(sectionName => {
            const element = sectionRefs[sectionName]?.current;
            if (element) {
              const rect = element.getBoundingClientRect();
              const sectionCenter = rect.top + rect.height / 2;
              const distance = Math.abs(centerY - sectionCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = sectionName;
              }
            }
          });
          
          setActiveSection(closestSection);
        }
      },
      { 
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '-80px 0px -20% 0px' // Account for header height and give more weight to upper sections
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      });
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
              <Impact ref={sectionRefs.impact} t={t.impact} />
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
