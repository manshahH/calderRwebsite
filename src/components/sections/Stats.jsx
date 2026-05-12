import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { cn } from '../../lib/utils';
import SlotCounter from '../ui/SlotCounter';

export default function Stats() {
  const stats = [
    { target: 40, suffix: '+', isFloat: false, label: 'Businesses Served' },
    { target: 200, suffix: '+', isFloat: false, label: 'Workflows Automated' },
    { target: 4.9, suffix: '', isFloat: true, label: 'Average CSAT Score' },
    { target: 14, suffix: ' days', isFloat: false, label: 'Average Time to ROI' }
  ];

  const getBorders = (i) => {
    let classes = "border-white/10 ";
    if (i > 0) classes += "md:border-l ";
    if (i > 1) classes += "border-t md:border-t-0 ";
    return classes;
  };

  return (
    <section className="w-full bg-[#0C1220] border-y border-[rgba(255,255,255,0.07)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={cn(
                "py-12 flex flex-col items-center text-center",
                getBorders(i)
              )}
            >
              <div className="font-['Syne'] font-[800] text-[clamp(36px,4vw,52px)] text-[#3BAFD4] tracking-[-1px] leading-none">
                <SlotCounter 
                  value={stat.target} 
                  suffix={stat.suffix} 
                  delay={i * 100} 
                />
              </div>
              <div className="font-['Outfit'] font-[400] text-sm text-[#E2E8F2]/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
