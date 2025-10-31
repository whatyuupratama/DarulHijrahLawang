import React from "react";
import { halaqohHighlights } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const HalaqohSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Kehangatan Halaqoh"
            title="Pembinaan Intensif Bersama Asatidz"
            description="Setiap halaqoh dirancang untuk menjaga kedekatan santri dengan Qur'an dan pembinanya."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {halaqohHighlights.map((highlight, index) => (
            <AnimatedReveal key={highlight.title} delay={index * 90} className="h-full">
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_35px_80px_rgba(14,165,233,0.25)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition duration-500 group-hover:bg-sky-500 group-hover:text-white">
                    <span className="h-2 w-2 rounded-full bg-sky-500 group-hover:bg-white" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  {highlight.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HalaqohSection;
