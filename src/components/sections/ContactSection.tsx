import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { contactInfo } from '@/data/siteContent';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const ContactSection: React.FC = () => {
  return (
    <section className='bg-white pb-20 scroll-mt-32' id='kontak'>
      <div className='container mx-auto px-4 sm:px-6 '>
        {/* <AnimatedReveal> */}
        {/* <SectionHeading
            eyebrow='Kontak Resmi'
            title='Konfirmasi dan Konsultasi Bersama Ust. Mada'
            description='Semua jalur komunikasi diarahkan ke Ust. Mada agar informasi santri tersinkron langsung dengan laptop beliau.'
          /> */}
        {/* </AnimatedReveal> */}
        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr]'>
          <AnimatedReveal className='w-full rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-[0_25px_60px_rgba(148,163,184,0.18)] sm:p-8'>
            <h3 className='text-lg font-semibold text-slate-900'>
              Kontak Resmi
            </h3>
            <p className='mt-3 text-sm text-slate-600'>
              Kirimkan bukti formulir dan konfirmasi jadwal wawancara.
            </p>
            <div className='mt-8 flex flex-col gap-4 text-sm text-slate-600'>
              <a
                href={contactInfo.whatsappHref}
                className='group inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(14,116,144,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)]'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-5 w-5'
                    aria-hidden
                  >
                    <path
                      fill='currentColor'
                      d='M12 2a9.94 9.94 0 0 0-7.07 2.93A10 10 0 0 0 12 22h.05A9.92 9.92 0 0 0 20 14.94 10 10 0 0 0 12 2m5 12.77c-.26.74-1.51 1.42-2.08 1.48c-.53.05-1.21.08-1.95-.12c-.45-.12-1.02-.33-1.78-.65a9.33 9.33 0 0 1-3.55-3.16A4.76 4.76 0 0 1 6.79 9c0-.9.47-1.34.63-1.52a.66.66 0 0 1 .49-.24h.35c.11 0 .26 0 .4.3s.5 1.19.54 1.28s.08.19.02.31s-.09.13-.18.22l-.26.26a.38.38 0 0 0-.08.41a6.12 6.12 0 0 0 1.14 1.52a6.42 6.42 0 0 0 1.62 1.17c.19.1.3.08.41 0s.47-.55.6-.74s.26-.17.42-.1s1.07.5 1.26.6s.31.14.36.22s.05.88-.21 1.62'
                    />
                  </svg>
                </span>
                <div>
                  <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                    WhatsApp
                  </p>

                  <p className='text-base font-semibold text-slate-900'>
                    {contactInfo.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className='group inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_rgba(14,116,144,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)]'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-5 w-5'
                    aria-hidden
                  >
                    <path
                      fill='currentColor'
                      d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z'
                    />
                  </svg>
                </span>
                <div>
                  <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                    Email
                  </p>
                  <p className='text-base font-semibold text-slate-900'>
                    {contactInfo.email}
                  </p>
                </div>
              </a>
              <div className='flex flex-col gap-2 rounded-2xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'>
                <p className='text-xs uppercase tracking-[0.3em] text-slate-400'>
                  Alamat
                </p>
                <p className='text-base font-semibold text-slate-900'>
                  {contactInfo.address}
                </p>
                <p className='text-xs text-slate-500'>
                  {contactInfo.officeHours}
                </p>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal
            className='relative w-full overflow-hidden rounded-3xl bg-linear-to-br  from-sky-400 via-sky-500 to-sky-600 p-6 text-white shadow-[0_35px_80px_rgba(2,132,199,0.35)] sm:p-8'
            delay={120}
          >
            <div className='absolute -right-12 top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl' />
            <div className='flex flex-col gap-4 justify-center items-start h-full text-start border'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-white/75'>
                Reminder
              </p>
              <h3 className='text-xl font-semibold leading-snug text-white sm:text-2xl capitalize  p-4 w-full'>
                Harap konfirmasi data santri setelah mengisi formulir
                pendaftaran.
              </h3>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
