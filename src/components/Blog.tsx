
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Post as PostType } from '../translations';

interface MappedPost extends PostType {
    imageUrl: string;
}

interface BlogProps {
    t: {
        title: string;
        description: string;
        readMore: string;
        posts: {
            post1: PostType;
            post2: PostType;
            post3: PostType;
        }
    },
    setSelectedPost: (post: MappedPost) => void;
}

const Blog = React.forwardRef<HTMLElement, BlogProps>(({ t, setSelectedPost }, ref) => {
    const blogPosts: MappedPost[] = [
        { 
            ...t.posts.post1,
            imageUrl: '/blog/ai-web-development-coding.webp'
        },
        { 
            ...t.posts.post2,
            imageUrl: '/blog/cloud-infrastructure-servers.webp'
        },
        { 
            ...t.posts.post3,
            imageUrl: '/blog/ui-ux-design-process.webp'
        },
    ];

  return (
    <section id="blog" ref={ref} className="py-20 md:py-32 bg-brand-dark text-brand-light relative overflow-hidden">
         <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-50"
          style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%238548ef\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
          aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-display font-bold">{t.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-brand-light/70">
                    {t.description}
                </p>
            </AnimatedSection>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <AnimatedSection key={index} delay={400 + index * 150}>
                    <div className="group bg-brand-dark/50 backdrop-blur-sm border border-brand-light/20 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-brand-accent transform hover:-translate-y-2">
                        <div className="overflow-hidden">
                           <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" loading="lazy" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-display font-bold text-brand-light group-hover:text-brand-accent transition-colors duration-300">{post.title}</h3>
                            <p className="mt-3 text-brand-light/60 flex-grow line-clamp-3">{post.excerpt}</p>
                            <div className="mt-4">
                                <button
                                    onClick={() => setSelectedPost(post)}
                                    className="font-semibold text-brand-accent group-hover:text-brand-accent-dark transition-colors duration-300"
                                >
                                    {t.readMore} &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
});

export default Blog;