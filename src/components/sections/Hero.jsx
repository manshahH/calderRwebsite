import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import TerminalCard from '../ui/TerminalCard';
import RevealText from '../ui/RevealText';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
};

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax calculations
  const yLeft = useTransform(scrollY, value => value * 0.08);
  const yRight = useTransform(scrollY, value => value * 0.03);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN */}
        <motion.div 
          style={{ y: yLeft }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start z-10"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-8">
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-[#3BAFD4]"
            />
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              Business-First AI Solutions
            </span>
          </motion.div>

          {/* H1 */}
          <RevealText 
            tag="h1"
            text={"AI Built Around\nYour Business."}
            className="font-['Syne'] font-[800] text-[clamp(44px,6vw,76px)] text-[#E2E8F2] tracking-[-2px] leading-[1.0] mb-6"
          />

          {/* Subtext */}
          <motion.p variants={itemVariants} className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 leading-relaxed max-w-md mb-10">
            We don't sell AI hype. We understand your operations, identify what moves the needle, 
            and build systems that deliver measurable ROI. Not demos.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
            <MagneticButton variant="primary" href="#contact">
              Book a Free Call &rarr;
            </MagneticButton>
            <MagneticButton variant="ghost" href="#work">
              See Our Work
            </MagneticButton>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {['SJ', 'MR', 'PL', 'TK'].map((initials, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#060A14] bg-[#0A101D] flex items-center justify-center relative z-10 text-[10px] font-bold text-[#3BAFD4] tracking-wider">
                  {initials}
                </div>
              ))}
            </div>
            <div className="w-px h-8 bg-white/10" />
            <p className="text-sm text-[#E2E8F2]/60 max-w-[180px]">
              Trusted by 40+ businesses across 8 industries
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
          style={{ y: yRight }}
          className="relative z-10 lg:pl-10"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
