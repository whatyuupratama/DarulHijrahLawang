import React from 'react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { visionMission } from '@/data/siteContent';

const missionIcons = [
  'M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm0 2a8 8 0 0 0-5.66 13.66A8 8 0 1 0 12 4Zm0 2.5a1 1 0 0 1 1 1V12l3.1 1.8a1 1 0 1 1-1 1.73l-3.6-2.1A1 1 0 0 1 11 12V7.5a1 1 0 0 1 1-1Z',
  'M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm4.95 6.64a1 1 0 0 0-1.4-1.42L11 11.78l-1.88-1.89a1 1 0 0 0-1.41 1.42l2.59 2.6a1 1 0 0 0 1.41 0Z',
  'M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm-1 5a1 1 0 0 0-1 1v5H7a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm5 3a1 1 0 0 0-1 1v5h-3a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z',
  'M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm-1 5a1 1 0 0 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2Z',
];

const VisionMissionSection: React.FC = () => {
  return (
    <section id='visi' className='bg-white py-20 scroll-mt-32'>
      <div className='container mx-auto px-4 sm:px-6'>
        <AnimatedReveal>
          <SectionHeading
            title="Mulia bersama Al-Qur'an dan As-Sunnah"
            description="Arahan besar Ma'had Tahfidzul Qur'an Darul Hijrah Cabang Lawang untuk membentuk kader pemimpin Qur'ani."
            align='center'
          />
        </AnimatedReveal>
        <div className='mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]'>
          <AnimatedReveal className='rounded-3xl border border-sky-100/70 bg-sky-50/80 p-8 shadow-[0_25px_70px_rgba(14,165,233,0.18)]'>
            <div className='flex items-center gap-4'>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-[0_10px_30px_rgba(14,165,233,0.25)]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='h-6 w-6'
                  aria-hidden
                >
                  <path
                    fill='currentColor'
                    d='M12 3c3.86 0 7 3.14 7 7c0 4.88-7 11-7 11s-7-6.12-7-11c0-3.86 3.14-7 7-7m0 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5'
                  />
                </svg>
              </span>
              <div>
                <p className='text-sm uppercase tracking-[0.35em] text-sky-500'>
                  Visi
                </p>
                {/* <h3 className='mt-1 text-xl font-semibold text-slate-900'>
                  Cahaya Qur&apos;an untuk Pemimpin Masa Depan
                </h3> */}
              </div>
            </div>
            <p className='mt-6 text-base text-slate-700'>
              {visionMission.vision}
            </p>
          </AnimatedReveal>
          <AnimatedReveal className='rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)]'>
            <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>
              Misi Ma&apos;had
            </p>
            {/* <h3 className='mt-2 text-xl font-semibold text-slate-900'>
              Langkah Nyata Pembinaan Santri
            </h3> */}
            <ul className='mt-6 space-y-4 text-sm text-slate-600'>
              {visionMission.missions.map((mission, idx) => (
                <li key={mission} className='flex gap-3'>
                  <span className='mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='h-4 w-4'
                      aria-hidden
                    >
                      <path
                        fill='currentColor'
                        d={missionIcons[idx % missionIcons.length]}
                      />
                    </svg>
                  </span>
                  <span className='flex items-center'>{mission}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
