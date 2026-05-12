import { useRef, useEffect } from 'react';
import useScramble from '../../hooks/useScramble';

export default function ScrambleText({ text, className, tag: Tag = 'span' }) {
  const { displayText, trigger } = useScramble(text);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const parent = element.parentElement;
    if (!parent) return;

    const handleMouseEnter = () => trigger();

    parent.addEventListener('mouseenter', handleMouseEnter);
    return () => parent.removeEventListener('mouseenter', handleMouseEnter);
  }, [trigger]);

  return (
    <Tag ref={ref} className={className}>
      {displayText}
    </Tag>
  );
}

export function ScrambleHeading({ text, className, tag: Tag = 'h2' }) {
  const { displayText, trigger } = useScramble(text);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const parent = element.parentElement;
    if (!parent) return;

    const handleMouseEnter = () => trigger();

    parent.addEventListener('mouseenter', handleMouseEnter);
    return () => parent.removeEventListener('mouseenter', handleMouseEnter);
  }, [trigger]);

  return (
    <Tag ref={ref} className={className}>
      {displayText}
    </Tag>
  );
}
