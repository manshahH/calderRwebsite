import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const PLANS = [
  {
    tier: 'One-time',
    price: '$149',
    priceSuffix: '',
    desc: 'Single responsiveness audit. Ideal for a first look.',
    features: ['1 full audit cycle', '12-dimension report', 'Delivered in 48hr'],
    cta: 'Get started',
    ctaHref: '#audit-cta',
    featured: false,
  },
  {
    tier: 'Monthly',
    price: '$299',
    priceSuffix: '/ mo',
    desc: 'Ongoing tracking with monthly scorecards and alerts.',
    features: ['4 audits per month', 'Trend dashboard', 'Alert on score drop', 'Priority support'],
    cta: 'Get started',
    ctaHref: '#audit-cta',
    featured: true,
    badge: 'Most popular',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    desc: 'Multi-location PMCs, franchise groups, and HOA managers.',
    features: ['Unlimited locations', 'White-label reports', 'API access', 'Dedicated manager'],
    cta: 'Talk to us',
    ctaHref: 'https://wa.link/lrm669',
    featured: false,
  },
];

export default function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleCta = (href) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" ref={ref} className="px-6 py-14 border-b border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-[11px] font-semibold text-brand-tint-text uppercase tracking-[0.6px] mb-2.5">
            Pricing
          </div>
          <h2 className="text-[24px] font-semibold text-gray-900 tracking-[-0.3px] mb-2.5">
            Simple, flat-rate pricing
          </h2>
          <p className="text-[14px] text-gray-500 max-w-[420px] leading-[1.6]">
            No retainers, no hidden fees. Pay per audit or subscribe for ongoing monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {PLANS.map(({ tier, price, priceSuffix, desc, features, cta, ctaHref, featured, badge }, i) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className={`relative flex flex-col rounded-card p-[22px] ${
                featured
                  ? 'border-2 border-brand bg-white shadow-[0_4px_24px_rgba(29,158,117,0.12)]'
                  : 'border border-black/[0.08] bg-white card-shadow'
              }`}
            >
              {badge && (
                <span className="inline-block mb-2 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-tint text-brand-tint-text">
                  {badge}
                </span>
              )}
              <div className="text-[12px] font-semibold text-gray-400 mb-1.5">{tier}</div>
              <div className="mb-2">
                <span className="text-[26px] font-semibold text-gray-900 tracking-[-0.5px]">{price}</span>
                {priceSuffix && (
                  <span className="text-[13px] text-gray-400 font-normal ml-1">{priceSuffix}</span>
                )}
              </div>
              <p className="text-[12px] text-gray-500 leading-[1.55] mb-4">{desc}</p>
              <ul className="flex flex-col gap-1.5 mb-6 flex-1">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-[12px] text-gray-500">
                    <span className="mt-0.5 text-brand shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                id={`pricing-cta-${tier.toLowerCase()}`}
                onClick={() => handleCta(ctaHref)}
                className={`w-full py-2.5 rounded-btn text-[13px] font-semibold transition-colors ${
                  featured
                    ? 'bg-brand hover:bg-brand-dark text-white'
                    : 'border border-black/[0.14] hover:bg-gray-50 text-gray-800'
                }`}
              >
                {cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
