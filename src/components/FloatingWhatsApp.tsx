
import React, { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Appear after 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/573108644580"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white rounded-full p-3.5 shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-[#25D366] transition-all duration-300 ease-in-out transform animate-subtle-pulse ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.11 4.91C17.22 3 14.71 2 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.25 4.95L2 22l5.05-1.25c1.52.79 3.18 1.25 4.95 1.25h.01c5.52 0 10-4.48 10-10c0-2.71-1-5.22-2.89-7.09zM12 20.01c-1.61 0-3.13-.4-4.44-1.12l-.31-.18l-3.31.82l.84-3.23l-.2-.32c-.78-1.25-1.2-2.74-1.2-4.28c0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8.01zm4.9-6.01c-.28-.14-1.64-.81-1.9-.9c-.26-.09-.45-.14-.64.14s-.72.9-.88 1.08c-.16.18-.32.21-.59.06c-1.05-.57-1.98-1.2-2.83-2.11c-.68-.68-1.1-1.52-1.23-1.77c-.12-.25-.01-.39.12-.51c.11-.11.25-.28.38-.42c.12-.14.16-.25.24-.42c.08-.17.04-.31-.02-.45c-.06-.14-.64-1.54-.88-2.1c-.24-.56-.48-.48-.64-.48c-.15 0-.31-.03-.48-.03c-.17 0-.43.06-.66.31c-.22.25-.86.84-.86 2.05c0 1.21.88 2.37 1 2.53c.12.16 1.71 2.62 4.14 3.63c.59.25 1.05.4 1.41.52c.69.23 1.32.19 1.82.12c.54-.08 1.64-.67 1.88-1.32c.24-.65.24-1.21.17-1.32c-.07-.11-.26-.18-.53-.32z" />
      </svg>
    </a>
  );
};

export default React.memo(FloatingWhatsApp);