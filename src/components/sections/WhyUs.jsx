import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const PMS_SYSTEMS = [
  { name: 'AppFolio',    note: 'Email + export integration' },
  { name: 'Yardi',       note: 'Voyager + Breeze' },
  { name: 'Buildium',    note: 'Full API' },
  { name: 'Rent Manager',note: 'Full API' },
];

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="accent-label mb-3">Why us</div>
            <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.8px] mb-5">
              We build for operators, not investors.
            </h2>
            <p className="text-[15px] text-text-secondary leading-[1.65] mb-4">
              Most AI vendors selling into property management have never managed a unit. We build systems based on operational reality. Every automation we ship is measured by hours saved, lead conversion, and owner retention. Not by AI buzzwords.
            </p>
            <p className="text-[15px] text-text-secondary leading-[1.65]">
              If your PMS is AppFolio, Yardi, Buildium, or Rent Manager, we know how to work with it.
            </p>
          </motion.div>

          {/* Right: PMS compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.06em] mb-5">
              Compatible with
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PMS_SYSTEMS.map(({ name, note }) => (
                <div
                  key={name}
                  className="bg-[#111114] border border-white/[0.07] rounded-card px-4 py-4"
                >
                  <div className="text-[14px] font-semibold text-text-primary mb-1">{name}</div>
                  <div className="text-[11px] text-text-muted">{note}</div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-text-muted mt-4 leading-[1.6]">
              On something else? We'll tell you honestly whether we can make it work.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
