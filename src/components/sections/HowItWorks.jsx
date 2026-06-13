import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We run a 60-point audit of your operation and identify the highest-leverage automations. Free, no obligation.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'We design and ship the system in 4 to 8 weeks, integrated with your existing PMS and channels.',
  },
  {
    num: '03',
    title: 'Operate',
    desc: "We maintain, monitor, and improve the system on a monthly retainer. You get reports on what it's doing and what's working.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="how-we-work" ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="accent-label mb-3">How we work</div>
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.8px]">
            Three stages. No surprises.
          </h2>
        </div>

        {/* Steps — three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-[#0A0A0B] p-8"
            >
              <div className="font-mono text-[36px] font-bold text-accent/20 leading-none mb-5 tracking-[-2px]">
                {num}
              </div>
              <h3 className="text-[18px] font-semibold text-text-primary mb-3 tracking-[-0.3px]">
                {title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-[1.65]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
