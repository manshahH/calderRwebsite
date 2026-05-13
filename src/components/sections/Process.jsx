import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';

const steps = [
  { num: 1, title: "Discovery Call", desc: "We learn your business goals, existing tools, and pain points in a focused 30-minute conversation." },
  { num: 2, title: "Custom Strategy", desc: "We design an AI roadmap tailored precisely to your needs, ROI targets, and technical environment." },
  { num: 3, title: "Build & Integrate", desc: "We build, test, and connect everything to your existing stack. No disruption, no downtime." },
  { num: 4, title: "Launch & Optimise", desc: "We go live, monitor performance, and continuously improve results based on real usage data." }
];

export default function Process() {
  return (
    <section 
      className="px-6 bg-[#0C1220]" 
      id="process"
      style={{ minHeight: 'auto', paddingBottom: '100px', paddingTop: '96px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              How It Works
            </span>
          </div>
          <RevealText 
            tag="h2"
            text={"From Strategy to Launch in Weeks"}
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1]"
          />
        </div>

        <div className="relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-px z-0">
            <svg width="100%" height="2" viewBox="0 0 100 1" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3BAFD4" />
                  <stop offset="100%" stopColor="rgba(59,175,212,0.1)" />
                </linearGradient>
              </defs>
              <motion.line 
                x1="0" y1="0.5" x2="100" y2="0.5" 
                stroke="url(#lineGrad)" 
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </div>

          <motion.div 
            initial={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
            style={{ 
              gap: '32px',
              marginTop: '56px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {steps.map((step, index) => {
              const isFilled = step.num === 2 || step.num === 4;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div 
                    className={`w-[56px] h-[56px] rounded-full flex items-center justify-center font-['Syne'] font-[800] text-[20px] border border-[rgba(59,175,212,0.3)] mb-6 transition-all duration-300
                      ${isFilled 
                        ? 'bg-[#3BAFD4] text-[#060A14] shadow-[0_0_24px_rgba(59,175,212,0.3)]' 
                        : 'bg-[#060A14] text-[#3BAFD4]'
                      }
                    `}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-['Syne'] font-[700] text-[15px] mb-2 text-[#E2E8F2]">
                    {step.title}
                  </h4>
                  <p className="font-['Outfit'] font-[300] text-sm leading-relaxed text-[#6B7A99]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
