
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

type FormStatus = 'idle' | 'submitting' | 'success';

interface ContactProps {
    t: {
        title: string;
        description: string;
        location: string;
        form: {
            name: string;
            email: string;
            message: string;
            send: string;
            sending: string;
        };
        success: {
            title: string;
            description: string;
            button: string;
        }
    }
}

const Contact = React.forwardRef<HTMLElement, ContactProps>(({ t }, ref) => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const commonSectionProps = {
    id: "contact",
    ref: ref,
    className: "py-20 md:py-32 bg-brand-dark text-brand-light relative overflow-hidden",
  };
  
  const backgroundPattern = (
    <div 
        className="absolute top-0 left-0 w-full h-full bg-repeat"
        style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%238548ef\" fill-opacity=\"0.04\"%3E%3Cpath d=\"M50 50.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v4zM25 25.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v4z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
        aria-hidden="true"
    ></div>
  );

  if (status === 'success') {
    return (
      <section {...commonSectionProps}>
        {backgroundPattern}
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="text-center">
            <div className="max-w-2xl mx-auto bg-[#1e1e1e]/80 backdrop-blur-sm p-10 rounded-lg shadow-2xl border border-brand-light/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">{t.success.title}</h2>
                <p className="mt-4 text-lg text-brand-light/70">
                    {t.success.description}
                </p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 font-display text-lg font-bold bg-brand-accent text-brand-dark px-8 py-4 rounded-sm uppercase tracking-widest hover:bg-brand-accent-dark hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                    {t.success.button}
                </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section {...commonSectionProps}>
      {backgroundPattern}
      <div className="container mx-auto px-6 relative">
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
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={400} className="h-64 lg:h-full rounded-lg overflow-hidden shadow-2xl">
                 <img 
                    src="https://source.unsplash.com/800x1000/?colombia,cajica,modern"
                    alt="Cajicá, Colombia Office Location"
                    className="w-full h-full object-cover"
                    loading="lazy"
                 />
            </AnimatedSection>
            <div className="bg-[#1e1e1e]/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-brand-light/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatedSection delay={500}>
                        <label htmlFor="name" className="sr-only">{t.form.name}</label>
                        <input required type="text" id="name" name="name" placeholder={t.form.name} className="w-full p-4 bg-brand-dark/80 border border-brand-light/20 text-brand-light rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors" disabled={status === 'submitting'} />
                    </AnimatedSection>
                    <AnimatedSection delay={600}>
                        <label htmlFor="email" className="sr-only">{t.form.email}</label>
                        <input required type="email" id="email" name="email" placeholder={t.form.email} className="w-full p-4 bg-brand-dark/80 border border-brand-light/20 text-brand-light rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors" disabled={status === 'submitting'} />
                    </AnimatedSection>
                    <AnimatedSection delay={700}>
                        <label htmlFor="message" className="sr-only">{t.form.message}</label>
                        <textarea required id="message" name="message" placeholder={t.form.message} rows={5} className="w-full p-4 bg-brand-dark/80 border border-brand-light/20 text-brand-light rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors" disabled={status === 'submitting'}></textarea>
                    </AnimatedSection>
                    <AnimatedSection className="text-center" delay={800}>
                        <button type="submit" className="font-display text-lg font-bold bg-brand-accent text-brand-dark px-8 py-4 rounded-sm uppercase tracking-widest hover:bg-brand-accent-dark hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled={status === 'submitting'}>
                            {status === 'submitting' ? t.form.sending : t.form.send}
                        </button>
                    </AnimatedSection>
                </form>
            </div>
        </div>
        <AnimatedSection delay={1000} className="text-center mt-12">
            <p className="text-brand-light/60">{t.location}</p>
        </AnimatedSection>
      </div>
    </section>
  );
});

export default Contact;