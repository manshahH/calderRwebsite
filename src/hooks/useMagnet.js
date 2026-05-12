import { useRef, useEffect } from 'react';
import { useSpring } from 'framer-motion';

export default function useMagnet() {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // strength: 0.35 of distance from center
      let newX = distanceX * 0.35;
      let newY = distanceY * 0.35;
      
      // limit to up to 12px
      const distance = Math.sqrt(newX * newX + newY * newY);
      if (distance > 12) {
        newX = (newX / distance) * 12;
        newY = (newY / distance) * 12;
      }
      
      x.set(newX);
      y.set(newY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return { ref, x, y };
}
