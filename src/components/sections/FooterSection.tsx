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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4687775744163!2d112.708!3d-7.9181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62fa7e98e5d73%3A0x0000000000000000!2sJl.%20Putri%20Malu%20No.12%2C%20Lawang%2C%20Malang!5e0!3m2!1sid!2sid!4v1736198400000!5m2!1sid!2sid'
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
