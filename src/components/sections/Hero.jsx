import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Flow diagram node colors
const FLOW_NODES = [
  { label: 'SMS inquiry',    color: '#3B82F6' },
  { label: 'Email inquiry',  color: '#3B82F6' },
  { label: 'Web chat',       color: '#3B82F6' },
];

const FLOW_OUTPUTS = [
  { label: 'Tour booked',      color: '#22C55E' },
  { label: 'Vendor dispatched',color: '#F59E0B' },
  { label: 'Owner notified',   color: '#A78BFA' },
];

const PROOF_STATS = [
  { num: '4.2 hr',  label: 'Industry avg leasing response time', sub: 'Stat 1' },
  { num: '60%',     label: 'Lead drop-off after 1 hr no reply',  sub: 'Stat 2' },
  { num: '22+ hr',  label: 'Weekly leasing triage time per agent',sub: 'Stat 3' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

function FlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative w-full max-w-[420px] flex-shrink-0"
    >
      {/* Card container */}
      <div className="bg-[#111114] border border-white/[0.08] rounded-[14px] p-6 font-mono text-[11px]">
        {/* Header label */}
        <div className="text-text-muted mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.06em]">
          Inquiry flow — 24/7 automation
        </div>

        <div className="flex items-center gap-3">
          {/* Inputs */}
          <div className="flex flex-col gap-2.5 flex-1">
            {FLOW_NODES.map(({ label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-md px-3 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-text-secondary">{label}</span>
              </div>
            ))}
          </div>

          {/* Center agent */}
          <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
            {/* Lines in */}
            <div className="flex flex-col items-center gap-2.5">
              {[0,1,2].map(i => (
                <div key={i} className="h-[1px] w-8 bg-gradient-to-r from-white/[0.15] to-accent/50" />
              ))}
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/[0.12] border border-accent/30 flex items-center justify-center my-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div className="text-[9px] text-accent font-semibold tracking-wide">AGENT</div>
            {/* Lines out */}
            <div className="flex flex-col items-center gap-2.5">
              {[0,1,2].map(i => (
                <div key={i} className="h-[1px] w-8 bg-gradient-to-r from-accent/50 to-white/[0.15]" />
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="flex flex-col gap-2.5 flex-1">
            {FLOW_OUTPUTS.map(({ label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-md px-3 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"/>
            </span>
            <span className="text-[10px] text-text-muted font-sans">Live</span>
          </div>
          <span className="text-[10px] text-text-muted font-sans">Response in &lt;30 sec</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-[100px] pb-20 px-6 border-b border-white/[0.06] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.05] blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-14">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-[560px]"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 bg-accent/[0.10] text-accent text-[11px] font-semibold px-3 py-1.5 rounded-full border border-accent/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                For property management companies
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.12] tracking-[-1.5px] text-text-primary mb-5"
            >
              AI automation built for property management operations.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] text-text-secondary leading-[1.65] max-w-[480px] mb-8"
            >
              We build leasing concierges, maintenance triage agents, and owner reporting systems for residential operators managing 200 to 5,000 units. Less manual work. Faster response times. Happier owners.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
              <Link
                to="/audit"
                id="hero-cta-primary"
                className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors"
              >
                Get your free leasing audit
              </Link>
              <Link
                to="/build"
                id="hero-cta-build"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-text-secondary hover:text-text-primary text-[14px] font-medium transition-colors"
              >
                See what we build
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

            {/* Proof stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex gap-8 flex-wrap border-t border-white/[0.06] pt-8"
            >
              {PROOF_STATS.map(({ num, label }) => (
                <div key={num}>
                  <div className="font-mono text-[24px] font-semibold text-text-primary tracking-[-0.5px]">
                    {num}
                  </div>
                  <div className="text-[12px] text-text-muted mt-0.5 leading-[1.4] max-w-[140px]">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: flow diagram */}
          <div className="hidden lg:flex justify-end flex-1">
            <FlowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
