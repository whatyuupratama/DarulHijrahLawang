import React from 'react';
import { registrationLinks, heroContent } from '@/data/siteContent';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const CTASection: React.FC = () => {
  return (
    <section className='relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white'>
      <div className='absolute inset-0 opacity-40'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_bottom_right,#38bdf8,transparent_55%)]' />
      </div>
      <div className='container relative mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between'>
        <AnimatedReveal className='max-w-2xl text-center lg:text-left'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-200'>
            Konfirmasi Sekarang
          </p>
          <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
            Siapkan Berkas, Hubungi Ust. Mada, dan Finalkan Pendaftaran
          </h2>
          <p className='mt-4 text-base text-slate-200'>
            Setelah mengisi formulir, segera konfirmasi melalui WhatsApp agar
            data santri diproses lebih cepat. Jangan lupa unduh booklet resmi
            sebagai panduan.
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start'>
            <a
              href={heroContent.primaryCta.href}
              className='group inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:bg-sky-300'
            >
              Hubungi Ust. Mada
              <span
                aria-hidden
                className='transition-transform group-hover:translate-x-1'
              >
                →
              </span>
            </a>
            <a
              href={registrationLinks.booklet}
              className='inline-flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition duration-300 hover:bg-white/20'
              target='_blank'
              rel='noreferrer'
            >
              Unduh Booklet
            </a>
          </div>
        </AnimatedReveal>
        <AnimatedReveal className='relative w-full max-w-md' delay={120}>
          <div className='absolute -left-10 -top-10 h-24 w-24 rounded-full bg-sky-300/40 blur-2xl' />
          <div className='rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_45px_90px_rgba(15,23,42,0.45)] backdrop-blur'>
            <h3 className='text-lg font-semibold text-white'>
              Link Pendaftaran Terbaru
            </h3>
            <p className='mt-2 text-sm text-slate-200'>
              Pastikan menggunakan link resmi berikut saat mengisi formulir data
              santri.
            </p>
            <a
              href={registrationLinks.form}
              className='mt-4 inline-flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100'
              target='_blank'
              rel='noreferrer'
            >
              {registrationLinks.form}
              <span aria-hidden>↗</span>
            </a>
            <p className='mt-5 text-xs uppercase tracking-[0.3em] text-slate-200'>
              Terkoneksi ke spreadsheet laptop Ust. Mada
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default CTASection;
