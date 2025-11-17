'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { heroContent, siteBrand, heroConnections } from '@/data/siteContent';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { handleDownload } from '@/data/bookletUnduh';

const WorldMap = dynamic(() => import('@/components/ui/world-map'), {
  ssr: false,
  loading: () => null,
});
const HeroSection: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowMap(true), 300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className='relative overflow-hidden bg-linear-to-br from-sky-500 via-sky-400 to-sky-600'>
      <div className='absolute inset-0'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_60%)]' />
      </div>
      <div className='pointer-events-none absolute inset-0 hidden opacity-40 mix-blend-screen md:block'>
        {showMap && (
          <div className='absolute -top-[28%] left-1/2 h-[130%] w-[140%] -translate-x-1/2'>
            <WorldMap
              dots={heroConnections}
              lineColor='rgba(226, 243, 255, 0.85)'
              dotColor='rgba(255,255,255,0.7)'
            />
          </div>
        )}
      </div>
      <div className='container relative mx-auto flex min-h-[68vh] flex-col justify-center gap-12 px-4 pt-32 pb-20 sm:px-6 md:min-h-[80vh] md:flex-row md:items-center md:pt-44 md:pb-32 lg:py-32'>
        <AnimatedReveal className='flex flex-1 flex-col gap-6 text-center text-white md:text-left'>
          <span className='mx-auto w-fit rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(255,255,255,0.45)] backdrop-blur md:mx-0'>
            {heroContent.badge}
          </span>
          <h1 className='text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
            {heroContent.title}
          </h1>
          <p className='mx-auto max-w-2xl text-lg/relaxed text-white/90 md:mx-0'>
            {heroContent.description}
          </p>
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start'>
            <a
              href={heroContent.primaryCta.href}
              className='group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-sky-600 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(2,132,199,0.35)]'
            >
              {heroContent.primaryCta.label}
              <span className='relative inline-flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-sky-500' />
              </span>
            </a>
            <button
              onClick={() => handleDownload()}
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/30 transition-colors duration-300 hover:bg-white/20 cursor-pointer'
            >
              {heroContent.secondaryCta.label}
              <span aria-hidden>→</span>
            </button>
          </div>
          <a href='https://wa.me/6287839673299' className='cursor-pointer'>
            <div className='mx-auto flex max-w-sm items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm text-white/90 shadow-[0_20px_60px_rgba(3,105,161,0.35)] backdrop-blur md:mx-0'>
              <Image
                src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
                alt={siteBrand.shortName}
                width={40}
                height={40}
                loading='lazy'
                className='h-10 w-10 animate-float rounded-full border border-white/40 bg-white/80 p-1'
              />
              <div>
                <p className='font-medium'>{siteBrand.shortName}</p>
                <p className='text-xs text-white/75'>{heroContent.highlight}</p>
              </div>
            </div>
          </a>
        </AnimatedReveal>
        <AnimatedReveal
          className='relative flex flex-1 items-center justify-center'
          delay={150}
        >
          <div className='relative h-[380px] w-full max-w-[380px]'>
            <div className='absolute inset-0 animate-slow-spin rounded-[36px] bg-[conic-gradient(from_90deg,#f8fafc,#22d3ee,#0284c7,#f8fafc)] opacity-40 blur-2xl' />
            <div className='absolute inset-0 animate-pulse-slow rounded-[36px] bg-white/15' />
            <Image
              src='/amrullah-azzaky-achievement.jpeg'
              alt='Santri belajar di DH Lawang'
              fill
              className='rounded-4xl object-cover shadow-[0_40px_100px_rgba(1,87,155,0.45)]'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 480px'
              fetchPriority='high'
              priority
            />
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default HeroSection;
