import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSelect({ id, label, required, value, onChange, children, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = true; // Always floats

  return (
    <div className="relative w-full group">
      <select
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-[#0C1220] border border-[rgba(255,255,255,0.07)] rounded-lg px-4 pt-6 pb-2 font-['Outfit'] text-[14px] text-[#E2E8F2] outline-none transition-colors duration-200 focus:border-[#3BAFD4] [color-scheme:dark]"
        {...props}
      >
        {children}
      </select>
      <label 
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-200"
        style={{
          top: '8px',
          fontSize: '10px',
          color: isFocused ? '#3BAFD4' : '#6B7A99',
          fontFamily: '"JetBrains Mono", monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {label}
      </label>

      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none border border-[rgba(59,175,212,0.5)]"
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }}
        animate={{ 
          clipPath: isFocused 
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
            : 'polygon(0 0, 0 0, 0 0, 0 0)'
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
