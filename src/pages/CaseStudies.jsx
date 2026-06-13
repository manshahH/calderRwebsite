import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PLACEHOLDER_CARDS = Array.from({ length: 6 }, (_, i) => i);

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">Case studies</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Case studies coming soon.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[460px] mx-auto mb-8">
              We're early. We're building case studies as we deliver pilots with our first clients. Want to be one of them?
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors"
            >
              Get your free audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Placeholder card grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLACEHOLDER_CARDS.map((i) => (
              <div
                key={i}
                className="bg-[#111114] border border-white/[0.06] rounded-card p-6 flex flex-col gap-3"
              >
                {/* Coming soon badge */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-2 bg-white/[0.05] rounded-full" />
                  <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.06em] px-2 py-0.5 border border-white/[0.08] rounded-full">
                    Coming soon
                  </span>
                </div>
                {/* Placeholder lines */}
                <div className="space-y-2 mt-2">
                  <div className="h-3 bg-white/[0.04] rounded w-4/5" />
                  <div className="h-3 bg-white/[0.04] rounded w-3/5" />
                </div>
                <div className="space-y-1.5 mt-1">
                  <div className="h-2 bg-white/[0.03] rounded w-full" />
                  <div className="h-2 bg-white/[0.03] rounded w-5/6" />
                </div>
                {/* Metric placeholder */}
                <div className="mt-2 pt-4 border-t border-white/[0.04]">
                  <div className="h-6 bg-white/[0.04] rounded w-2/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
