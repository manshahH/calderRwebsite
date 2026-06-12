import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SCORE_METRICS = [
  { label: 'Inquiry response time', score: 28, color: '#E24B4A' },
  { label: 'Website contact form', score: 55, color: '#EF9F27' },
  { label: 'Email reply completeness', score: 38, color: '#E24B4A' },
  { label: 'Follow-up tracking', score: 70, color: '#639922' },
];

const PROOF_STATS = [
  { num: '48hr', label: 'Report turnaround' },
  { num: '12 pts', label: 'Audit dimensions scored' },
  { num: 'Done-for-you', label: 'No setup needed' },
];

function ScoreBar({ score, color, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = `${score}%`;
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [score, delay]);

  return (
    <div
      ref={barRef}
      style={{
        width: '0%',
        backgroundColor: color,
        height: '4px',
        borderRadius: '2px',
        transition: `width 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    />
  );
}

function ScorePreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-9 bg-[#F7F8FA] border border-black/[0.08] rounded-card p-5 max-w-[560px]"
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-medium text-gray-900">
          Audit preview — Meridian Property Group
        </span>
        <span className="text-[11px] px-2 py-1 rounded-md bg-[#FCEBEB] text-[#993C1D] font-medium">
          Score: 42 / 100
        </span>
      </div>

      {/* Score rows */}
      <div className="flex flex-col gap-[10px]">
        {SCORE_METRICS.map(({ label, score, color }, i) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-[12px] text-gray-500 w-[168px] shrink-0 leading-tight">{label}</span>
            <div className="flex-1 h-[4px] bg-black/[0.06] rounded-full overflow-hidden">
              <ScoreBar score={score} color={color} delay={600 + i * 120} />
            </div>
            <span className="text-[12px] font-medium text-gray-900 w-7 text-right tabular-nums">{score}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } },
};

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-[88px] pb-14 px-6 border-b border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-[620px]"
        >
          {/* Eyebrow tag */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-brand-tint text-brand-tint-text text-[11px] font-semibold px-3 py-1.5 rounded-full">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              For property management companies
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(30px,4.5vw,42px)] font-semibold leading-[1.18] tracking-[-0.6px] text-gray-900 mb-4"
          >
            Your PMC has a responsiveness problem.{' '}
            <span className="text-brand">We prove it.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] text-gray-500 leading-[1.65] max-w-[480px] mb-7"
          >
            CalderR submits real inquiries to your company and scores how — and whether — you respond. Get a full audit report in 48 hours, before your clients lose patience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
            <button
              id="hero-cta-primary"
              onClick={() => handleScroll('#audit-cta')}
              className="px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-[14px] font-medium rounded-btn transition-colors"
            >
              Request a free audit
            </button>
            <button
              id="hero-cta-sample"
              onClick={() => window.location.href = '/report/demo'}
              className="px-5 py-2.5 bg-transparent hover:bg-black/[0.04] text-gray-800 border border-black/[0.15] text-[14px] font-medium rounded-btn transition-colors"
            >
              See a sample report
            </button>
          </motion.div>

          {/* Score preview card */}
          <ScorePreviewCard />

          {/* Proof stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-9 flex gap-8 flex-wrap"
          >
            {PROOF_STATS.map(({ num, label }) => (
              <div key={num}>
                <div className="text-[22px] font-semibold text-gray-900 tracking-[-0.5px]">{num}</div>
                <div className="text-[12px] text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
