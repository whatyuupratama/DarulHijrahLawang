import React from 'react';
import { faqItems } from '@/data/siteContent';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const FAQSection: React.FC = () => {
  return (
    <section className='bg-slate-50 py-20'>
      <div className='container mx-auto px-6'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Pertanyaan Umum'
            title='FAQ Pendaftaran Santri DH Lawang'
            description='Jika belum menemukan jawaban, silakan hubungi Ust. Mada agar mendapat panduan langsung.'
            align='center'
          />
        </AnimatedReveal>
        <div className='mt-12 space-y-4'>
          {faqItems.map((item, index) => (
            <AnimatedReveal key={item.question} delay={index * 80}>
              <details className='group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition hover:border-sky-200 hover:shadow-[0_25px_60px_rgba(14,165,233,0.2)]'>
                <summary className='flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900'>
                  {item.question}
                  <span className='transition duration-300 group-open:rotate-45'>
                    +
                  </span>
                </summary>
                <p className='mt-4 translate-y-1 text-sm text-slate-600 opacity-0 transition duration-300 ease-out group-open:translate-y-0 group-open:opacity-100 group-open:delay-75'>
                  {item.answer}
                </p>
              </details>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
