import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '../ui/dialog';
import { Progress } from '../ui/progress';
import RevealText from '../ui/RevealText';
import SlotCounter from '../ui/SlotCounter';

function AnimatedMetric({ value, label }) {
  return (
    <div className="bg-[#111827] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-center flex-1 flex flex-col justify-center items-center">
      <div className="font-['Syne'] font-[800] text-[28px] text-[#3BAFD4] tracking-[-0.5px] leading-none mb-1">
        <SlotCounter value={value} />
      </div>
      <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#E2E8F2]/70">
        {label}
      </div>
    </div>
  );
}

function AnimatedProgress({ value }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);
  
  return <Progress value={progress} className="h-2 bg-[#111827] [&>div]:bg-[#3BAFD4]" />
}

const caseStudies = [
  {
    badge: "E-commerce",
    title: "AI Support Agent for DTC Brand",
    desc: "Replaced manual customer support with a 24/7 AI agent trained on 3 years of support tickets and product data.",
    metrics: [
      { val: 62, label: "fewer tickets", float: false, progressVal: 62 }, 
      { val: 4.9, label: "CSAT score", float: true, progressVal: 98 }, 
      { val: 18, label: "hrs saved/week", float: false, progressVal: 85 }
    ]
  },
  {
    badge: "Real Estate",
    title: "Lead Qualification Automation",
    desc: "Deployed an AI agent to qualify inbound leads, book viewings, and send personalised follow-ups automatically.",
    metrics: [
      { val: 3, label: "x lead conversion", float: false, progressVal: 100 }, 
      { val: 80, label: "% time saved", float: false, progressVal: 80 }, 
      { val: 14, label: "day ROI", float: false, progressVal: 90 }
    ]
  },
  {
    badge: "SaaS",
    title: "AI-Powered Onboarding System",
    desc: "Built an intelligent onboarding flow that personalises the product experience and proactively answers user questions.",
    metrics: [
      { val: 41, label: "% churn reduction", float: false, progressVal: 41 }, 
      { val: 2.3, label: "x activation rate", float: true, progressVal: 85 }
    ]
  },
  {
    badge: "Professional Services",
    title: "Document Intelligence Pipeline",
    desc: "Automated contract review and report generation for a 40-person consultancy, cutting delivery time dramatically.",
    metrics: [
      { val: 75, label: "% faster delivery", float: false, progressVal: 75 }, 
      { val: 22, label: "hrs saved/week", float: false, progressVal: 95 }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-[#060A14]" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              Proven Results
            </span>
          </div>
          <RevealText 
            tag="h2"
            text={"AI That Moves the Needle"}
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6"
          />
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 max-w-xl mx-auto">
            Real outcomes from real deployments — not demos, not prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Dialog key={i}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.025} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.06} glareColor="#3BAFD4" glarePosition="top" glareBorderRadius="16px" className="h-full">
                <DialogTrigger asChild>
                  <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 90, damping: 18 }}
                  className="bg-[#0C1220] border border-[rgba(255,255,255,0.07)] rounded-2xl p-9 cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(59,175,212,0.15),0_24px_64px_rgba(0,0,0,0.35)] flex flex-col"
                >
                  <div className="self-start font-['JetBrains_Mono'] text-[10px] uppercase bg-[#3BAFD4]/[0.08] border border-[#3BAFD4]/20 text-[#3BAFD4] rounded-full px-3 py-1 mb-4">
                    {cs.badge}
                  </div>
                  <h3 className="font-['Syne'] font-[700] text-[19px] text-[#E2E8F2] mt-4 mb-2 tracking-[-0.3px]">
                    {cs.title}
                  </h3>
                  <p className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70 leading-relaxed mb-6 flex-grow">
                    {cs.desc}
                  </p>
                  <div className="flex flex-row gap-3 mt-auto">
                    {cs.metrics.map((m, j) => (
                      <AnimatedMetric key={j} value={m.val} label={m.label} />
                    ))}
                  </div>
                </motion.div>
                </DialogTrigger>
              </Tilt>
              
              <DialogContent className="bg-[#0C1220] border-white/10 text-[#E2E8F2] p-0 overflow-hidden sm:max-w-lg">
                <motion.div 
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="p-9 flex flex-col"
                >
                  <DialogTitle className="sr-only">{cs.title}</DialogTitle>
                  <DialogDescription className="sr-only">{cs.desc}</DialogDescription>
                  
                  <div className="self-start font-['JetBrains_Mono'] text-[10px] uppercase bg-[#3BAFD4]/[0.08] border border-[#3BAFD4]/20 text-[#3BAFD4] rounded-full px-3 py-1 mb-6">
                    {cs.badge}
                  </div>
                  <h3 className="font-['Syne'] font-[700] text-[24px] text-[#E2E8F2] mb-4 tracking-[-0.3px]">
                    {cs.title}
                  </h3>
                  <p className="font-['Outfit'] font-[300] text-[15px] text-[#E2E8F2]/70 leading-relaxed mb-10">
                    {cs.desc}
                  </p>
                  
                  <div className="flex flex-col gap-6">
                    {cs.metrics.map((m, j) => (
                      <div key={j} className="flex flex-col gap-3">
                        <div className="flex justify-between items-end">
                          <div className="font-['Syne'] font-[800] text-[24px] text-[#3BAFD4] leading-none">
                            <SlotCounter value={m.val} />
                          </div>
                          <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#E2E8F2]/70">
                            {m.label}
                          </div>
                        </div>
                        <AnimatedProgress value={m.progressVal} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
