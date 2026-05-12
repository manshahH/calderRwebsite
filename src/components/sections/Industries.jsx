import { motion } from 'framer-motion';
import { ShoppingBag, Activity, Home, BookOpen, Landmark, FileText, Code2, Briefcase } from 'lucide-react';

const industries = [
  { icon: ShoppingBag, title: "E-commerce", tagline: "Stop losing customers to slow support" },
  { icon: Activity, title: "Healthcare", tagline: "Automate patient workflows, reclaim clinician time" },
  { icon: Home, title: "Real Estate", tagline: "Qualify leads automatically, close faster" },
  { icon: BookOpen, title: "Education", tagline: "Scale personalised learning without scaling headcount" },
  { icon: Landmark, title: "Finance", tagline: "Analyse, report, and advise at machine speed" },
  { icon: FileText, title: "Legal", tagline: "Document review and research in minutes, not hours" },
  { icon: Code2, title: "SaaS & Tech", tagline: "Ship AI-native product features your users will love" },
  { icon: Briefcase, title: "Professional Services", tagline: "Automate client delivery, bill for strategy not admin" }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
};

export default function Industries() {
  return (
    <section className="py-24 px-6 bg-[#0C1220]" id="industries">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              Who We Serve
            </span>
          </div>
          <h2 className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6">
            Built for Your Industry
          </h2>
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 leading-relaxed">
            We bring deep domain context to every engagement — not just generic AI.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={i} 
                variants={item}
                className="bg-[#060A14] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 text-center flex flex-col items-center justify-center transition-all duration-200 hover:border-[rgba(59,175,212,0.28)] hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(59,175,212,0.07)] cursor-pointer"
              >
                <Icon className="w-[26px] h-[26px] stroke-[#3BAFD4] mb-3" strokeWidth={1.5} />
                <h3 className="font-['Syne'] font-[600] text-[14px] text-[#E2E8F2] mb-1">
                  {ind.title}
                </h3>
                <p className="font-['Outfit'] font-[300] text-[12px] text-[#E2E8F2]/70">
                  {ind.tagline}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70">
            Don't see your industry? We've worked in 20+ verticals. <a href="#contact" className="text-[#3BAFD4] hover:underline">Get in touch &rarr;</a>
          </p>
        </div>
      </div>
    </section>
  );
}
