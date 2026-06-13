import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FOUNDERS = [
  {
    name: 'Hamdan Sethi',
    role: 'Co-founder, technical',
    cred: 'BSAI candidate, COMSATS University',
    bio: 'Builds the systems. Background in AI agent development, LangChain, and multi-agent workflows.',
    linkedin: 'https://www.linkedin.com/company/calderr/',
    photo: '/team/hamdan.jpeg',
    color: '#3B82F6',
  },
  {
    name: 'Aaina Batool',
    role: 'Co-founder, operations',
    cred: 'Operations and client delivery',
    bio: 'Runs client relationships and delivery. Ensures every system shipped is grounded in operational reality.',
    linkedin: 'https://www.linkedin.com/company/calderr/',
    photo: '/team/aaina.jpeg',
    color: '#A78BFA',
  },
];

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function FoundersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="px-6 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="accent-label mb-3">Built by</div>
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.8px]">
            The team behind CalderR
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {FOUNDERS.map(({ name, role, cred, bio, linkedin, photo, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="bg-[#111114] border border-white/[0.07] rounded-card p-6"
            >
              {/* Founder photo */}
              <div className="w-14 h-14 rounded-full overflow-hidden mb-4 ring-2 ring-white/[0.06]">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-3">
                <div className="text-[15px] font-semibold text-text-primary">{name}</div>
                <div className="text-[12px] text-accent mt-0.5">{role}</div>
                <div className="text-[11px] text-text-muted mt-0.5">{cred}</div>
              </div>

              <p className="text-[13px] text-text-secondary leading-[1.6] mb-4">{bio}</p>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-text-muted hover:text-text-secondary transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
