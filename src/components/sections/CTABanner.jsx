import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

export default function CTABanner({ title, subtitle, ctaText, ctaHref, darkTheme }) {
  const bgGradient = darkTheme 
    ? '#0C1220' 
    : 'linear-gradient(135deg, #2A7B9B 0%, #1E5F78 100%)';

  const titleColor = darkTheme ? 'text-[#E2E8F2]' : 'text-[#060A14]';
  const subtitleColor = darkTheme ? 'text-[rgba(226,232,242,0.6)]' : 'text-[#D4A853]';
  const ctaBtnClasses = darkTheme 
    ? '!bg-[#3BAFD4] !text-[#060A14] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] border-none' 
    : 'first-cta-btn';
  const borderClasses = darkTheme
    ? 'border-t border-[rgba(59,175,212,0.15)] border-b border-[rgba(59,175,212,0.15)] mb-0'
    : 'border-b border-[rgba(0,0,0,0.3)] mb-0';

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full py-[80px] overflow-hidden ${borderClasses}`}
      style={{ background: bgGradient }}
    >
      {!darkTheme && (
        <style>{`
          .first-cta-btn {
            background: transparent !important;
            border: 2px solid #D4A853 !important;
            color: #D4A853 !important;
            border-radius: 8px !important;
            padding: 14px 28px !important;
            transition: all 0.35s ease !important;
          }
          .first-cta-btn:hover {
            background: #D4A853 !important;
            color: #060A14 !important;
            transform: translateY(-2px) !important;
            animation: goldPulse 1.5s infinite !important;
          }
          @keyframes goldPulse {
            0%, 100% { box-shadow: 0 0 32px rgba(212,168,83,0.35); }
            50% { box-shadow: 0 0 48px rgba(212,168,83,0.5); }
          }
        `}</style>
      )}
      {/* SVG Crosshatch Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l20 20M20 0L0 20' stroke='%23000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className={`font-['Syne'] font-[700] text-[clamp(28px,3.5vw,44px)] tracking-[-1px] mb-4 ${titleColor}`}>
          {title}
        </h2>
        <p className={`font-['Outfit'] font-[300] text-lg mb-8 max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
        <MagneticButton 
          href={ctaHref} 
          className={`${ctaBtnClasses} font-['Syne'] font-[700]`}
        >
          {ctaText}
        </MagneticButton>
      </div>
    </motion.section>
  );
}
