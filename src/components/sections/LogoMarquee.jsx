import React from "react";

const row1 = [
  "HubSpot", "Salesforce", "Slack", "Shopify", "Notion", "Airtable", 
  "WhatsApp", "Google Workspace", "Stripe", "Intercom", "Zapier", "Make.com"
];

const row2 = [
  "OpenAI", "Anthropic", "LangChain", "Supabase", "Pinecone", "AWS", 
  "Vercel", "n8n", "CrewAI", "LlamaIndex", "Docker", "Twilio"
];

export default function LogoMarquee() {
  const pillClasses = "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-[6px] px-[16px] py-[6px] font-['JetBrains_Mono'] text-[12px] text-[#6B7A99] mx-[6px] whitespace-nowrap transition-colors duration-200 hover:text-[#3BAFD4] hover:border-[rgba(59,175,212,0.25)] cursor-default";

  return (
    <section className="bg-[#060A14] border-t border-b border-[rgba(255,255,255,0.06)] py-[28px] overflow-hidden relative">
      <div className="text-center mb-6 relative z-10">
        <span className="font-['JetBrains_Mono'] text-[10px] text-[#E2E8F2]/50 uppercase tracking-widest">
          Integrated with the tools your business already uses
        </span>
      </div>
      
      {/* Gradient fades for edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[#060A14] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[#060A14] to-transparent z-10" />

      <div className="flex flex-col gap-[80px]">
        {/* ROW 1: Animates Left */}
        <div className="flex w-max animate-marquee-left">
          <div className="flex">
            {row1.map((tool, i) => <div key={`r1-a-${i}`} className={pillClasses}>{tool}</div>)}
          </div>
          <div className="flex">
            {row1.map((tool, i) => <div key={`r1-b-${i}`} className={pillClasses}>{tool}</div>)}
          </div>
        </div>

        {/* ROW 2: Animates Right */}
        <div className="flex w-max animate-marquee-right">
          <div className="flex">
            {row2.map((tool, i) => <div key={`r2-a-${i}`} className={pillClasses}>{tool}</div>)}
          </div>
          <div className="flex">
            {row2.map((tool, i) => <div key={`r2-b-${i}`} className={pillClasses}>{tool}</div>)}
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 28s linear infinite;
        }
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
