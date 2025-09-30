
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-brand-dark" aria-label="Loading content">
      <div className="w-16 h-16 border-4 border-brand-light border-t-brand-accent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;