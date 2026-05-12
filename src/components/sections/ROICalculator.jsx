import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';

const Slider = ({ label, min, max, value, onChange, step = 1, prefix = "", suffix = "" }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="flex flex-col gap-3 mb-8">
      <div className="flex justify-between items-end">
        <label className="font-['JetBrains_Mono'] text-[11px] text-[#E2E8F2]/70 uppercase tracking-wider">{label}</label>
        <div className="font-['Syne'] font-[700] text-xl text-[#3BAFD4]">
          {prefix}{value}{suffix}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-[4px] appearance-none rounded-full outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#3BAFD4] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#060A14] [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(59,175,212,0.4)] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#3BAFD4] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#060A14] [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(59,175,212,0.4)]"
        style={{ 
          background: `linear-gradient(to right, #3BAFD4 ${percentage}%, rgba(255,255,255,0.08) ${percentage}%)` 
        }}
      />
    </div>
  );
};

export default function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(35);

  const targetSavings = employees * hours * 4.33 * rate * 0.62;
  const motionValue = useMotionValue(targetSavings);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });
  const displayValue = useTransform(springValue, (v) => "$" + Math.round(v).toLocaleString());

  useEffect(() => {
    motionValue.set(targetSavings);
  }, [targetSavings, motionValue]);

  return (
    <section className="bg-[#0C1220] border-t border-b border-[rgba(59,175,212,0.1)] py-[100px] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              ROI Calculator
            </span>
          </div>
          
          <RevealText 
            tag="h2"
            text="See What AI Could Save You"
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-6"
          />
          
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 leading-relaxed mb-10 max-w-lg">
            Drag the sliders to estimate your potential monthly savings. 
            These are conservative figures based on our client averages.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <div className="bg-[rgba(59,175,212,0.06)] border border-[rgba(59,175,212,0.15)] text-[#3BAFD4] text-xs font-['JetBrains_Mono'] rounded-full px-3 py-1.5">
              E-commerce client: $24,000/mo saved
            </div>
            <div className="bg-[rgba(59,175,212,0.06)] border border-[rgba(59,175,212,0.15)] text-[#3BAFD4] text-xs font-['JetBrains_Mono'] rounded-full px-3 py-1.5">
              Real estate client: 80% time reduction
            </div>
            <div className="bg-[rgba(59,175,212,0.06)] border border-[rgba(59,175,212,0.15)] text-[#3BAFD4] text-xs font-['JetBrains_Mono'] rounded-full px-3 py-1.5">
              SaaS client: 41% churn reduction
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <Slider label="Number of employees doing manual tasks" min={1} max={50} value={employees} onChange={setEmployees} />
            <Slider label="Hours per employee lost to manual work weekly" min={1} max={40} value={hours} onChange={setHours} />
            <Slider label="Average hourly cost per employee (USD)" min={15} max={150} step={5} value={rate} onChange={setRate} prefix="$" />
          </div>

          <div className="bg-[#060A14] border border-[rgba(59,175,212,0.2)] rounded-[16px] p-8 text-center flex flex-col items-center mb-8">
            <div className="font-['JetBrains_Mono'] text-[12px] text-[#E2E8F2]/70 uppercase tracking-widest mb-4">
              Estimated Monthly Savings
            </div>
            <motion.div className="font-['Syne'] font-[800] text-[clamp(48px,6vw,72px)] text-[#3BAFD4] tracking-[-2px] leading-none mb-2">
              {displayValue}
            </motion.div>
            <div className="font-['Outfit'] font-[300] text-[#E2E8F2]/70 text-sm mb-6">
              per month in recovered productivity
            </div>
            <div className="w-full h-px bg-[rgba(255,255,255,0.07)] mb-6" />
            <div className="font-['JetBrains_Mono'] text-[10px] text-[#E2E8F2]/50 uppercase tracking-widest">
              Based on 62% average efficiency gain across CalderR deployments
            </div>
          </div>

          <div className="flex flex-col items-center">
            <MagneticButton variant="primary" href="#contact" className="mb-3">
              Get My Custom Analysis &rarr;
            </MagneticButton>
            <div className="font-['Outfit'] font-[300] text-sm text-[#E2E8F2]/70">
              Free 30-min strategy call. No obligation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
