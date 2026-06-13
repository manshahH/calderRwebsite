import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="font-display text-[clamp(26px,4vw,44px)] font-bold text-text-primary tracking-[-1px] mb-4 leading-[1.15]">
            Want to know how your leasing operation actually performs?
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8">
            Get your free audit. We'll send your branded report within 5 business days.
          </p>

          <Link
            to="/audit"
            id="final-cta-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white text-[15px] font-semibold rounded-btn transition-colors"
          >
            Get my audit
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <p className="mt-4 text-[12px] text-text-muted">
            No pitch attached. No automatic sales call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
