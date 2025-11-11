import React from 'react';
import { contactInfo, siteBrand } from '@/data/siteContent';

const FooterSection: React.FC = () => {
  return (
    <footer className='bg-slate-950 py-12 text-slate-200'>
      <div className='container mx-auto flex flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-between'>
        <div className='flex flex-col justify-between gap-6'>
          <div className='space-y-3'>
            <p className='text-lg font-semibold text-white'>{siteBrand.name}</p>
            <p className='max-w-md text-sm text-slate-400'>
              {siteBrand.slogan}
            </p>
            <div className='flex flex-col gap-1 text-sm text-slate-400'>
              <span>{contactInfo.address}</span>
              <span>Telp/WA: {contactInfo.phone}</span>
              <span>Email: {contactInfo.email}</span>
              <span>{contactInfo.officeHours}</span>
            </div>
          </div>
          <p className='text-xs text-slate-500'>
            © {new Date().getFullYear()} {siteBrand.shortName}. All rights
            reserved.
          </p>
        </div>
        <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(15,23,42,0.35)]'>
          <iframe
            title='Lokasi Pondok Tahfizh Darul Hikmah Lawang'
            src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3952.571849482974!2d112.6741137616656!3d-7.835055427807669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl. Putri Malu%2C Perum VNR (AL)%2C Ds. Ketindan%2C Kec. Lawang%2C Kab. Malang!5e0!3m2!1sid!2sid!4v1762843079275!5m2!1sid!2sid'
            width='100%'
            height='260'
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full min-w-0 lg:min-w-[400px]'
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
