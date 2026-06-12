import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="2" width="6" height="4" rx="1"/>
        <path d="M3 6h18M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6"/>
        <path d="M9 11l2 2 4-4"/>
      </svg>
    ),
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    title: 'Responsiveness audit',
    desc: 'We submit real inquiries to your company and score how — and whether — you respond. Full report with breakdown.',
    price: 'From $149 / audit',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
    ),
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    title: 'Inquiry tracking',
    desc: 'Ongoing monitoring of your inquiry channels — web forms, email, and phone — with monthly scorecards.',
    price: 'From $299 / month',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    title: 'Operations report',
    desc: "Deep-dive analysis of your PMC's online presence, response workflows, and owner communication quality.",
    price: 'From $499 / report',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    iconBg: '#FAECE7',
    iconColor: '#993C1D',
    title: 'Fix & optimize',
    desc: "After the audit, we help you fix what's broken — scripts, workflows, and contact form improvements.",
    price: 'Custom / project',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="px-6 py-14 border-b border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-[11px] font-semibold text-brand-tint-text uppercase tracking-[0.6px] mb-2.5">
            Services
          </div>
          <h2 className="text-[24px] font-semibold text-gray-900 tracking-[-0.3px] mb-2.5">
            What CalderR does for your PMC
          </h2>
          <p className="text-[14px] text-gray-500 max-w-[480px] leading-[1.6]">
            Done-for-you services built around one goal: making sure your PMC never loses a client to poor communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SERVICES.map(({ icon, iconBg, iconColor, title, desc, price }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-black/[0.08] rounded-card p-5 card-shadow-hover"
            >
              <div
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: iconBg, color: iconColor }}
              >
                {icon}
              </div>
              <h3 className="text-[14px] font-semibold text-gray-900 mb-1.5">{title}</h3>
              <p className="text-[12px] text-gray-500 leading-[1.55] mb-3">{desc}</p>
              <div className="text-[12px] font-semibold text-brand-tint-text">{price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
