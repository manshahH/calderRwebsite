import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingInput({ id, label, type = "text", required, value, onChange, placeholder, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value && String(value).length > 0);

  return (
    <div className="relative w-full group">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isActive ? placeholder : ""}
        className="w-full bg-[#0C1220] border border-[rgba(255,255,255,0.07)] rounded-lg px-4 pt-6 pb-2 font-['Outfit'] text-[14px] text-[#E2E8F2] outline-none transition-colors duration-200 focus:border-[#3BAFD4] [color-scheme:dark]"
        {...props}
      />
      <label 
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-200"
        style={{
          top: isActive ? '8px' : '50%',
          transform: isActive ? 'none' : 'translateY(-50%)',
          fontSize: isActive ? '10px' : '14px',
          color: isActive ? '#3BAFD4' : '#6B7A99',
          fontFamily: isActive ? '"JetBrains Mono", monospace' : '"Outfit", sans-serif',
          textTransform: isActive ? 'uppercase' : 'none',
          letterSpacing: isActive ? '0.5px' : 'normal',
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
