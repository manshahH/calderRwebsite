import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0C1220] border-t border-[rgba(255,255,255,0.07)] pt-[80px] pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-14">
            
            {/* BRAND COL */}
            <div className="flex flex-col items-start">
              <a href="#hero" className="flex items-center gap-2.5 text-[#E2E8F2] hover:opacity-90 transition-opacity">
                <div className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.15)] bg-[#060A14] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="8" x2="50" y2="28" stroke="#3BAFD4" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="20" y1="30" x2="80" y2="30" stroke="#3BAFD4" strokeWidth="5" strokeLinecap="round"/>
                    <circle cx="50" cy="30" r="5" fill="#3BAFD4"/>
                    <line x1="28" y1="30" x2="28" y2="58" stroke="#E2E8F2" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="28" cy="68" r="10" fill="#E2E8F2"/>
                    <line x1="72" y1="30" x2="72" y2="50" stroke="#E2E8F2" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="72" cy="58" r="8" fill="#3BAFD4"/>
                  </svg>
                </div>
                <span className="font-['Syne'] font-[700] text-[20px] tracking-[-0.5px]">
                  CalderR<em className="text-[#3BAFD4] not-italic">.</em>
                </span>
              </a>
              <p className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70 leading-relaxed mt-4 mb-6">
                AI should work for your business, not the other way around. We build the systems that make it happen.
              </p>
              <div className="flex flex-row gap-2.5">
                <a href="#" className="w-[34px] h-[34px] rounded-lg bg-[#060A14] border border-[rgba(255,255,255,0.07)] text-[#E2E8F2]/60 flex items-center justify-center transition-all duration-200 hover:border-[rgba(59,175,212,0.28)] hover:text-[#3BAFD4]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/officialcalderr" aria-label="X" className="w-[34px] h-[34px] rounded-lg bg-[#060A14] border border-[rgba(255,255,255,0.07)] text-[#E2E8F2]/60 flex items-center justify-center transition-all duration-200 hover:border-[rgba(59,175,212,0.28)] hover:text-[#3BAFD4]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 6l10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6L7 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#" className="w-[34px] h-[34px] rounded-lg bg-[#060A14] border border-[rgba(255,255,255,0.07)] text-[#E2E8F2]/60 flex items-center justify-center transition-all duration-200 hover:border-[rgba(59,175,212,0.28)] hover:text-[#3BAFD4]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
              </div>
            </div>

            {/* LINKS COL 1 */}
            <div className="flex flex-col">
              <h5 className="font-['JetBrains_Mono'] text-[11px] text-[#E2E8F2]/40 uppercase tracking-widest mb-5">Services</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">AI Chatbots</a></li>
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Process Automation</a></li>
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Custom AI Agents</a></li>
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Data Insights</a></li>
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Lead Generation</a></li>
                <li><a href="#services" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Content Systems</a></li>
              </ul>
            </div>

            {/* LINKS COL 2 */}
            <div className="flex flex-col">
              <h5 className="font-['JetBrains_Mono'] text-[11px] text-[#E2E8F2]/40 uppercase tracking-widest mb-5">Company</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="#process" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">About</a></li>
                <li><a href="#cases" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Case Studies</a></li>
                <li><a href="#pricing" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Pricing</a></li>
                <li><a href="#faq" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">FAQ</a></li>
                <li><a href="#contact" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* LINKS COL 3 */}
            <div className="flex flex-col">
              <h5 className="font-['JetBrains_Mono'] text-[11px] text-[#E2E8F2]/40 uppercase tracking-widest mb-5">Contact</h5>
              <ul className="flex flex-col gap-3">
                <li><a href="mailto:contact@calderr" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">contact@calderr</a></li>
                <li><a href="#contact" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">Book a Call</a></li>
                <li><a href="https://wa.link/lrm669" className="font-['Outfit'] font-[300] text-[14px] text-[#E2E8F2]/70 hover:text-[#E2E8F2] transition-colors duration-200">WhatsApp Us</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[rgba(255,255,255,0.07)] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Outfit'] text-[12px] text-[#E2E8F2]/40">
              © 2025 CalderR AI Solutions.
            </p>
            <div className="flex flex-row gap-6">
              <a href="#" className="font-['Outfit'] text-[12px] text-[#E2E8F2]/40 hover:text-[#E2E8F2] transition-colors">Privacy Policy</a>
              <a href="#" className="font-['Outfit'] text-[12px] text-[#E2E8F2]/40 hover:text-[#E2E8F2] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <motion.a
        href="https://wa.link/lrm669"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 w-[52px] h-[52px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] z-[80] group hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute right-[64px] bg-[#060A14] border border-[rgba(255,255,255,0.07)] text-[#E2E8F2] text-[12px] font-['Outfit'] px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
          Chat on WhatsApp
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] bg-[#0C1220] border-t border-[rgba(255,255,255,0.07)] p-4 flex md:hidden flex-row gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
        <a href="#contact" className="flex-1 bg-[#3BAFD4] text-[#060A14] font-['Syne'] font-[700] text-[14px] rounded-lg h-12 flex items-center justify-center transition-transform active:scale-95">
          Book a Call
        </a>
        <a href="https://wa.link/lrm669" className="flex-1 bg-transparent border border-[#3BAFD4]/30 text-[#3BAFD4] font-['Syne'] font-[700] text-[14px] rounded-lg h-12 flex items-center justify-center transition-colors active:bg-[#3BAFD4]/10">
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
