import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

const faqs = [
  { q: "What industries do you work with?", a: "We work across e-commerce, healthcare, real estate, education, finance, legal, SaaS, and professional services — among others. If you don't see your industry, reach out. We've delivered in 20+ verticals." },
  { q: "How long does an AI project take?", a: "Most projects launch within 2–6 weeks depending on complexity. A single chatbot or automation can go live in as little as 5 days. Enterprise systems with multiple integrations typically take 4–8 weeks." },
  { q: "Do I need technical knowledge to work with you?", a: "Not at all. We handle all the technical implementation. You bring the business context and goals — we translate that into working AI. Our clients range from solo founders to enterprise teams with no internal tech resources." },
  { q: "How is my data kept secure?", a: "We follow industry-standard security practices: encrypted data in transit and at rest, role-based access control, and we never train models on your proprietary data without explicit consent. GDPR compliance is built into every project." },
  { q: "What tools and platforms do you integrate with?", a: "We integrate with virtually any tool with an API — HubSpot, Salesforce, Slack, Notion, Airtable, Shopify, WhatsApp, Google Workspace, and hundreds more. If it connects to the internet, we can connect to it." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. All retainer plans include continuous monitoring, optimisation, and support. For project-based work, we offer maintenance packages to keep your AI performing at its best as your business evolves." },
  { q: "Can I see examples before committing?", a: "Absolutely. Book a free discovery call and we'll walk you through live demos and relevant case studies for your industry. No commitment required — we want you to be confident before we begin." },
  { q: "What's your pricing model?", a: "We offer both monthly retainers (best for ongoing AI development and optimisation) and fixed-price project engagements (best for a defined scope). See our pricing section above, or contact us for a custom quote." }
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-[#0C1220]" id="faq">
       <div className="max-w-5xl mx-auto">
         <div className="flex flex-col items-center text-center mb-16">
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
             <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
               FAQ
             </span>
           </div>
           <h2 className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1]">
             Questions We Hear Often
           </h2>
         </div>

         <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 w-full items-start">
           {faqs.map((faq, i) => (
             <AccordionItem 
               key={i} 
               value={`item-${i}`} 
               className="bg-[#060A14] border border-[rgba(255,255,255,0.07)] rounded-xl px-0 data-[state=open]:border-[rgba(59,175,212,0.2)] transition-colors data-[state=open]:shadow-[0_4px_24px_rgba(59,175,212,0.05)] h-fit"
             >
               <AccordionTrigger className="font-['Outfit'] font-[600] text-[14px] text-[#E2E8F2] px-6 py-5 hover:no-underline [&>svg]:text-[#3BAFD4] text-left">
                 {faq.q}
               </AccordionTrigger>
               <AccordionContent className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 leading-[1.7] px-6 pb-5 pt-0 border-t-0">
                 {faq.a}
               </AccordionContent>
             </AccordionItem>
           ))}
         </Accordion>
       </div>
    </section>
  );
}
