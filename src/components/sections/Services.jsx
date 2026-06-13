import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'leasing',
    num: '01',
    title: 'Leasing Concierge',
    desc: 'Inbound leasing inquiries answered, qualified, and booked into tours within seconds. SMS, web chat, email. 24/7.',
    price: 'From $5,000 build + $1,500/mo',
    href: '/build/leasing-concierge',
    accent: '#3B82F6',
  },
  {
    id: 'maintenance',
    num: '02',
    title: 'Maintenance Triage',
    desc: 'Tenant requests categorized, dispatched to the right vendor, and tracked end-to-end. Emergency escalation built in.',
    price: 'From $7,000 build + $2,500/mo',
    href: '/build/maintenance-triage',
    accent: '#F59E0B',
  },
  {
    id: 'reporting',
    num: '03',
    title: 'Owner Reporting',
    desc: 'Monthly owner statements with narrative commentary, generated and delivered automatically. Customizable per owner.',
    price: 'From $4,000 build + $1,000/mo',
    href: '/build/owner-reporting',
    accent: '#A78BFA',
  },
  {
    id: 'invoices',
    num: '04',
    title: 'Vendor Invoice Processing',
    desc: 'Invoices extracted from email, validated against work orders, routed for approval, exported to your PMS.',
    price: 'From $3,500 build + $800/mo',
    href: '/build/vendor-invoices',
    accent: '#34D399',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="what-we-build" ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="accent-label mb-3">What we build</div>
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.8px] mb-3">
            Four production-ready systems.
          </h2>
          <p className="text-[15px] text-text-secondary max-w-[480px] leading-[1.6]">
            Each one ships in 4 to 8 weeks. Integrates with your PMS. Operated and improved on a monthly retainer.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRODUCTS.map(({ id, num, title, desc, price, href, accent }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-[#111114] border border-white/[0.07] rounded-card p-6 card-hover cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px]"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-mono text-[11px] font-semibold tracking-[0.08em]"
                  style={{ color: accent }}
                >
                  {num}
                </span>
                <Link
                  to={href}
                  className="text-[11px] text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
                >
                  Learn more
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              <h3 className="text-[17px] font-semibold text-text-primary mb-2 tracking-[-0.3px]">
                {title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-[1.6] mb-5">
                {desc}
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[12px] font-mono text-text-muted">{price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            to="/build"
            className="inline-flex items-center gap-2 text-[13px] text-text-secondary hover:text-text-primary font-medium transition-colors"
          >
            See full product details
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
