import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CAPABILITIES = [
  'Categorizes inbound maintenance requests by urgency (emergency, urgent, routine)',
  'Dispatches to the right vendor from your approved vendor list automatically',
  'Sends status updates to tenants at each stage of the work order',
  'Escalates emergency requests (water, gas, heat) to on-call contacts immediately',
  'Tracks work orders end-to-end and closes them out in your PMS',
  'Provides weekly report on resolution times, vendor performance, and open tickets',
  'Flags repeat issues for portfolio-level pattern analysis',
];

const FAQ = [
  {
    q: 'How does it know which vendor to dispatch?',
    a: 'We build a vendor routing map during the setup phase based on your approved vendor list, trade categories, and geographic coverage. The system dispatches based on issue type, urgency, and vendor availability.',
  },
  {
    q: 'What happens for true emergencies?',
    a: 'Emergency escalation runs on a separate, faster path. Water, gas, heat, and security issues trigger immediate calls or texts to your on-call staff, regardless of time of day.',
  },
  {
    q: 'Does it work with our existing work order system?',
    a: 'Yes. We write back to your PMS work order module. We currently support Buildium, Rent Manager, and AppFolio via export integration.',
  },
  {
    q: 'Will tenants know they\'re talking to an automated system?',
    a: 'We recommend disclosure. The system identifies itself clearly and hands off to your team for any situation where a human is needed.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-[14px] font-medium text-text-primary">{q}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`shrink-0 ml-4 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <p className="pb-5 text-[14px] text-text-secondary leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ACCENT = '#F59E0B';

export default function MaintenanceTriage() {
  return (
    <>
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#F59E0B]/[0.05] blur-[60px] pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Maintenance Triage</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Maintenance coordination is eating your admin team alive. This stops that.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[500px] mb-8">
              Inbound requests categorized, dispatched, tracked, and closed — without your coordinator touching it. 30 to 50 percent reduction in coordinator hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/audit" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">
                Talk to us about this
              </Link>
              <Link to="/build" className="px-6 py-3 border border-white/[0.12] hover:border-white/[0.2] text-text-secondary hover:text-text-primary text-[14px] font-medium rounded-btn transition-colors">
                ← All products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Capabilities</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-8">What it does</h2>
          <ul className="flex flex-col gap-3">
            {CAPABILITIES.map((cap, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-text-secondary leading-[1.6]">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}20` }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" aria-hidden="true" stroke={ACCENT}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Demo</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-6">See it in action</h2>
          <div className="bg-[#111114] border border-white/[0.08] rounded-[14px] aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-white/[0.1] flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <p className="text-[13px] text-text-muted">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#111114] border border-white/[0.07] rounded-card p-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Pricing</div>
            <div className="font-mono text-[13px] text-text-secondary mb-1">Build fee</div>
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$7,000 – $15,000</div>
            <div className="text-[12px] text-text-muted mb-4">One-time setup and deployment</div>
            <div className="font-mono text-[13px] text-text-secondary mb-1">Monthly retainer</div>
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$2,500 – $5,000</div>
            <div className="text-[12px] text-text-muted">Monitoring, improvements, support</div>
          </div>
          <div className="bg-[#111114] border border-white/[0.07] rounded-card p-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Timeline</div>
            <div className="text-[32px] font-bold text-text-primary tracking-[-1px] mb-2">4 – 8 weeks</div>
            <p className="text-[13px] text-text-secondary leading-[1.65]">
              Deployment includes vendor routing configuration, PMS integration, and tenant-facing communication setup.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>FAQ</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-8">Questions about Maintenance Triage</h2>
          {FAQ.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">Ready to get coordinator hours back?</h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">Start with the free audit. We'll identify your highest-leverage maintenance automation opportunities.</p>
          <Link to="/audit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">
            Get your free audit →
          </Link>
        </div>
      </section>
    </>
  );
}
