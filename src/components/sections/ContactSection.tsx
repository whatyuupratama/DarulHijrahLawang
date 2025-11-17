import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { contactInfo } from '@/data/siteContent';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const ContactSection: React.FC = () => {
  return (
    <section className='bg-white pb-20 scroll-mt-32' id='kontak'>
      <div className='container mx-auto px-4 sm:px-6 '>
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
                  <FaWhatsapp />
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
                  <AiOutlineMail />
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
            <div className='flex flex-col gap-4 justify-center items-center h-full text-center '>
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
