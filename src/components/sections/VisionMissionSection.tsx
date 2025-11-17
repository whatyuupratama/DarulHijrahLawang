import React from 'react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { missionIconKeys, visionMission } from '@/data/siteContent';
import { IoLocationOutline } from 'react-icons/io5';
import {
  FiCheckCircle,
  FiClock,
  FiPlusCircle,
  FiTrendingUp,
} from 'react-icons/fi';

const iconRegistry = {
  clock: FiClock,
  check: FiCheckCircle,
  plus: FiPlusCircle,
  growth: FiTrendingUp,
};

const missionIconComponents = missionIconKeys.map(
  (key) => iconRegistry[key as keyof typeof iconRegistry] || FiCheckCircle
);

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
                <IoLocationOutline />
              </span>
              <div>
                <p className='text-sm uppercase tracking-[0.35em] text-sky-500'>
                  Visi
                </p>
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
            <ul className='mt-6 space-y-4 text-sm text-slate-600'>
              {visionMission.missions.map((mission, idx) => (
                <li key={mission} className='flex gap-3'>
                  <span className='mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600'>
                    {React.createElement(
                      missionIconComponents[idx % missionIconComponents.length],
                      { className: 'h-4 w-4' }
                    )}
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
