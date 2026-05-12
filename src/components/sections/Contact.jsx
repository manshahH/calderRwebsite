import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, Mail, FileText } from 'lucide-react';
import FloatingInput from '../ui/FloatingInput';
import FloatingSelect from '../ui/FloatingSelect';
import FloatingTextarea from '../ui/FloatingTextarea';
import MagneticButton from '../ui/MagneticButton';
import RevealText from '../ui/RevealText';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are the AI intake assistant for CalderR AI Solutions — a premium AI consultancy that builds chatbots, automation workflows, and custom AI agents for businesses. Your job is to write a warm, professional, personalised acknowledgment email reply to a new enquiry.\n\nWrite a short, genuine reply (3-4 short paragraphs) that:\n1. Thanks them by first name for reaching out\n2. Briefly acknowledges their specific service interest and company\n3. Mentions 1 relevant insight about how CalderR can help with their stated goal\n4. Confirms a team member will follow up within 24 hours to schedule a free strategy call\n\nSign off as "The CalderR Team". Keep it warm but professional. No generic filler. Output ONLY the email body text.`,
          messages: [{
            role: 'user',
            content: `New enquiry details:\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\nService Interest: ${service || 'General enquiry'}\nBudget: ${budget || 'Not specified'}\nMessage: ${message}`
          }]
        })
      });
      const data = await res.json();
      const replyText = data.content?.[0]?.text || '';
      
      setReply(replyText);
      setStatus('success');
      
      // Clear form
      setName('');
      setEmail('');
      setCompany('');
      setService('');
      setBudget('');
      setMessage('');
    } catch(err) {
      setStatus('error');
    }
  };



  return (
    <section className="py-24 px-6 bg-[#060A14]" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] flex flex-col items-start">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3BAFD4]/25 bg-[#3BAFD4]/[0.07] mb-6">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#E2E8F2]">
              Get in Touch
            </span>
          </div>
          <RevealText 
            tag="h2"
            text={"Let's Build Something Remarkable"}
            className="font-['Syne'] font-[700] text-[clamp(32px,4vw,52px)] text-[#E2E8F2] tracking-[-1px] leading-[1.1] mb-4"
          />
          <p className="font-['Outfit'] font-[300] text-lg text-[#E2E8F2]/70 leading-relaxed mb-8">
            Start with a free 30-minute strategy call. We'll map out exactly what AI can do for your business — no tech jargon, no obligation.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex flex-row items-center gap-3 text-[#E2E8F2] font-['Outfit'] font-[400] text-[14px]">
              <Mail className="w-4 h-4 text-[#3BAFD4]" strokeWidth={2} />
              hello@calderr.ai
            </div>
            <div className="flex flex-row items-center gap-3 text-[#E2E8F2] font-['Outfit'] font-[400] text-[14px]">
              <Phone className="w-4 h-4 text-[#3BAFD4]" strokeWidth={2} />
              +1 (800) CALDERR-AI
            </div>
          </div>

          <a 
            href="https://wa.me/923495804995" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 bg-[#25D366] hover:bg-[#1fbd5b] text-white font-['Outfit'] font-[600] text-[14px] rounded-lg px-5 py-3 transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT COLUMN (FORM) */}
        <div className="w-full lg:w-[60%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FloatingInput id="name" label="Your Name" required type="text" placeholder="Alex Johnson" value={name} onChange={e => setName(e.target.value)} />
              <FloatingInput id="email" label="Email Address" required type="email" placeholder="alex@company.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <FloatingInput id="company" label="Company" type="text" placeholder="Your company name" value={company} onChange={e => setCompany(e.target.value)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FloatingSelect id="service" label="Service Interest" value={service} onChange={e => setService(e.target.value)}>
                <option value="" className="bg-[#0C1220]">Select a service…</option>
                <option className="bg-[#0C1220]">AI Chatbots & Assistants</option>
                <option className="bg-[#0C1220]">Business Process Automation</option>
                <option className="bg-[#0C1220]">Custom AI Agents</option>
                <option className="bg-[#0C1220]">Data Analysis & Insights</option>
                <option className="bg-[#0C1220]">AI Lead Generation</option>
                <option className="bg-[#0C1220]">AI Content Systems</option>
                <option className="bg-[#0C1220]">Not sure yet</option>
              </FloatingSelect>
              
              <FloatingSelect id="budget" label="Budget Range" value={budget} onChange={e => setBudget(e.target.value)}>
                <option value="" className="bg-[#0C1220]">Select a range…</option>
                <option className="bg-[#0C1220]">Under $2,000/mo</option>
                <option className="bg-[#0C1220]">$2,000–$5,000/mo</option>
                <option className="bg-[#0C1220]">$5,000–$15,000/mo</option>
                <option className="bg-[#0C1220]">$15,000+ or enterprise</option>
              </FloatingSelect>
            </div>

            <FloatingTextarea 
              id="message"
              label="Tell us about your project"
              required 
              placeholder="What are you trying to achieve with AI? What's your biggest pain point right now?" 
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            <div className="mt-2 w-full">
              <MagneticButton 
                variant="primary" 
                className="w-full justify-center disabled:opacity-70 disabled:pointer-events-none disabled:cursor-not-allowed" 
                id="submit-btn"
                onClick={handleSubmit}
              >
                {status === 'loading' ? 'Sending…' : (status === 'success' ? '✓ Sent!' : 'Send Message →')}
              </MagneticButton>
            </div>

            <AnimatePresence mode="wait">
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`px-5 py-4 rounded-xl mt-2 font-['Outfit'] text-[14px] ${
                    status === 'loading' ? 'bg-[rgba(59,175,212,0.08)] border border-[rgba(59,175,212,0.2)] text-[#3BAFD4]' :
                    status === 'success' ? 'bg-[rgba(40,200,64,0.08)] border border-[rgba(40,200,64,0.2)] text-green-400' :
                    'bg-[rgba(255,95,87,0.08)] border border-[rgba(255,87,87,0.2)] text-red-400'
                  }`}
                >
                  {status === 'loading' && 'Processing your enquiry with our AI…'}
                  {status === 'error' && 'Something went wrong. Please email us directly at hello@calderr.ai'}
                  {status === 'success' && (
                    <div>
                      <strong className="block mb-3">✓ Message received!</strong>
                      <p className="mb-2">Here's a preview of your personalised confirmation:</p>
                      <em className="block whitespace-pre-wrap text-[13px] opacity-90">{reply}</em>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>
    </section>
  );
}
