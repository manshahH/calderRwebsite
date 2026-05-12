import { useState, useRef, useEffect, useCallback } from 'react';

const CHARS = '!@#$%^&*<>[]{}|ABCDEFabcdef0123456789';

export default function useScramble(text) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const trigger = useCallback(() => {
    let frame = 0;
    const totalFrames = 40; // 40 frames * 15ms = 600ms
    const originalText = String(text);
    const length = originalText.length;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      let result = '';
      let doneCount = 0;
      
      for (let i = 0; i < length; i++) {
        // Sequential stagger: each character settles based on its index
        const settleFrame = (i / length) * totalFrames;
        
        if (frame >= settleFrame) {
          result += originalText[i];
          doneCount++;
        } else {
          // Keep spaces as spaces
          if (originalText[i] === ' ') {
            result += ' ';
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
      }
      
      setDisplayText(result);
      
      if (doneCount === length) {
        clearInterval(intervalRef.current);
      }
      
      frame++;
    }, 15);
  }, [text]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { displayText, trigger };
}
