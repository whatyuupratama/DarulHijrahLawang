import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

const alignmentMap = {
  left: "items-start text-left",
  center: "items-center text-center",
} as const;

const toneConfig = {
  default: {
    title: "text-slate-900",
    description: "text-slate-600",
    eyebrow: "text-sky-700",
  },
  light: {
    title: "text-white",
    description: "text-white/80",
    eyebrow: "text-sky-200",
  },
} as const;

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className = "",
}) => {
  const toneClass = toneConfig[tone];

  return (
    <div className={`flex flex-col gap-3 ${alignmentMap[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
            tone === "light"
              ? "bg-white/15 text-white"
              : "bg-sky-100/60 text-sky-700"
          }`}
        >
          <span
            className={`h-2 w-2 animate-pulse rounded-full ${
              tone === "light" ? "bg-sky-200" : "bg-sky-500"
            }`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${toneClass.title}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base ${toneClass.description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
