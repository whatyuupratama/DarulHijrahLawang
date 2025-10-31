import React from 'react';
import { programUnggulan } from '@/data/siteContent';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const ProgramsSection: React.FC = () => {
  return (
    <section className='bg-white py-20 scroll-mt-32' id='program'>
      <div className='container mx-auto px-4 sm:px-6'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Program Unggulan'
            title='Pembinaan Menyeluruh Untuk Santri Berprestasi'
            description='Tiga pilar utama pembinaan santri yang kami rancang untuk menjaga keseimbangan antara hafalan, akhlak, dan kemandirian.'
          />
        </AnimatedReveal>
        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {programUnggulan.map((program, index) => (
            <AnimatedReveal
              key={program.title}
              delay={index * 80}
              className='h-full'
            >
              <div className='group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-[0_25px_70px_rgba(14,165,233,0.12)]'>
                <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br from-sky-200 to-sky-400 opacity-0 transition-opacity duration-500 group-hover:opacity-30' />
                <h3 className='text-xl font-semibold text-slate-900'>
                  {program.title}
                </h3>
                <p className='mt-4 text-base text-slate-600'>
                  {program.description}
                </p>
                <div className='mt-6 h-[3px] w-12 origin-left scale-x-0 bg-sky-400 transition-transform duration-500 group-hover:scale-x-100' />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
