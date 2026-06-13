import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CAPABILITIES = [
  'Answers leasing inquiries via SMS, web chat, and email within seconds',
  'Qualifies prospects using your criteria (budget, move-in date, pet policy)',
  'Books tours directly into your calendar, 24/7',
  'Fair-housing compliant by default. Escalates edge cases to your team',
  'Sends automated follow-ups to prospects who haven\'t responded',
  'Tracks all inquiry touchpoints in one dashboard',
  'Provides daily summary report of inquiry volume and tour conversion',
];

const FAQ = [
  {
    q: 'Is it fair-housing compliant?',
    a: 'Yes. The system is designed with fair-housing compliance built into every response template. It treats all inquiries identically regardless of protected class information.',
  },
  {
    q: 'How does it hand off to a human?',
    a: 'When a prospect asks something outside its scope or requests human assistance, it flags the conversation and notifies your team immediately. Handoff is seamless.',
  },
  {
    q: 'Does it work with my PMS calendar?',
    a: 'We integrate with most major scheduling tools and PMS calendars. We\'ll confirm compatibility during the audit phase.',
  },
  {
    q: 'What happens after hours?',
    a: 'It never sleeps. Inquiries received at 2am get the same response quality as those at 2pm. Tour slots are only offered during your defined showing hours.',
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

export default function LeasingConcierge() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#3B82F6]/[0.07] blur-[60px] pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-3">Leasing Concierge</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Your leasing team loses leads while sleeping. This fixes that.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[500px] mb-8">
              Average response time on leasing inquiries is over 4 hours. After 1 hour, 60 percent of conversion is gone. The Leasing Concierge answers, qualifies, and books within seconds.
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

      {/* Capabilities */}
      <section className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-3">Capabilities</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-8">
            What it does
          </h2>
          <ul className="flex flex-col gap-3">
            {CAPABILITIES.map((cap, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-text-secondary leading-[1.6]">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-accent/[0.12] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo video placeholder */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-3">Demo</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-6">
            See it in action
          </h2>
          <div className="bg-[#111114] border border-white/[0.08] rounded-[14px] aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border border-white/[0.1] flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <p className="text-[13px] text-text-muted">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + Timeline */}
      <section className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#111114] border border-white/[0.07] rounded-card p-6">
            <div className="accent-label mb-3">Pricing</div>
            <div className="font-mono text-[13px] text-text-secondary mb-1">Build fee</div>
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$5,000 – $10,000</div>
            <div className="text-[12px] text-text-muted mb-4">One-time setup and deployment</div>
            <div className="font-mono text-[13px] text-text-secondary mb-1">Monthly retainer</div>
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$1,500 – $3,000</div>
            <div className="text-[12px] text-text-muted">Monitoring, improvements, support</div>
          </div>
          <div className="bg-[#111114] border border-white/[0.07] rounded-card p-6">
            <div className="accent-label mb-3">Timeline</div>
            <div className="text-[32px] font-bold text-text-primary tracking-[-1px] mb-2">4 – 8 weeks</div>
            <p className="text-[13px] text-text-secondary leading-[1.65]">
              From audit to production deployment. Integration with your PMS and channels is included. No extra setup on your side beyond access credentials.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-2xl mx-auto">
          <div className="accent-label mb-3">FAQ</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-8">
            Questions about the Leasing Concierge
          </h2>
          {FAQ.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">
            Ready to stop losing leads overnight?
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">
            Start with the free audit. We'll show you exactly what you're losing and whether this system fits your operation.
          </p>
          <Link to="/audit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">
            Get your free audit →
          </Link>
        </div>
      </section>
    </>
  );
}
