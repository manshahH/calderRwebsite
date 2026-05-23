import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import MagneticButton from '../ui/MagneticButton';
import ScrambleText from '../ui/ScrambleText';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const links = ['Services', 'Case Studies', 'Team', 'Pricing', 'FAQ', 'Contact'];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        isScrolled 
          ? "bg-[rgba(6,10,20,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)] py-4" 
          : "bg-transparent py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-[#3BAFD4]/30 flex items-center justify-center bg-[#060A14]/50">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="8" x2="50" y2="28" stroke="#3BAFD4" strokeWidth="5" strokeLinecap="round"/>
              <line x1="20" y1="30" x2="80" y2="30" stroke="#3BAFD4" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="50" cy="30" r="5" fill="#3BAFD4"/>
              <line x1="28" y1="30" x2="28" y2="58" stroke="#E2E8F2" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="28" cy="68" r="10" fill="#E2E8F2"/>
              <line x1="72" y1="30" x2="72" y2="50" stroke="#E2E8F2" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="72" cy="58" r="8" fill="#3BAFD4"/>
            </svg>
          </div>
          <span className="font-['Syne'] font-bold text-xl tracking-tight text-[#E2E8F2]">
            CalderR<span className="text-[#3BAFD4]">.</span>
          </span>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              key={item} 
              className="text-[#E2E8F2]/70 hover:text-white font-medium text-sm transition-colors py-2 px-1"
            >
              <ScrambleText text={item} />
            </a>
          ))}
          <Link 
            to="/audit"
            className="text-[#E2E8F2]/70 hover:text-white font-medium text-sm transition-colors py-2 px-1"
          >
            <ScrambleText text="Audit" />
          </Link>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton variant="primary" href="#contact">
            Book a Free Call &rarr;
          </MagneticButton>
          
          <div className="hidden md:flex flex-row items-center gap-2">
            <motion.div 
              className="w-[6px] h-[6px] rounded-full bg-[#28C840]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#28C840] tracking-wide">
              2 spots open
            </span>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <AnimatePresence>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="flex flex-col justify-center items-center w-8 h-8 relative z-[110] outline-none">
                  <motion.span 
                    animate={{ rotate: mobileOpen ? 45 : 0, top: mobileOpen ? "50%" : "30%", y: mobileOpen ? "-50%" : 0 }} 
                    className="w-6 h-0.5 bg-[#E2E8F2] block absolute origin-center transition-all" 
                  />
                  <motion.span 
                    animate={{ opacity: mobileOpen ? 0 : 1 }} 
                    className="w-6 h-0.5 bg-[#E2E8F2] block absolute top-1/2 -translate-y-1/2 transition-opacity" 
                  />
                  <motion.span 
                    animate={{ rotate: mobileOpen ? -45 : 0, top: mobileOpen ? "50%" : "70%", y: mobileOpen ? "-50%" : 0 }} 
                    className="w-6 h-0.5 bg-[#E2E8F2] block absolute origin-center transition-all" 
                  />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-[#060A14] border-l border-[rgba(255,255,255,0.07)] sm:max-w-xs flex flex-col p-8 pt-20">
                <motion.div 
                  initial="closed" 
                  animate={mobileOpen ? "open" : "closed"}
                  exit="closed"
                  variants={{
                    open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                  className="flex flex-col gap-6"
                >
                  {links.map((item) => (
                    <motion.a 
                      variants={{
                        open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
                        closed: { opacity: 0, x: 20 }
                      }}
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link 
                      to="/audit"
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-medium text-[#E2E8F2] hover:text-[#3BAFD4] transition-colors inline-block py-2"
                    >
                      <ScrambleText text="Audit" />
                    </Link>
                  </motion.div> key={item} 
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-medium text-[#E2E8F2] hover:text-[#3BAFD4] transition-colors inline-block py-2"
                    >
                      <ScrambleText text={item} />
                    </motion.a>
                  ))}
                </motion.div>
              </SheetContent>
            </Sheet>
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
