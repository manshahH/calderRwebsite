import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const PRINCIPLES = [
  {
    num: '01',
    text: 'Operations beat brand. We measure success in hours saved and dollars earned, not in awards.',
  },
  {
    num: '02',
    text: 'The right tool, deployed deeply, beats ten generic tools. Specialization compounds.',
  },
  {
    num: '03',
    text: 'Operators know their business. Our job is to listen first and build second.',
  },
  {
    num: '04',
    text: 'AI fails on the boring edge cases. Human-in-the-loop matters more than model size.',
  },
  {
    num: '05',
    text: 'If a system can\'t be explained simply, it shouldn\'t be sold.',
  },
];

const FOUNDERS = [
  {
    name: 'Hamdan Sethi',
    role: 'Co-founder. Technical.',
    cred: 'BSAI candidate, COMSATS University',
    bio: 'Builds the systems and runs the technical side. Background in AI agent development, LangChain, and multi-agent workflows.',
    linkedin: 'https://www.linkedin.com/company/calderr/',
    photo: '/team/hamdan.jpeg',
    color: '#3B82F6',
  },
  {
    name: 'Aaina Batool',
    role: 'Co-founder. Operations.',
    cred: 'Operations and client delivery',
    bio: 'Runs operations, client relationships, and delivery. Ensures every system shipped is grounded in operational reality.',
    linkedin: 'https://www.linkedin.com/company/calderr/',
    photo: '/team/aaina.jpeg',
    color: '#A78BFA',
  },
];

export default function About() {
  const { ref: foundersRef, inView: foundersInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: principlesRef, inView: principlesInView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">About</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              We build operations tools for property management, not pitch decks.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[520px]">
              CalderR is an AI automation agency focused on a single niche: residential property management companies. We work with operators managing 200 to 5,000 units.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-4">Why we exist</div>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-6">
            Why we exist
          </h2>
          <div className="text-[15px] text-text-secondary leading-[1.75] space-y-5 max-w-[600px]">
            <p>
              Property management is operations-heavy work. Leasing inquiries, maintenance dispatch, rent collection, owner reporting, vendor coordination, tenant communication. Most of it is repetitive. Most of it is currently done manually. And most of the AI vendors selling into this space have never actually managed a property.
            </p>
            <p>
              We started CalderR because the gap between what AI can do and what property management operators actually use is enormous. Not because the technology is missing. Because the people building the technology don't understand the work.
            </p>
            <p className="text-text-primary font-medium">
              We're closing that gap, one operator at a time.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-4">How we work</div>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-6">
            How we work
          </h2>
          <div className="text-[15px] text-text-secondary leading-[1.75] space-y-5 max-w-[600px]">
            <p>
              We focus on one vertical. We don't do generic AI consulting. We build a small number of specific systems we know cold, and we deploy them deeply.
            </p>
            <p>
              We start with a free audit because you should never have to guess whether we know what we're doing. The audit tells you, in real numbers, what's working and what isn't in your operation. Then you decide whether to build with us.
            </p>
            <p>
              We ship in 4 to 8 weeks, not 6 months. We integrate with your existing PMS and channels. We operate the system on a monthly retainer so you're never alone with software you don't understand.
            </p>
            <p className="text-text-primary font-medium">
              If your operation isn't a fit for us, we'll tell you. Most agencies won't.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section ref={foundersRef} className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-4">Who we are</div>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-8">
            Who we are
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FOUNDERS.map(({ name, role, cred, bio, linkedin, photo, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 18 }}
                animate={foundersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="bg-[#111114] border border-white/[0.07] rounded-card p-6"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mb-4 ring-2 ring-white/[0.06]">
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[16px] font-semibold text-text-primary mb-0.5">{name}</div>
                <div className="text-[12px] text-accent mb-0.5">{role}</div>
                <div className="text-[11px] text-text-muted mb-4">{cred}</div>
                <p className="text-[14px] text-text-secondary leading-[1.65] mb-5">{bio}</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-text-muted hover:text-text-secondary transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section ref={principlesRef} className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-3xl mx-auto">
          <div className="accent-label mb-4">Principles</div>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-8">
            What we believe
          </h2>
          <div className="flex flex-col gap-0">
            {PRINCIPLES.map(({ num, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -12 }}
                animate={principlesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-6 py-5 border-b border-white/[0.06] last:border-0"
              >
                <span className="font-mono text-[11px] font-semibold text-accent/60 shrink-0 mt-0.5 w-6">{num}</span>
                <p className="text-[15px] text-text-secondary leading-[1.65]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">
            Want to see what we'd find in your operation?
          </h2>
          <Link to="/audit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors">
            Get your free audit →
          </Link>
        </div>
      </section>
    </>
  );
}
