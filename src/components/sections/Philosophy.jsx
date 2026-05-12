import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';

export default function Philosophy() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 16
      }
    }
  };

  const principles = [
    {
      num: "01",
      quote: "We audit before we build.",
      detail: "Most clients need 2 of the 6 things they ask for. The discovery call exists to find which 2."
    },
    {
      num: "02",
      quote: "Every integration has a fallback.",
      detail: "AI fails. APIs go down. Your business shouldn't stop. We build redundancy into every system we ship."
    },
    {
      num: "03",
      quote: "We measure in your metrics.",
      detail: "Not AI accuracy scores or model benchmarks. Revenue recovered, hours saved, tickets deflected. Your numbers."
    }
  ];

  return (
    <section className="bg-[#060A14] py-[100px] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="max-w-[600px] mx-auto text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              How We Think
            </span>
          </div>
          
          <RevealText 
            tag="h2"
            text="Principles Over Promises."
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6"
          />
          
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 leading-relaxed">
            We've seen what happens when AI gets bolted on without strategy. We do it differently.
          </p>
        </div>

        {/* CARDS */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {principles.map((p, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group relative bg-[#0C1220] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(59,175,212,0.2)] rounded-[20px] px-10 py-12 overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-[2px] bg-[#3BAFD4] transition-all duration-300" />

              {/* Background Number */}
              <div className="absolute -bottom-5 right-6 font-['Syne'] font-[800] text-[120px] text-[rgba(255,255,255,0.025)] pointer-events-none select-none leading-none">
                {p.num}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="font-['Syne'] font-[600] italic text-[clamp(18px,2vw,22px)] text-[#E2E8F2] leading-[1.4] mb-5">
                  "{p.quote}"
                </div>
                <div className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70 leading-relaxed">
                  {p.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
