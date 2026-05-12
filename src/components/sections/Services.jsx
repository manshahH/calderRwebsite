import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { MessageSquare, Layers, Bot, BarChart3, Users, PenTool } from 'lucide-react';
import RevealText from '../ui/RevealText';

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description: "Custom conversational agents trained on your business data — available 24/7 across web, app, and messaging platforms.",
    stat: "One client deflected 62% of support tickets within 30 days"
  },
  {
    icon: Layers,
    title: "Business Process Automation",
    description: "Eliminate repetitive tasks with intelligent workflows that connect your tools and handle the heavy lifting automatically.",
    stat: "Reduced manual data entry by 14 hours per week"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Autonomous agents that research, decide, and act — completing multi-step tasks with minimal human intervention.",
    stat: "Increased agent task completion rate by 3x"
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Insights",
    description: "Transform raw business data into actionable insights with AI-powered analysis dashboards and automated reporting.",
    stat: "Identified $120k in unoptimized ad spend"
  },
  {
    icon: Users,
    title: "AI-Powered Lead Generation",
    description: "Identify, qualify, and nurture leads at scale using AI that learns your ideal customer profile and works around the clock.",
    stat: "Boosted qualified lead pipeline by 45%"
  },
  {
    icon: PenTool,
    title: "AI Content & Copy Systems",
    description: "Scalable content pipelines that generate on-brand copy, product descriptions, emails, and more — in your voice.",
    stat: "Generated 1,200 product descriptions in 4 hours"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } }
};

export default function Services() {
  return (
    <section className="py-24 px-6 relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              What We Build
            </span>
          </div>
          <RevealText 
            tag="h2"
            text={"Intelligent Systems.\nReal Business Results."}
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6"
          />
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 max-w-xl mx-auto">
            We deploy bespoke AI architecture designed to seamlessly integrate with your existing infrastructure and drive immediate operational efficiency.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} variants={item} className="bg-[#060A14] flex flex-col h-full rounded-2xl overflow-hidden">
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.04} glareColor="#3BAFD4" glarePosition="all" glareBorderRadius="16px" className="flex flex-col h-full">
                  <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div className="group relative bg-[#060A14] hover:bg-[#0C1220] transition-colors duration-300 px-8 py-9 flex flex-col flex-grow cursor-pointer outline-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_center,rgba(59,175,212,0.06),transparent_70%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
                      
                      <div className="relative z-10 w-[42px] h-[42px] rounded-xl bg-[#3BAFD4]/[0.08] border border-[#3BAFD4]/15 flex items-center justify-center">
                        <Icon className="w-[18px] h-[18px] stroke-[#3BAFD4]" strokeWidth={2} />
                      </div>
                      
                      <h3 className="font-['Syne'] font-[700] text-[16px] text-[#E2E8F2] mt-5 mb-2.5 relative z-10">
                        {service.title}
                      </h3>
                      
                      <p className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70 leading-relaxed relative z-10 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300 text-[#3BAFD4] text-xs font-semibold relative z-10">
                        Learn more <span>&rarr;</span>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent side="top" align="center" className="mb-2">
                    {service.stat}
                  </HoverCardContent>
                </HoverCard>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
