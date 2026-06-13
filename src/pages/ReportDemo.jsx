import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';

const DIMENSIONS = [
  { label: 'Inquiry response time', score: 28, color: '#EF4444' },
  { label: 'Website contact form', score: 55, color: '#F59E0B' },
  { label: 'Email reply completeness', score: 38, color: '#EF4444' },
  { label: 'Follow-up tracking', score: 70, color: '#22C55E' },
  { label: 'Phone inquiry handling', score: 72, color: '#22C55E' },
  { label: 'Auto-acknowledgement', score: 25, color: '#EF4444' },
  { label: 'After-hours coverage', score: 18, color: '#EF4444' },
  { label: 'Response personalisation', score: 44, color: '#F59E0B' },
];

const FINDINGS = [
  { color: '#EF4444', text: 'Contact form inquiry received no reply after 72 hours' },
  { color: '#EF4444', text: 'No auto-acknowledgement sent — inbox goes completely silent' },
  { color: '#EF4444', text: 'After-hours inquiries have zero coverage path' },
  { color: '#F59E0B', text: 'Email reply omitted 3 of 5 questions asked in the inquiry' },
  { color: '#F59E0B', text: 'No acknowledgement sent within 24-hour window' },
  { color: '#F59E0B', text: 'Response felt templated — no personalisation to inquiry content' },
  { color: '#22C55E', text: 'Phone inquiry answered promptly by a knowledgeable agent — good' },
  { color: '#22C55E', text: 'Follow-up tracking is in place for phone channel' },
];

function ScoreGauge({ score }) {
  const color = score >= 70 ? '#22C55E' : score >= 41 ? '#F59E0B' : '#EF4444';
  const label = score >= 70 ? 'Good' : score >= 41 ? 'Needs improvement' : 'Poor';

  return (
    <div className="flex flex-col items-center">
      <div
        className="text-[72px] font-bold leading-none tracking-[-2px]"
        style={{ color }}
      >
        {score}
      </div>
      <div className="text-[16px] text-text-secondary mt-1">out of 100</div>
      <span
        className="mt-3 text-[12px] font-semibold px-3 py-1 rounded-full"
        style={{ color, backgroundColor: color + '18' }}
      >
        {label}
      </span>
    </div>
  );
}

function AnimatedBar({ score, color, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) barRef.current.style.width = `${score}%`;
    }, delay);
    return () => clearTimeout(timer);
  }, [score, delay]);

  return (
    <div className="flex-1 h-[5px] bg-white/[0.08] rounded-full overflow-hidden">
      <div
        ref={barRef}
        style={{
          width: '0%',
          height: '100%',
          backgroundColor: color,
          borderRadius: 9999,
          transition: `width 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}

export default function ReportDemo() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const navigate = useNavigate();

  const overallScore = 42;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-text-primary">
      <Navbar />

      <main className="pt-[72px]">
        {/* Demo banner */}
        <div className="bg-brand-tint border-b border-brand/20 px-6 py-2.5 text-center">
          <span className="text-[12px] font-medium text-brand-tint-text">
            This is a sample report. Real audits are delivered within 48 hours.{' '}
            <button
              onClick={() => {
                navigate('/audit');
              }}
              className="underline font-semibold hover:no-underline text-accent"
            >
              Get your free audit →
            </button>
          </span>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Report header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="text-[11px] font-semibold text-brand-tint-text uppercase tracking-[0.6px] mb-3">
              Audit Report · Sample
            </div>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <h1 className="text-[26px] font-semibold text-text-primary tracking-[-0.4px]">
                  Meridian Property Group
                </h1>
                <p className="text-[13px] text-text-secondary mt-1">
                  Audited June 10, 2026 · 12 dimensions · meridianpmc.com
                </p>
              </div>
              <ScoreGauge score={overallScore} />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/[0.08] mb-10" />

          {/* Dimension breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-10"
          >
            <h2 className="text-[16px] font-semibold text-text-primary mb-5">Score breakdown</h2>
            <div className="flex flex-col gap-3.5">
              {DIMENSIONS.map(({ label, score, color }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[12px] text-text-secondary w-[200px] shrink-0 leading-tight">{label}</span>
                  <AnimatedBar score={score} color={color} delay={300 + i * 80} />
                  <span
                    className="text-[11px] font-semibold w-8 text-right tabular-nums shrink-0"
                    style={{ color }}
                  >
                    {score}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/[0.08] mb-10" />

          {/* Findings */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-[16px] font-semibold text-text-primary mb-5">Findings</h2>
            <div className="flex flex-col gap-3">
              {FINDINGS.map(({ color, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="shrink-0 rounded-full mt-1.5"
                    style={{ width: 7, height: 7, backgroundColor: color }}
                  />
                  <span className="text-[13px] text-text-secondary leading-[1.55]">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-[#111114] border border-white/[0.07] rounded-card p-8 text-center"
          >
            <h3 className="text-[20px] font-semibold text-text-primary mb-2">
              Get the full report for your PMC
            </h3>
            <p className="text-[14px] text-text-secondary leading-[1.6] max-w-[380px] mx-auto mb-6">
              This is Meridian's sample. Your report will contain your company's real inquiry data, scored across all 12 dimensions.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => navigate('/audit')}
                className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-[14px] font-medium rounded-btn transition-colors"
              >
                Get your free audit
              </button>
              <button
                onClick={() => navigate('/build')}
                className="px-6 py-2.5 border border-white/[0.15] hover:bg-white/[0.04] text-text-primary text-[14px] font-medium rounded-btn transition-colors"
              >
                Explore what we build →
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
