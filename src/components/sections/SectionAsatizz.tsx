import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { asatidzList } from '@/data/siteContent';
// import { div } from 'motion/react-m';
import Image from 'next/image';
// import { div } from 'motion/react-client';

interface Asatidz {
  name: string;
  role: string;
  imageUrl: string;
}
const SectionAsatizz: React.FC = () => {
  return (
    <section
      className='bg-linear-to-b from-slate-50 via-white to-white py-20'
      id='asatidz'
    >
      <div className='container mx-auto px-4 sm:px-6'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Para Asatidz'
            title='Para Asatidz Dipesantren'
            description='Kenali para pembina yang mendampingi santri dalam halaqoh, kedisiplinan, dan manajemen pesantren.'
          />
        </AnimatedReveal>
        <div className='mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4'>
          {asatidzList.map((ustadz: Asatidz, index: number) => (
            <AnimatedReveal
              key={ustadz.name}
              delay={index * 90}
              className='h-full'
            >
              <article className='group flex h-full flex-col items-center rounded-2xl border border-slate-200/80  p-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_25px_70px_rgba(14,165,233,0.12)] sm:items-start sm:text-left'>
                <div className='relative w-full overflow-hidden rounded-2xl border border-slate-100'>
                  <div className='relative mx-auto flex aspect-3/4 w-full max-w-[220px] items-end justify-center overflow-hidden'>
                    <Image
                      src={ustadz.imageUrl}
                      alt={ustadz.name}
                      width={320}
                      height={380}
                      className='h-full w-full object-contain  transition duration-500 group-hover:scale-[1.01]'
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className='mt-6 flex w-full flex-1 flex-col gap-2'>
                  <h3 className='text-lg font-semibold text-slate-900'>
                    {ustadz.name}
                  </h3>
                  <p className='text-sm text-slate-600'>{ustadz.role}</p>
                </div>
              </article>
            </AnimatedReveal>
            // <div key={index}>haii</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionAsatizz;
