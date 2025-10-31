'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { siteBrand } from '@/data/siteContent';

const navItems = [
  { label: 'Visi & Misi', href: '#visi' },
  { label: 'Program', href: '#program' },
  { label: 'Ekstrakurikuler', href: '#ekstrakurikuler' },
  { label: 'Pendaftaran', href: '#pendaftaran' },
  { label: 'Syarat', href: '#persyaratan' },
  { label: 'Kontak', href: '#kontak' },
];

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const containerClass = [
    'mx-auto flex w-full max-w-6xl items-center justify-between rounded-full transition-all duration-300 backdrop-blur',
    isScrolled
      ? 'border border-slate-200/70 bg-white/90 px-6 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.15)]'
      : 'border border-white/25 bg-white/70 px-5 py-3 shadow-[0_20px_55px_rgba(2,132,199,0.25)] sm:px-8 sm:py-4',
  ].join(' ');

  return (
    <header
      className={`fixed inset-x-0 z-50 flex justify-center px-3 transition-all duration-300 ${
        isScrolled ? 'top-3 sm:top-4' : 'top-5 sm:top-6'
      }`}
    >
      <div className={containerClass}>
        <div className='flex items-center gap-3'>
          <span className='flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
            <Image
              src='/logo.png'
              alt='Logo Mahad'
              width={40}
              height={40}
              className='h-9 w-9 object-contain'
            />
          </span>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold text-slate-900 md:text-base'>
              {siteBrand.shortName}
            </span>
            <span className='text-xs text-slate-500'>{siteBrand.slogan}</span>
          </div>
        </div>
        <button
          type='button'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-sky-200 hover:text-sky-600 md:hidden'
          aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isMenuOpen}
        >
          <span className='relative flex h-5 w-5 flex-col items-center justify-between'>
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
        <nav className='hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='transition duration-200 hover:text-sky-600'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href='https://wa.me/62895624820033?text=Assalamualaikum%20Ust.%20Mada%2C%20kami%20ingin%20mengatur%20jadwal%20kunjungan'
          className='hidden rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-400 md:inline-flex'
        >
          Hubungi Ust. Mada
        </a>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-40 flex items-start justify-center bg-linear-to-br from-slate-950/75 via-slate-900/70 to-slate-950/75 backdrop-blur-sm'
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className='mt-24 w-[min(92vw,420px)] overflow-hidden rounded-4xl border border-white/15 bg-white/95 text-slate-700 shadow-[0_35px_80px_rgba(15,23,42,0.45)]'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='flex items-center justify-between px-5 pb-4 pt-5'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-10 w-10 items-center justify-center rounded-2xl '>
                    <Image
                      src='/logo.png'
                      alt='Logo Mahad'
                      width={40}
                      height={40}
                      className='h-9 w-9 object-contain'
                    />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-slate-900'>
                      {siteBrand.shortName}
                    </span>
                    <span className='text-xs text-slate-500'>
                      {siteBrand.slogan}
                    </span>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => setIsMenuOpen(false)}
                  className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-sky-100 hover:text-sky-600'
                  aria-label='Tutup menu navigasi'
                >
                  <span className='sr-only'>Tutup</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-4 w-4'
                    aria-hidden
                  >
                    <path
                      fill='currentColor'
                      d='M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.3-1.41-1.42L9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z'
                    />
                  </svg>
                </button>
              </div>
              <div className='h-px w-full bg-slate-200/80' />
              <div className='flex flex-col gap-2 px-5 py-4 text-base font-semibold'>
                {navItems.map((item) => (
                  <a
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className='flex items-center justify-between rounded-2xl px-4 py-3 text-slate-600 transition hover:bg-sky-50 hover:text-sky-600'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className='text-xs text-slate-400'>→</span>
                  </a>
                ))}
              </div>
              <div className='px-5 pb-6 pt-2'>
                <a
                  href='https://wa.me/62895624820033?text=Assalamualaikum%20Ust.%20Mada%2C%20kami%20ingin%20mengatur%20jadwal%20kunjungan'
                  className='inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-sky-500 to-sky-400 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(14,165,233,0.35)] transition hover:brightness-105'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hubungi Ust. Mada
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;
