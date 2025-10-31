import React from "react";
import { registrationTimeline } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const linkifyDetail = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(urlRegex, (url, offset) => {
    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }
    nodes.push(
      <a
        key={`${url}-${offset}`}
        href={url}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-sky-600 underline-offset-2 hover:text-sky-700 hover:underline"
      >
        {url}
      </a>
    );
    lastIndex = offset + url.length;
    return url;
  });

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const TimelineSection: React.FC = () => {
  return (
    <section id="pendaftaran" className="bg-sky-50 py-20 scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Alur Pendaftaran"
            title="Langkah Mudah Mendaftar Santri Baru"
            description="Ikuti alur berikut dan pastikan setiap tahap terkonfirmasi langsung ke Ust. Mada."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-6">
          {registrationTimeline.map((item, index) => (
            <AnimatedReveal key={item.phase} delay={index * 100}>
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_25px_60px_rgba(14,165,233,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(14,165,233,0.28)]">
                <div className="absolute left-0 top-0 h-full w-[6px] rounded-r-full bg-gradient-to-b from-sky-400 to-sky-600" />
                <div className="ml-6 flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                    Tahap 0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {linkifyDetail(item.detail)}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
