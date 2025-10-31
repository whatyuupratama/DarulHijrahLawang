import Image from 'next/image';
import React from 'react';
import { galleryItems } from '@/data/siteContent';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const GallerySection: React.FC = () => {
  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <AnimatedReveal>
          <SectionHeading
            eyebrow='Album Kegiatan'
            title='Momen Terbaik Santri DH Lawang'
            description='Dokumentasi kegiatan formal hingga non-formal untuk menggambarkan suasana keseharian santri.'
            align='center'
          />
        </AnimatedReveal>
        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          {galleryItems.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              delay={index * 90}
              className='h-full'
            >
              <figure className='group relative h-full overflow-hidden rounded-[34px] border border-slate-100 bg-slate-50/50 shadow-[0_30px_60px_rgba(148,163,184,0.25)]'>
                <div className='relative h-64 w-full overflow-hidden'>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className='object-cover transition duration-1200 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-900/0' />
                </div>
                <figcaption className='absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 text-white'>
                  <span className='text-lg font-semibold'>{item.title}</span>
                  <p className='text-sm text-slate-100/90'>
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
