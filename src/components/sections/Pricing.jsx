import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import MagneticButton from '../ui/MagneticButton';
import RevealText from '../ui/RevealText';

export default function Pricing() {
  const [mode, setMode] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "1,500",
      projectPrice: "2,500",
      isPopular: false,
      btnVariant: "ghost",
      btnText: "Get Started →",
      features: [
        "1 AI chatbot or automation",
        "Up to 3 platform integrations",
        "Monthly performance review",
        "Email support (48hr response)",
        "Basic analytics dashboard"
      ]
    },
    {
      name: "Growth",
      monthlyPrice: "3,500",
      projectPrice: "8,000",
      isPopular: true,
      btnVariant: "primary",
      btnText: "Get Started →",
      features: [
        "Everything in Starter",
        "Up to 3 AI agents or workflows",
        "Unlimited integrations",
        "Bi-weekly strategy calls",
        "Priority support (4hr response)",
        "Custom reporting & insights",
        "A/B testing & optimisation"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      projectPrice: "Custom",
      isPopular: false,
      btnVariant: "ghost",
      btnText: "Contact Us →",
      features: [
        "Everything in Growth",
        "Dedicated project manager",
        "Custom SLAs & contracts",
        "On-site workshops available",
        "White-label deployment",
        "Security & compliance review",
        "Executive strategy sessions"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#060A14]" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              Transparent Pricing
            </span>
          </div>
          <RevealText 
            tag="h2"
            text={"Simple Plans, Serious Results"}
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6"
          />
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 max-w-xl mx-auto">
            Choose the engagement model that fits your stage.
          </p>
        </div>

        <Tabs defaultValue="monthly" onValueChange={setMode} className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-[#0C1220] border border-[rgba(255,255,255,0.07)] rounded-lg p-1 h-auto flex gap-1 relative">
              <TabsTrigger value="monthly" className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#060A14] text-[#E2E8F2]/70 rounded-md transition-none font-['Outfit'] font-[600] z-10 outline-none">
                {mode === 'monthly' && (
                  <motion.div layoutId="pricing-tab-indicator" className="absolute inset-0 bg-[#3BAFD4] rounded-md z-[-1]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                Monthly Retainer
              </TabsTrigger>
              <TabsTrigger value="project" className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#060A14] text-[#E2E8F2]/70 rounded-md transition-none font-['Outfit'] font-[600] z-10 outline-none">
                {mode === 'project' && (
                  <motion.div layoutId="pricing-tab-indicator" className="absolute inset-0 bg-[#3BAFD4] rounded-md z-[-1]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                Project-Based
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {plans.map((plan, i) => {
              const price = mode === 'monthly' ? plan.monthlyPrice : plan.projectPrice;
              const period = plan.monthlyPrice === 'Custom' ? 'tailored to your needs' : (mode === 'monthly' ? '/ month' : '/ project');
              
              return (
                <div 
                  key={i} 
                  className={`relative bg-[#0C1220] rounded-2xl p-9 border ${plan.isPopular ? 'border-[#3BAFD4] shadow-[0_0_48px_rgba(59,175,212,0.1)] z-10 scale-100 md:scale-105' : 'border-[rgba(255,255,255,0.07)]'}`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3BAFD4] text-[#060A14] font-['JetBrains_Mono'] font-bold text-[10px] px-3 py-1 rounded-full whitespace-nowrap">
                      ⭐ Most Popular
                    </div>
                  )}

                  <div className="font-['JetBrains_Mono'] text-[11px] text-[#E2E8F2]/70 uppercase tracking-widest mb-2">
                    {plan.name}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-1 overflow-hidden min-h-[48px]">
                    {plan.monthlyPrice !== 'Custom' && <span className="font-['Outfit'] font-[400] text-xl text-[#E2E8F2]">From $</span>}
                    <motion.span 
                      key={price}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-['Syne'] font-[800] text-[clamp(36px,4vw,48px)] text-[#E2E8F2] tracking-[-1.5px] leading-[1]"
                    >
                      {price}
                    </motion.span>
                  </div>
                  
                  <div className="font-['JetBrains_Mono'] text-[13px] text-[#E2E8F2]/70 mb-8">
                    {period}
                  </div>

                  <div className="mb-10 w-full">
                    <MagneticButton href="#contact" variant={plan.btnVariant} className="w-full justify-center text-center">
                      {plan.btnText}
                    </MagneticButton>
                  </div>

                  <ul className="flex flex-col">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 py-3 border-b border-[rgba(255,255,255,0.06)] last:border-0">
                        <span className="text-[#3BAFD4] text-xs mt-0.5">→</span>
                        <span className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
