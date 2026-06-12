import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: 1,
    title: "Submit your PMC's website",
    desc: 'Submit your company URL. We identify all active inquiry channels: contact forms, email addresses, and phone lines.',
  },
  {
    num: 2,
    title: 'We run automated + manual checks',
    desc: 'CalderR submits test inquiries, measures response times, and evaluates reply quality across 12 dimensions.',
  },
  {
    num: 3,
    title: 'Receive your scored report',
    desc: 'Within 48 hours you get a full audit report — scored 0–100 — with specific findings and recommended fixes.',
  },
  {
    num: 4,
    title: 'Optional: we fix it for you',
    desc: 'Add our Fix & Optimize service and we implement the improvements directly. No extra effort on your side.',
  },
];

const FINDINGS = [
  { color: '#E24B4A', text: 'Contact form inquiry received no reply after 72 hours' },
  { color: '#EF9F27', text: 'Email reply omitted 3 of 5 questions asked in inquiry' },
  { color: '#EF9F27', text: 'No acknowledgement sent within 24-hour window' },
  { color: '#639922', text: 'Phone inquiry answered promptly — good' },
];

function SampleReportCard({ inView }) {
  const scoreRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-7 bg-[#F7F8FA] border border-black/[0.08] rounded-card p-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-[14px] font-semibold text-gray-900">
            Meridian Property Group — Audit Report
          </div>
          <div className="text-[11px] text-gray-400 mt-0.5">
            Audited June 10, 2026 · 12 dimensions
          </div>
        </div>
        <div className="text-right">
          <div className="text-[36px] font-semibold text-[#D85A30] leading-none">42</div>
          <div className="text-[11px] text-gray-400 mt-0.5">out of 100</div>
        </div>
      </div>

      {/* Findings */}
      <div className="flex flex-col gap-2">
        {FINDINGS.map(({ color, text }) => (
          <div key={text} className="flex items-center gap-2.5">
            <div
              className="shrink-0 rounded-full"
              style={{ width: 7, height: 7, backgroundColor: color }}
            />
            <span className="text-[12px] text-gray-500">{text}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 pt-4 border-t border-black/[0.06]">
        <button
          onClick={() => window.location.href = '/report/demo'}
          className="text-[12px] font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          View full sample report →
        </button>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="how-it-works" ref={ref} className="px-6 py-14 border-b border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-[11px] font-semibold text-brand-tint-text uppercase tracking-[0.6px] mb-2.5">
            How it works
          </div>
          <h2 className="text-[24px] font-semibold text-gray-900 tracking-[-0.3px] mb-2.5">
            Audit results in 48 hours
          </h2>
          <p className="text-[14px] text-gray-500 max-w-[460px] leading-[1.6]">
            No spreadsheets. No lengthy onboarding. Just your PMC's URL and we do the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col divide-y divide-black/[0.06] max-w-[620px]">
          {STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.09 }}
              className="flex gap-5 py-[18px] first:pt-0 last:pb-0"
            >
              <div className="shrink-0 w-7 h-7 rounded-full bg-brand-tint text-brand-tint-text flex items-center justify-center text-[12px] font-semibold mt-0.5">
                {num}
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-gray-900 mb-0.5">{title}</h4>
                <p className="text-[13px] text-gray-500 leading-[1.55]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample report card */}
        <div className="max-w-[620px]">
          <SampleReportCard inView={inView} />
        </div>
      </div>
    </section>
  );
}
