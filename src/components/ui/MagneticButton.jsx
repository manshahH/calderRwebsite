import { motion } from 'framer-motion';
import useMagnet from '../../hooks/useMagnet';
import { cn } from '../../lib/utils';

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  ...props
}) {
  const { ref, x, y } = useMagnet();

  const baseStyles = "inline-flex px-6 py-3 rounded-lg text-sm tracking-wide transition-colors duration-300 items-center justify-center outline-none cursor-none";
  const primaryStyles = "bg-[#3BAFD4] text-[#060A14] font-['Syne'] font-bold";
  const ghostStyles = "bg-transparent border border-[rgba(255,255,255,0.1)] text-[#E2E8F2] hover:border-[#3BAFD4] hover:text-[#3BAFD4]";

  const classes = cn(
    baseStyles,
    variant === 'ghost' ? ghostStyles : primaryStyles,
    className
  );

  const Component = href ? 'a' : 'button';

  return (
    <div ref={ref} className="inline-block relative z-10">
      <motion.div style={{ x, y }}>
        <Component href={href} onClick={onClick} className={classes} {...props}>
          {children}
        </Component>
      </motion.div>
    </div>
  );
}
