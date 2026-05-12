import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Exact following for dot
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 30 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 30 });

  // Lagging for ring
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  const [isHovering, setIsHovering] = useState(false);
  const [hasMovedOnce, setHasMovedOnce] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setHasMovedOnce(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[32px] h-[32px] rounded-full border-[1.5px] border-[#3BAFD4] pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hasMovedOnce ? (isHovering ? 1 : 0.5) : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#3BAFD4] rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hasMovedOnce ? 1 : 0,
        }}
      />
    </>
  );
}
