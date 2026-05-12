import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SlotColumn = ({ digit, duration, delay, start }) => {
  const isDigit = /^[0-9]$/.test(digit);
  
  const targetIndex = isDigit ? 20 + parseInt(digit, 10) : 0;
  const initialIndex = isDigit ? Math.floor(Math.random() * 10) : 0;
  
  const [style, setStyle] = useState({
    transform: `translateY(-${initialIndex}em)`,
    transition: 'none'
  });

  useEffect(() => {
    if (start && isDigit) {
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => {
          setStyle({
            transform: `translateY(-${targetIndex}em)`,
            transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          });
        });
      });
      return () => cancelAnimationFrame(r1);
    }
  }, [start, isDigit, targetIndex, duration, delay]);

  if (!isDigit) {
    return <span style={{ display: 'inline-block', lineHeight: '1em' }}>{digit}</span>;
  }

  const numbers = Array.from({ length: 30 }, (_, i) => i % 10);

  return (
    <span style={{ display: 'inline-block', height: '1em', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <span style={{ display: 'inline-flex', flexDirection: 'column', ...style }}>
        {numbers.map((num, i) => (
          <span key={i} style={{ height: '1em', lineHeight: '1em', textAlign: 'center' }}>
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};

export default function SlotCounter({ value, duration = 1600, delay = 0, suffix = "", prefix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stringValue = String(value);
  const chars = stringValue.split('');

  return (
    <span ref={ref} className="inline-flex flex-row items-baseline text-inherit font-inherit">
      {prefix && <span className="inline-block whitespace-pre">{prefix}</span>}
      {chars.map((char, index) => {
        const charDuration = duration + Math.random() * 200;
        return (
          <SlotColumn 
            key={`${index}-${char}`} 
            digit={char} 
            duration={charDuration} 
            delay={delay} 
            start={inView} 
          />
        );
      })}
      {suffix && <span className="inline-block whitespace-pre">{suffix}</span>}
    </span>
  );
}
