"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimatedRevealProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  className = "",
  delay = 0,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={`reveal-element ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedReveal;
