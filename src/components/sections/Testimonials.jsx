import { motion } from 'framer-motion';
import RevealText from '../ui/RevealText';

const testimonials = [
  {
    avatar: "CR",
    name: "Client Review",
    role: "Rating is 5.0 out of 5.",
    rating: "5.0",
    quote: "We've been very happy working with Hamdan and feel that he has communicated great and delivered outstanding results. I would be more than happy to work with him again in the future and can recommend his services to anyone. Five stars!",
    highlights: ["Committed to Quality", "Clear Communicator", "Detail Oriented"]
  },
  {
    avatar: "CR",
    name: "Client Review",
    role: "Rating is 5.0 out of 5.",
    rating: "5.0",
    quote: "Very much impressed with Hamdan's skills, dedication, and quick work. He communicates easily, is very professional, and has great problem-solving skills. Hamdan is creative and has strong knowledge and experience, especially in Agentic AI.",
    highlights: ["Clear Communicator", "Professional", "Solution Oriented", "Reliable", "Accountable for Outcomes"]
  },
  { 
    avatar: "SJ", 
    name: "Sarah J.", 
    role: "Head of CX · Norva Commerce", 
    rating: "5.0",
    quote: "CalderR didn't just build us a chatbot; they fundamentally changed how our support team operates. The AI handles 60% of our tickets now, and it actually knows our products better than some of our staff did.",
    highlights: []
  },
  { 
    avatar: "MR", 
    name: "Marcus R.", 
    role: "Director of Sales · Elevate Realty", 
    rating: "5.0",
    quote: "The ROI was visible within two weeks. Our agents spend zero time on data entry now; the AI handles qualification, scheduling, and follow-up. We closed 3x more deals in Q1 after going live.",
    highlights: []
  },
  { 
    avatar: "PL", 
    name: "Priya L.", 
    role: "COO · Meridian Legal Group", 
    rating: "5.0",
    quote: "I was sceptical about AI for our niche. CalderR took the time to really understand our compliance constraints and built a solution that felt bespoke. Couldn't recommend them more highly.",
    highlights: []
  },
  { 
    avatar: "TK", 
    name: "Tom K.", 
    role: "CMO · Stackly SaaS", 
    rating: "5.0",
    quote: "Our content team was drowning in requests. The AI content system CalderR built now generates first drafts in our voice, and our writers spend their time on strategy instead of typing. Game-changing.",
    highlights: []
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#060A14] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#E2E8F2]">
            Client Voices
          </span>
        </div>
        <RevealText 
          tag="h2"
          text={"What Our Clients Say"}
          className="font-syne font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1]"
        />
      </div>

      <div style={{ paddingLeft: 'max(32px, calc(50vw - 600px))', paddingRight: 'max(32px, calc(50vw - 600px))' }}>
        <div className="flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[380px] max-w-[380px] shrink-0 snap-start overflow-hidden bg-[#0C1220] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 transition-colors duration-250 hover:border-[rgba(59,175,212,0.18)]">
              <div className="font-syne text-[56px] text-[#3BAFD4] leading-[1] block mb-2">“</div>
              <p className="font-outfit font-[300] text-[15px] text-[#E2E8F2] leading-[1.75] mb-6 italic break-words whitespace-normal block max-w-full">
                "{t.quote}"
              </p>
              <div className="flex flex-row gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-[12px] h-[12px] bg-[#D4A853]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                ))}
              </div>
              <div className="font-mono text-[11px] text-[#E2E8F2]/70 mb-5">
                {t.rating}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.highlights.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#3BAFD4]/[0.08] border border-[#3BAFD4]/20 text-[#3BAFD4]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-[#3BAFD4]/[0.08] border border-[#3BAFD4]/20 flex items-center justify-center font-syne font-[700] text-[13px] text-[#3BAFD4]">
                  {t.avatar}
                </div>
                <div className="flex flex-col">
                  <div className="font-outfit font-[600] text-[14px] text-[#E2E8F2]">{t.name}</div>
                  <div className="font-mono text-[11px] text-[#E2E8F2]/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
