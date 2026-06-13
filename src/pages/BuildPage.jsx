import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    num: '01',
    title: 'Leasing Concierge',
    problem: 'Average response time on leasing inquiries is over 4 hours. After 1 hour, conversion drops by 60 percent.',
    what: 'Answers, qualifies, and books tours across SMS, web chat, and email. 24/7. Fair-housing compliant. Hands off cleanly when humans are needed.',
    roi: '15 to 22 hours per leasing agent per week, plus higher tour booking rates.',
    price: '$5,000 to $10,000 build / $1,500 to $3,000 per month retainer',
    href: '/build/leasing-concierge',
    accent: '#3B82F6',
  },
  {
    num: '02',
    title: 'Maintenance Triage',
    problem: 'Maintenance coordination eats hours of admin time and resolution times stretch for days.',
    what: 'Categorizes inbound requests by urgency, dispatches the right vendor, tracks status, updates tenant, closes out in the PMS.',
    roi: '30 to 50 percent reduction in coordinator hours, 40 percent faster resolution.',
    price: '$7,000 to $15,000 build / $2,500 to $5,000 per month retainer',
    href: '/build/maintenance-triage',
    accent: '#F59E0B',
  },
  {
    num: '03',
    title: 'Owner Monthly Reporting',
    problem: 'Owner reports either go out late, lack narrative, or both. Owners churn.',
    what: 'Generates customized monthly reports per owner. Financial summary, operational summary, narrative commentary grounded in your data.',
    roi: '8 to 15 hours saved per month, plus measurable owner retention improvement.',
    price: '$4,000 to $8,000 build / $1,000 to $2,500 per month retainer',
    href: '/build/owner-reporting',
    accent: '#A78BFA',
  },
  {
    num: '04',
    title: 'Vendor Invoice Processing',
    problem: 'Vendor invoices arrive in 50 formats. Manual entry burns 6 to 12 hours per week.',
    what: 'Extracts invoice data from email, validates against work orders, routes for approval, exports to your PMS.',
    roi: '5 to 10 hours saved per week, plus fewer entry errors.',
    price: '$3,500 to $7,000 build / $800 to $2,000 per month retainer',
    href: '/build/vendor-invoices',
    accent: '#34D399',
  },
];

const PMS = [
  { name: 'Buildium',    detail: 'Full API integration' },
  { name: 'Rent Manager',detail: 'Full API integration' },
  { name: 'AppFolio',   detail: 'Email + export integration' },
  { name: 'Yardi',      detail: 'Voyager and Breeze, case-by-case' },
];

export default function BuildPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">What we build</div>
            <h1 className="font-display text-[clamp(28px,5vw,52px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Four systems. Built for property management ops.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[480px]">
              Each one ships in 4 to 8 weeks. Integrates with your PMS. Operated and improved on a monthly retainer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product cards */}
      <section ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {PRODUCTS.map(({ num, title, problem, what, roi, price, href, accent }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="bg-[#111114] border border-white/[0.07] rounded-card p-7 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-7 right-7 h-[1px]"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
              />

              <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                <div>
                  <span className="font-mono text-[11px] font-semibold tracking-[0.08em] mb-2 block" style={{ color: accent }}>{num}</span>
                  <h2 className="text-[20px] font-semibold text-text-primary tracking-[-0.4px]">{title}</h2>
                </div>
                <Link
                  to={href}
                  className="text-[13px] font-medium text-accent hover:text-blue-300 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[13px]">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-2">The problem</div>
                  <p className="text-text-secondary leading-[1.6]">{problem}</p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-2">What it does</div>
                  <p className="text-text-secondary leading-[1.6]">{what}</p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-muted mb-2">Typical ROI</div>
                  <p className="text-text-secondary leading-[1.6] mb-3">{roi}</p>
                  <div className="font-mono text-[11px] text-text-muted">{price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PMS compatibility */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="accent-label mb-3">Integrations</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-3">
              Works with your PMS
            </h2>
            <p className="text-[15px] text-text-secondary max-w-[520px] leading-[1.6]">
              We integrate at depth with Buildium and Rent Manager via their APIs. We work around AppFolio's API restrictions using exports and email integration. We handle Yardi Voyager and Breeze case-by-case. If you're on something else, we'll tell you honestly whether we can make it work.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PMS.map(({ name, detail }) => (
              <div key={name} className="bg-[#111114] border border-white/[0.07] rounded-card p-5">
                <div className="text-[14px] font-semibold text-text-primary mb-1">{name}</div>
                <div className="text-[11px] text-text-muted">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">
            Start with an audit
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">
            The audit will tell us which of these systems would help your operation most.
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
        </div>
      </section>
    </>
  );
}
