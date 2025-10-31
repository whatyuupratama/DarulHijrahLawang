import React from 'react';
import { extracurricularList } from '@/data/siteContent';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const ExtracurricularSection: React.FC = () => {
  return (
    <section
      className='relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white scroll-mt-32'
      id='ekstrakurikuler'
    >
      <div className='absolute inset-0 opacity-40'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_top_left,#38bdf8,transparent_55%)]' />
      </div>
      <div className='container relative mx-auto px-4 sm:px-6'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Ekstrakurikuler'
            title='Melatih Fisik, Mental, dan Kreasi Santri'
            description='Kami memilih kegiatan yang mendukung sunnah Rasul dan membentuk karakter santri yang tangguh. Silat menjadi aktivitas utama pengganti kerate.'
            align='center'
            tone='light'
            className='text-white'
          />
        </AnimatedReveal>
        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {extracurricularList.map((item, idx) => (
            <AnimatedReveal key={item.name} delay={idx * 90} className='h-full'>
              <article className='relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_60px_rgba(15,23,42,0.35)] backdrop-blur transition duration-500 hover:shadow-[0_45px_80px_rgba(14,165,233,0.35)]'>
                <div>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <span className='text-sm font-semibold text-sky-200'>
                      0{idx + 1}
                    </span>
                  </div>
                  <p className='mt-4 text-sm text-slate-200'>{item.summary}</p>
                </div>
                <div className='mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300/70'>
                  <span className='h-2 w-2 rounded-full bg-sky-300' /> Aktivitas
                  Unggulan
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
