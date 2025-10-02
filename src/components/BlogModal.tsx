
import React, { useEffect, useRef } from 'react';
import { Post as PostType } from '../translations';

interface MappedPost extends PostType {
    imageUrl: string;
}

interface BlogModalProps {
  post: MappedPost | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (post) {
            document.addEventListener('keydown', handleKeyDown);
            modalRef.current?.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [post, onClose]);

    if (!post) {
        return null;
    }
    
    const formattedContent = post.content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="mb-4 last:mb-0">
            {paragraph.split('\n').map((line, lineIndex) => <React.Fragment key={lineIndex}>{line}<br/></React.Fragment>)}
        </p>
    ));

    return (
        <div 
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-lg z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
        >
            <div 
                ref={modalRef}
                tabIndex={-1}
                className="bg-brand-light text-brand-dark rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-up outline-none"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 md:h-64 object-cover"
                      decoding="async"
                      width={1600}
                      height={900}
                    />
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 bg-brand-dark/50 text-white rounded-full p-2 hover:bg-brand-dark transition-colors"
                        aria-label="Close post"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 md:p-10 overflow-y-auto">
                    <h2 id="blog-modal-title" className="text-2xl md:text-4xl font-display font-bold text-brand-accent">{post.title}</h2>
                    <div className="mt-6 text-base md:text-lg text-brand-dark/80 leading-relaxed">
                        {formattedContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;