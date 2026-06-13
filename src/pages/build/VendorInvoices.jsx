import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CAPABILITIES = [
  'Extracts invoice data from email (PDF, image, and structured formats)',
  'Matches invoices against open work orders in your PMS automatically',
  'Flags discrepancies for human review before approval',
  'Routes invoices through your approval workflow based on amount thresholds',
  'Exports approved invoices directly to your PMS accounts payable module',
  'Tracks vendor payment history and flags late invoices',
  'Generates weekly AP summary for your accounting team',
];

const FAQ = [
  {
    q: 'What invoice formats does it handle?',
    a: 'PDF, JPG, PNG, and most structured email formats. We also handle invoices sent directly to a dedicated inbox as attachments.',
  },
  {
    q: 'What happens when an invoice doesn\'t match a work order?',
    a: 'It flags the discrepancy and routes it to your team for manual review. Nothing gets approved automatically if the match fails.',
  },
  {
    q: 'Does it integrate with QuickBooks or other accounting software?',
    a: 'We export to your PMS AP module first. If you need a direct QuickBooks or accounting system connection, that\'s a custom integration we\'ll scope separately.',
  },
  {
    q: 'Who approves invoices?',
    a: 'Your team, through your existing workflow. We route the invoice to the right approver based on amount, vendor, and property. Approval lives with your people.',
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

const ACCENT = '#34D399';

export default function VendorInvoices() {
  return (
    <>
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#34D399]/[0.05] blur-[60px] pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Vendor Invoice Processing</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Vendor invoices in 50 formats burn 6 to 12 hours a week. Stop.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[500px] mb-8">
              Extracts, validates, routes, and exports invoice data without manual entry. 5 to 10 hours saved per week, plus fewer entry errors.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/audit" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">Talk to us about this</Link>
              <Link to="/build" className="px-6 py-3 border border-white/[0.12] hover:border-white/[0.2] text-text-secondary hover:text-text-primary text-[14px] font-medium rounded-btn transition-colors">← All products</Link>
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
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$3,500 – $7,000</div>
            <div className="text-[12px] text-text-muted mb-4">One-time setup and deployment</div>
            <div className="font-mono text-[13px] text-text-secondary mb-1">Monthly retainer</div>
            <div className="text-[24px] font-bold text-text-primary tracking-[-0.5px] mb-1">$800 – $2,000</div>
            <div className="text-[12px] text-text-muted">Monitoring, improvements, support</div>
          </div>
          <div className="bg-[#111114] border border-white/[0.07] rounded-card p-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>Timeline</div>
            <div className="text-[32px] font-bold text-text-primary tracking-[-1px] mb-2">3 – 5 weeks</div>
            <p className="text-[13px] text-text-secondary leading-[1.65]">Includes email inbox configuration, PMS AP integration, and approval workflow setup.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>FAQ</div>
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-8">Questions about Vendor Invoice Processing</h2>
          {FAQ.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">Ready to eliminate manual invoice entry?</h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">Start with the free audit. We'll look at your current AP workflow and tell you exactly what's automatable.</p>
          <Link to="/audit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">Get your free audit →</Link>
        </div>
      </section>
    </>
  );
}
