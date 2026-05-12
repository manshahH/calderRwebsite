import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealText({ text, tag: Tag = 'h2', className, delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-word', {
        y: '0%',
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => {
        const parts = word.split('\n');
        
        return (
          <React.Fragment key={i}>
            {parts.map((part, partIndex) => (
              <React.Fragment key={partIndex}>
                {partIndex > 0 && <br />}
                {part && (
                  <span style={{ overflow: 'hidden', display: 'inline-block', verticalAlign: 'bottom' }}>
                    <span 
                      className="reveal-word" 
                      style={{ display: 'inline-block', transform: 'translateY(105%)' }}
                    >
                      {part}
                    </span>
                  </span>
                )}
              </React.Fragment>
            ))}
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
