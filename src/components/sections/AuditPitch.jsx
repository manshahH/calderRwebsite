import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AuditPitch() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="accent-label mb-3">Free audit</div>
            <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.8px] mb-4">
              Start with a free audit.
            </h2>
            <p className="text-[15px] text-text-secondary leading-[1.65] mb-4">
              We test your leasing operation against 60 industry benchmarks. Response time, response quality, channel coverage, listing presence, tenant self-serve. You get a branded PDF report within 5 business days.
            </p>
            <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">
              Most operators find issues costing them tens of thousands per year in missed leads. No pitch attached.
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors"
            >
              Get your audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>

          {/* Right: report mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-accent/[0.06] blur-[50px] rounded-2xl pointer-events-none" />

            {/* Mock PDF report card */}
            <div className="relative bg-[#111114] border border-white/[0.1] rounded-[14px] p-6 font-mono text-[11px]">
              {/* Cover */}
              <div className="mb-5 pb-5 border-b border-white/[0.06]">
                <div className="text-[10px] font-semibold text-accent uppercase tracking-[0.08em] mb-2">
                  Leasing Performance Audit
                </div>
                <div className="text-[15px] font-sans font-semibold text-text-primary">
                  Sample Property Group
                </div>
                <div className="text-[11px] text-text-muted mt-1">
                  Audited June 2026 · 60 benchmarks
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[12px] text-text-secondary font-sans">Overall score</span>
                <div className="flex items-center gap-2">
                  <span className="text-[28px] font-bold text-[#EF4444] leading-none">42</span>
                  <span className="text-[11px] text-text-muted">/100</span>
                </div>
              </div>

              {/* Score bars */}
              {[
                { label: 'Response time',    score: 28, color: '#EF4444' },
                { label: 'Channel coverage', score: 55, color: '#F59E0B' },
                { label: 'Reply quality',    score: 38, color: '#EF4444' },
                { label: 'Follow-up',        score: 71, color: '#22C55E' },
              ].map(({ label, score, color }) => (
                <div key={label} className="flex items-center gap-3 mb-2.5">
                  <span className="text-[11px] text-text-muted w-[120px] shrink-0 font-sans">{label}</span>
                  <div className="flex-1 h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${score}%`, background: color }}
                    />
                  </div>
                  <span className="text-[11px] w-6 text-right font-semibold" style={{ color }}>{score}</span>
                </div>
              ))}

              {/* CTA label */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <Link
                  to="/audit"
                  className="text-[11px] font-semibold text-accent hover:text-blue-300 transition-colors font-sans"
                >
                  View sample report →
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
