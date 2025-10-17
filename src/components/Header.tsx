// FIX: Corrected the import statement for React hooks `useState` and `useEffect`. The previous syntax was invalid.
import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../translations';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
    t: { [key: string]: string };
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, language, setLanguage, t, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['about', 'services', 'technologies', 'portfolio', 'casestudies', 'impact', 'process', 'blog', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
      const element = document.getElementById(id.toLowerCase());
      if (element) {
          const headerOffset = 80; // height of the header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }
      setIsMenuOpen(false);
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-brand-accent tracking-wide sm:tracking-widest cursor-pointer" onClick={() => scrollToSection('hero')}>
            NOVA DEV
          </div>
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link); }} 
                className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeSection === link 
                    ? 'text-brand-accent' 
                    : 'text-brand-light hover:text-brand-accent/80'
                }`}
              >
                {t[link]}
                 {activeSection === link && (
                  <span className="absolute inset-x-1 xl:inset-x-2 -bottom-1 h-0.5 bg-brand-accent"></span>
                 )}
              </a>
            ))}
            <div className="ml-2 xl:ml-4">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
          {/* Tablet menu - visible on md screens */}
          <div className="hidden md:flex lg:hidden space-x-4 items-center">
            {navLinks.slice(0, 6).map(link => (
              <a 
                key={link} 
                href={`#${link}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link); }} 
                className={`relative px-2 py-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeSection === link 
                    ? 'text-brand-accent' 
                    : 'text-brand-light hover:text-brand-accent/80'
                }`}
              >
                {t[link]}
                 {activeSection === link && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-brand-accent"></span>
                 )}
              </a>
            ))}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-brand-light hover:text-brand-accent transition-colors duration-300 text-xs font-medium"
            >
              Más
            </button>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="z-50 relative w-8 h-8 flex flex-col justify-around items-center"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className={`block w-full h-0.5 bg-brand-light transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-brand-light transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-brand-light transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Spacer to push content below header */}
          <div className="h-20 flex-shrink-0"></div>
          
          {/* Scrollable content area */}
          <div className="flex-1 flex flex-col items-center justify-start py-6 sm:py-8 px-4 sm:px-6 space-y-4 sm:space-y-6 min-h-0">
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link); }} 
                className={`text-xl sm:text-2xl md:text-3xl font-display transition-colors duration-300 text-center ${
                  activeSection === link 
                    ? 'text-brand-accent' 
                    : 'text-brand-light hover:text-brand-accent'
                }`}
              >
                {t[link]}
              </a>
            ))}
            
            {/* Language switcher with more spacing */}
            <div className="pt-6 pb-8">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
