import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from '../ui/ThreeBackground';
import CustomCursor from '../ui/CustomCursor';
import ErrorBoundary from '../ui/ErrorBoundary';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default function AuditComingSoon() {
  const [showWipe, setShowWipe] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {showWipe && (
          <motion.div
            key="wipe"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            onAnimationComplete={() => setShowWipe(false)}
            className="fixed inset-0 z-[9999] bg-[#060A14] origin-bottom pointer-events-none"
          />
        )}
      </AnimatePresence>
      <div className="grain min-h-screen bg-[#060A14] overflow-x-hidden relative">
        <ErrorBoundary>
          <ThreeBackground />
        </ErrorBoundary>
        <CustomCursor />
        <div className="relative z-10 flex flex-col">
          <Navbar />
          
          {/* Coming Soon Content */}
          <div className="flex-1 flex items-center justify-center min-h-screen px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3BAFD4]/30 bg-[#3BAFD4]/5 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#3BAFD4] animate-pulse" />
                <span className="text-sm font-medium text-[#3BAFD4]">Coming Soon</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-['Roboto_Condensed'] font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-[#E2E8F2]"
              >
                AI Audit Tool
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BAFD4] to-[#D4A853]">
                  Launching Soon
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-[#6B7A99] mb-12 leading-relaxed"
              >
                We're building a comprehensive AI automation audit tool to help you identify inefficiencies and unlock hidden opportunities in your business processes.
              </motion.p>

              {/* Features Preview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { title: 'Instant Analysis', description: 'Get insights in minutes, not weeks' },
                  { title: 'Smart Recommendations', description: 'Tailored automation opportunities' },
                  { title: 'ROI Projection', description: 'See your potential savings upfront' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="p-6 rounded-xl bg-[#0C1220] border border-[#3BAFD4]/10 hover:border-[#3BAFD4]/30 transition-all"
                  >
                    <h3 className="font-semibold text-[#E2E8F2] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#6B7A99]">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={handleContactClick}
                  className="px-6 py-3 rounded-lg bg-[#3BAFD4] text-white hover:bg-[#2a94b8] transition-all font-medium flex items-center gap-2"
                >
                  Notify Me When Live →
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 rounded-lg border border-[#3BAFD4]/30 text-[#3BAFD4] hover:bg-[#3BAFD4]/10 transition-all font-medium flex items-center gap-2"
                >
                  Back to Home
                  <ArrowRight size={18} />
                </button>
              </motion.div>

              {/* Countdown or Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-16 pt-12 border-t border-[#3BAFD4]/10"
              >
                <p className="text-sm text-[#6B7A99] mb-4">Early access available for CalderR clients</p>
                <p className="text-[#3BAFD4] font-semibold">
                  Schedule a call to get early access
                </p>
              </motion.div>
            </motion.div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
