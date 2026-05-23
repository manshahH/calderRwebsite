import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import ThreeBackground from './components/ui/ThreeBackground';
import CustomCursor from './components/ui/CustomCursor';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import LogoMarquee from './components/sections/LogoMarquee';
import Philosophy from './components/sections/Philosophy';
import Team from './components/sections/Team';
import Services from './components/sections/Services';
import CTABanner from './components/sections/CTABanner';
import Industries from './components/sections/Industries';
import CaseStudies from './components/sections/CaseStudies';
import ROICalculator from './components/sections/ROICalculator';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AuditComingSoon from './components/sections/AuditComingSoon';

function App() {
  const [showWipe, setShowWipe] = useState(true);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage showWipe={showWipe} setShowWipe={setShowWipe} />} />
      <Route path="/audit" element={<AuditComingSoon />} />
    </Routes>
  );
}

function HomePage({ showWipe, setShowWipe }) {
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
          <Hero />
          <Stats />
          <ErrorBoundary>
            <LogoMarquee />
          </ErrorBoundary>
          <Philosophy />
          <Team />
          <Services />
          <CTABanner title="Ready to See What AI Can Do?" subtitle="Book a free 30-minute strategy call. No pressure, no pitch. Just clarity." ctaText="Book Your Free Call →" ctaHref="#contact" />
          <Industries />
          <CaseStudies />
          <ROICalculator />
          <Process />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
          <CTABanner title="Stop Losing Time to Manual Tasks." subtitle="Start winning with AI. Book your free strategy audit today." ctaText="Get Your Free AI Audit →" ctaHref="#contact" darkTheme={true} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
