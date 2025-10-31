'use client';

import Image from 'next/image';
import { useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  dotColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = '#0ea5e9',
  dotColor = 'rgba(255, 255, 255, 0.6)',
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: 'diagonal' });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: dotColor,
    shape: 'circle',
    backgroundColor: 'transparent',
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const labelPositions = useMemo(() => {
    if (dots.length === 0) {
      return [] as Array<{ x: number; y: number; label: string }>;
    }

    const unique = new Map<string, { x: number; y: number; label: string }>();

    dots.forEach(({ start, end }) => {
      [start, end].forEach((point) => {
        if (!point.label) return;
        const key = `${point.lat}-${point.lng}`;
        if (!unique.has(key)) {
          const coords = projectPoint(point.lat, point.lng);
          unique.set(key, { ...coords, label: point.label! });
        }
      });
    });

    return Array.from(unique.values());
  }, [dots]);

  return (
    <div className='relative aspect-2/1 w-full overflow-hidden'>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt='world map'
        fill
        sizes='(max-width: 1024px) 100vw, 1024px'
        priority={false}
        draggable={false}
        unoptimized
        className='pointer-events-none select-none object-cover opacity-80 mask-[linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]'
      />
      <svg
        ref={svgRef}
        viewBox='0 0 800 400'
        className='w-full h-full absolute inset-0 pointer-events-none select-none'
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill='none'
                stroke='url(#path-gradient)'
                strokeWidth='1'
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: 'easeOut',
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id='path-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='white' stopOpacity='0' />
            <stop offset='5%' stopColor={lineColor} stopOpacity='1' />
            <stop offset='95%' stopColor={lineColor} stopOpacity='1' />
            <stop offset='100%' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r='2'
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r='2'
                fill={lineColor}
                opacity='0.5'
              >
                <animate
                  attributeName='r'
                  from='2'
                  to='8'
                  dur='1.5s'
                  begin='0s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='0.5'
                  to='0'
                  dur='1.5s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r='2'
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r='2'
                fill={lineColor}
                opacity='0.5'
              >
                <animate
                  attributeName='r'
                  from='2'
                  to='8'
                  dur='1.5s'
                  begin='0s'
                  repeatCount='indefinite'
                />
                <animate
                  attributeName='opacity'
                  from='0.5'
                  to='0'
                  dur='1.5s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
          </g>
        ))}

        {labelPositions.map((node, index) => (
          <motion.g
            key={`label-${node.label}-${index}`}
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.6 + index * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r='4'
              fill={lineColor}
              fillOpacity='0.35'
            />
            <motion.text
              x={node.x + 8}
              y={node.y - 6}
              fill='rgba(255,255,255,0.85)'
              fontSize='12'
              fontWeight='600'
              letterSpacing='0.08em'
            >
              {node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
