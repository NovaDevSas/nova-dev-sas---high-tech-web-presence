
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import { translations, Language, Post as BlogPostType } from './translations';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Impact from './components/Impact';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BlogModal = lazy(() => import('./components/BlogModal'));


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
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id as SectionName);
        }
      },
      { threshold: [0.2, 0.5, 0.8] }
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
            <Technologies ref={sectionRefs.technologies} t={t.technologies} />
            <Portfolio ref={sectionRefs.portfolio} t={t.portfolio} />
            <CaseStudies ref={sectionRefs.casestudies} t={t.casestudies} />
            <Impact ref={sectionRefs.impact} t={t.impact} />
            <Process ref={sectionRefs.process} t={t.process} />
            <Testimonials ref={sectionRefs.testimonials} t={t.testimonials} />
            <Blog ref={sectionRefs.blog} t={t.blog} setSelectedPost={setSelectedPost} />
            <Contact ref={sectionRefs.contact} t={t.contact} />
        </main>
        <Footer t={t.footer} />
         <Suspense fallback={null}>
            <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
         </Suspense>
      </div>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
