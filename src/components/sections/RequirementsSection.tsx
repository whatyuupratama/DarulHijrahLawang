import Image from 'next/image';
import React from 'react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { requirements } from '@/data/siteContent';
import { FiCheck } from 'react-icons/fi';

const RequirementsSection: React.FC = () => {
  return (
    <section id='persyaratan' className='bg-slate-50 py-20 scroll-mt-32'>
      <div className='container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Syarat & Ketentuan'
            title='Persiapkan Berkas sebelum Konfirmasi'
            description={requirements.intro}
          />
          <ul className='mt-8 space-y-4 text-sm text-slate-600'>
            {requirements.items.map((item) => (
              <li
                key={item}
                className='flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_12px_35px_rgba(148,163,184,0.16)]'
              >
                <span className='mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600'>
                  <FiCheck className='h-4 w-4' aria-hidden />
                </span>
                <span className='capitalize'>{item}</span>
              </li>
            ))}
          </ul>

        </AnimatedReveal>
        <AnimatedReveal delay={140} className='relative'>
          <div className='relative overflow-hidden rounded-4xl border border-white/50 bg-linear-to-b from-white/70 to-white/20 shadow-[0_40px_90px_rgba(148,163,184,0.28)] backdrop-blur'>
            <Image
              src='/santri.jpeg'
              alt="Santri Ma'had Tahfidzul Qur'an Darul Hijrah Cabang Lawang"
              width={960}
              height={720}
              sizes='(max-width: 1024px) 100vw, 50vw'
              loading='lazy'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-x-0 bottom-0 rounded-t-[28px] bg-linear-to-t from-slate-950/75 via-slate-900/40 to-transparent p-6 text-white'>
              <p className='text-xs uppercase tracking-[0.35em] text-slate-100/80'>
                Dokumentasi Cabang Lawang
              </p>
              <h3 className='mt-2 text-lg font-semibold'>
                Ma&apos;had Tahfidzul Qur&apos;an Darul Hijrah
              </h3>
              <p className='text-sm text-slate-100/85'>
                Santri siap berkhidmat untuk umat.
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default RequirementsSection;
