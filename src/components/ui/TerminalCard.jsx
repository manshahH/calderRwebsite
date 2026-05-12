import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const sequence = [
  { text: "> Received: CX ticket #8429", color: "#6B7A99", speed: 35 },
  { text: "> Analyzing customer profile...", color: "#E2E8F2", speed: 20 },
  { text: "  ↳ Customer: VIP tier · 12 orders · $2,840 LTV", color: "#9DECF9", speed: 18 },
  { text: "> Routing to: order_status_agent", color: "#E2E8F2", speed: 20 },
  { text: "> Fetching real-time order data...", color: "#E2E8F2", speed: 20 },
  { text: "  ↳ Order #ORD-22847 · Status: In transit", color: "#9DECF9", speed: 18 },
  { text: "  ↳ Estimated delivery: Tomorrow by 6PM", color: "#9DECF9", speed: 18 },
  { text: "> Generating personalized response...", color: "#E2E8F2", speed: 20 },
  { pause: 800 },
  { text: "✓ Resolved in 1.2s — no escalation needed", color: "#28C840", speed: 22 },
  { pause: 100, isBlank: true },
  { text: "> Performance — last 30 days:", color: "#D4A853", speed: 20 },
  { text: "  ↳ Ticket deflection   62% ██████████░░░░", color: "#D4A853", speed: 14 },
  { text: "  ↳ Avg. resolution     1.4 seconds", color: "#D4A853", speed: 14 },
  { text: "  ↳ CSAT score          4.9 / 5.0", color: "#D4A853", speed: 14 },
  { text: "  ↳ Monthly savings     $24,000 USD", color: "#D4A853", speed: 14 }
];

export default function TerminalCard() {
  const [lines, setLines] = useState([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (currentLineIdx >= sequence.length) {
      timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    const currentStep = sequence[currentLineIdx];

    if (currentStep.pause !== undefined && !currentStep.text) {
      timeout = setTimeout(() => {
        if (currentStep.isBlank) {
          setLines(prev => [...prev, { text: '', color: '' }]);
        }
        setCurrentLineIdx(prev => prev + 1);
        setCurrentCharIdx(0);
      }, currentStep.pause);
      return () => clearTimeout(timeout);
    }

    const fullText = currentStep.text || "";
    
    if (currentCharIdx < fullText.length) {
      const char = fullText[currentCharIdx];
      let delay = currentStep.speed + Math.random() * 20;
      if (char === '.' || char === ',') {
        delay += 60;
      }

      timeout = setTimeout(() => {
        setCurrentCharIdx(prev => prev + 1);
      }, delay);
    } else {
      setLines(prev => [...prev, { text: fullText, color: currentStep.color }]);
      setCurrentLineIdx(prev => prev + 1);
      setCurrentCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [currentLineIdx, currentCharIdx]);

  const currentStep = sequence[currentLineIdx] || {};
  const currentTyped = (currentStep.text || "").slice(0, currentCharIdx);

  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={600} glareEnable={true} glareMaxOpacity={0.03} glareColor="#3BAFD4" glarePosition="top" glareBorderRadius="16px">
      <div className="w-full rounded-2xl bg-[#0C1220] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
        {/* HEADER BAR */}
      <div className="bg-[#111827] border-b border-white/10 px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-2 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="absolute left-0 right-0 text-center font-['JetBrains_Mono'] text-xs text-[#E2E8F2]/70 pointer-events-none">
          calderr-agent &middot; ecommerce-client
        </div>
        <div className="flex items-center gap-2 z-10">
          <motion.div 
            animate={{ opacity: [1, 0.2, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-1.5 h-1.5 rounded-full bg-green-400" 
          />
          <span className="font-['JetBrains_Mono'] text-[10px] text-green-400 font-bold">
            LIVE
          </span>
        </div>
      </div>

      {/* TERMINAL BODY */}
      <div className="px-5 py-5 font-['JetBrains_Mono'] text-[12.5px] leading-[1.85] min-h-[300px] overflow-y-hidden bg-transparent">
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.color }} className="whitespace-pre">
            {line.text || '\u00A0'}
          </div>
        ))}
        {currentLineIdx < sequence.length && (
          <div style={{ color: currentStep.color || 'inherit' }} className="whitespace-pre">
            {currentTyped}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[7px] h-[13px] bg-[#3BAFD4] ml-1 align-baseline -translate-y-[1px]"
            />
          </div>
        )}
        {currentLineIdx >= sequence.length && (
          <div className="whitespace-pre">
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[7px] h-[13px] bg-[#3BAFD4] align-baseline -translate-y-[1px]"
            />
          </div>
        )}
      </div>

      {/* METRICS ROW */}
      <div className="border-t border-white/10 bg-[#3BAFD4]/[0.04] px-4 py-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#111827] rounded-lg border border-white/10 text-center py-2 flex flex-col justify-center gap-0.5">
            <div className="font-['Syne'] font-[800] text-xl text-[#3BAFD4]">62%</div>
            <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-[#E2E8F2]/70">Ticket Deflection</div>
          </div>
          <div className="bg-[#111827] rounded-lg border border-white/10 text-center py-2 flex flex-col justify-center gap-0.5">
            <div className="font-['Syne'] font-[800] text-xl text-[#3BAFD4]">4.9</div>
            <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-[#E2E8F2]/70">CSAT Score</div>
          </div>
          <div className="bg-[#111827] rounded-lg border border-white/10 text-center py-2 flex flex-col justify-center gap-0.5">
            <div className="font-['Syne'] font-[800] text-xl text-[#3BAFD4]">3 wks</div>
            <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-[#E2E8F2]/70">To Launch</div>
          </div>
        </div>
      </div>
    </div>
    </Tilt>
  );
}
