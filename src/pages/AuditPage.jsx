import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const WORKER_URL = import.meta.env.VITE_WORKER_URL;
const WORKER_SECRET = import.meta.env.VITE_WORKER_SECRET;

function nameFromUrl(url) {
  try {
    const host = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    return host.replace(/^www\./, '').split('.')[0] || host;
  } catch {
    return url;
  }
}

const AUDIT_COVERS = [
  {
    num: '01',
    title: 'Response time',
    desc: 'We submit a realistic test inquiry through your website and Zillow listings. We measure how fast you respond, through which channel, and whether you follow up if there\'s no reply.',
  },
  {
    num: '02',
    title: 'Response quality',
    desc: 'We score the actual response on tone, pre-qualification, tour offer, and next steps. Most operators answer but don\'t sell.',
  },
  {
    num: '03',
    title: 'Channel coverage',
    desc: 'We check whether you\'re reachable via SMS, web chat, email, phone, and after hours. The channel a prospect prefers should not determine whether they hear back.',
  },
  {
    num: '04',
    title: 'Listing presence',
    desc: 'We audit your listings across Zillow, Apartments.com, Rent.com, Trulia, and Hotpads. Photos, descriptions, pricing transparency, and contact methods.',
  },
  {
    num: '05',
    title: 'Tenant self-serve',
    desc: 'We check whether tenants and prospects can get answers without waiting for your team. FAQ pages, portals, knowledge bases.',
  },
];

const HOW_STEPS = [
  { num: '01', title: 'Submit your company', desc: 'Fill out the form below. Takes 30 seconds.' },
  { num: '02', title: 'We run the audit', desc: 'Our system tests your public-facing leasing operation. We use unique test personas with clear disclosure within 24 hours so your team knows what\'s happening.' },
  { num: '03', title: 'You get the report', desc: 'We email your branded PDF within 5 business days. Sometimes faster.' },
  { num: '04', title: 'Optional conversation', desc: 'If you want to discuss findings or what to do about them, book a call. If you don\'t, we won\'t chase you.' },
];

const FAQ_ITEMS = [
  {
    q: 'Is this really free?',
    a: 'Yes. The audit produces real insight whether you ever hire us. We use it as our calling card.',
  },
  {
    q: 'How do you run the test inquiries?',
    a: 'We submit through your public contact forms and listings using unique test personas. Within 24 hours, we disclose to your team that the inquiry was part of an industry study. You can request your data to be excluded at any point.',
  },
  {
    q: 'What do you actually do with my data?',
    a: 'We use it to produce your branded report and, optionally, to compute anonymized aggregate statistics across operators in your metro. Your specific company is never identified publicly. You can opt out of aggregate use.',
  },
  {
    q: 'Will you spam me afterward?',
    a: 'No. We send the report. We follow up once a week later asking if you want to discuss. After that we stop unless you reach out.',
  },
  {
    q: 'How long does it take?',
    a: 'Most reports go out within 5 business days. Active audits with response measurement take that long because we wait 72 hours for your team to respond to the test inquiry.',
  },
  {
    q: 'Who sees the report?',
    a: 'Only you, unless you choose to share it. We do not publish individual reports.',
  },
];

const ROLE_OPTIONS = [
  'COO',
  'Director of Operations',
  'Regional Manager',
  'Property Manager',
  'Owner',
  'Other',
];

const UNIT_OPTIONS = [
  'Under 200',
  '200 to 500',
  '500 to 1,000',
  '1,000 to 2,000',
  '2,000+',
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[14px] font-medium text-text-primary">{q}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round"
          className={`shrink-0 ml-4 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] text-text-secondary leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AuditForm() {
  const [fields, setFields] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    role: '',
    units: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }));

  function validateEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }

  const isReady = fields.fullName.trim() && fields.email.trim() && fields.company.trim() && fields.website.trim() && validateEmail(fields.email);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isReady) return;

    const raw = fields.website.trim();
    const websiteUrl = raw.startsWith('http') ? raw : `https://${raw}`;
    const name = fields.company.trim() || nameFromUrl(websiteUrl);

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${WORKER_URL}/admin/start-fresh-audit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WORKER_SECRET}`,
        },
        body: JSON.stringify({
          name,
          websiteUrl,
          email: fields.email.trim(),
          fullName: fields.fullName.trim(),
          role: fields.role,
          units: fields.units,
        }),
      });

      const text = await res.text();
      let data = {};
      try { data = text ? JSON.parse(text) : {}; } catch {
        throw new Error(`Server returned invalid response: ${text.slice(0, 120) || 'Empty response'}`);
      }
      if (!res.ok) throw new Error(data.error || 'Audit failed to start');
      navigate(`/report/${data.auditId}`);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-3 bg-[#111114] border border-white/[0.10] rounded-btn text-[14px] text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all disabled:opacity-50";
  const labelClass = "block text-[12px] font-medium text-text-secondary mb-1.5";

  return (
    <form id="audit-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="audit-full-name" className={labelClass}>Full name *</label>
        <input id="audit-full-name" type="text" placeholder="Jane Smith" value={fields.fullName} onChange={set('fullName')} disabled={loading} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="audit-email" className={labelClass}>Work email *</label>
        <input id="audit-email" type="email" placeholder="jane@yourpmc.com" value={fields.email} onChange={set('email')} disabled={loading} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="audit-company" className={labelClass}>Company name *</label>
        <input id="audit-company" type="text" placeholder="Meridian Property Group" value={fields.company} onChange={set('company')} disabled={loading} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="audit-website" className={labelClass}>Company website *</label>
        <input id="audit-website" type="text" placeholder="yourpmc.com" value={fields.website} onChange={set('website')} disabled={loading} className={inputClass} required />
      </div>
      <div>
        <label htmlFor="audit-role" className={labelClass}>Your role</label>
        <select id="audit-role" value={fields.role} onChange={set('role')} disabled={loading} className={inputClass + " cursor-pointer"}>
          <option value="">Select role (optional)</option>
          {ROLE_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="audit-units" className={labelClass}>Approximate unit count</label>
        <select id="audit-units" value={fields.units} onChange={set('units')} disabled={loading} className={inputClass + " cursor-pointer"}>
          <option value="">Select unit count (optional)</option>
          {UNIT_OPTIONS.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <button
        id="audit-submit-btn"
        type="submit"
        disabled={loading || !isReady}
        className="mt-2 w-full py-3.5 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-btn transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Starting audit…
          </>
        ) : 'Get my audit'}
      </button>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[13px] text-red-400 text-center"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-center text-[12px] text-text-muted">
        We respect your inbox. No newsletter signup. No auto-pitch.
      </p>
    </form>
  );
}

export default function AuditPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [coversRef, coversInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* Meta is set in index.html; per-page meta would need react-helmet */}

      {/* Hero */}
      <section ref={heroRef} className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/[0.05] blur-[60px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">Free audit</div>
            <h1 className="font-display text-[clamp(28px,5vw,52px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              We'll audit your leasing operation against 60 benchmarks. Free.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] mb-8 max-w-[520px] mx-auto">
              Real test inquiries on your public listings. Real measurements. Branded PDF report delivered in 5 business days. No pitch attached.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#audit-form"
                onClick={e => { e.preventDefault(); document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors"
              >
                Get my audit
              </a>
              <a
                href="/report/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/[0.12] hover:border-white/[0.2] text-text-secondary hover:text-text-primary text-[14px] font-medium rounded-btn transition-colors"
              >
                View sample report →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we measure */}
      <section ref={coversRef} className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="accent-label mb-3">What we measure</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px]">
              Five categories. Sixty benchmarks.
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {AUDIT_COVERS.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -14 }}
                animate={coversInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-6 py-6 border-b border-white/[0.06] last:border-0"
              >
                <span className="font-mono text-[13px] font-semibold text-accent/60 shrink-0 mt-0.5 w-6">{num}</span>
                <div>
                  <div className="text-[15px] font-semibold text-text-primary mb-2">{title}</div>
                  <p className="text-[14px] text-text-secondary leading-[1.6]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample report teaser */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-label mb-3">Sample report</div>
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-4">
            This is what you get
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.65] mb-8 max-w-[480px] mx-auto">
            A 4 to 6 page PDF report, branded with your company name on the cover. Overall score out of 100. Section-by-section breakdown with screenshots of your actual responses (or lack of). Comparison to anonymized peer benchmarks. Three specific recommendations.
          </p>
          <a
            href="/report/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 hover:border-accent text-accent text-[14px] font-medium rounded-btn transition-colors"
          >
            View sample report
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </section>

      {/* How it works */}
      <section ref={stepsRef} className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="accent-label mb-3">Process</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px]">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HOW_STEPS.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 14 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#111114] border border-white/[0.07] rounded-card p-5"
              >
                <div className="font-mono text-[11px] font-semibold text-accent mb-3">{num}</div>
                <div className="text-[14px] font-semibold text-text-primary mb-2">{title}</div>
                <p className="text-[13px] text-text-secondary leading-[1.6]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-b border-white/[0.06] bg-[#0D0D10]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="accent-label mb-3">FAQ</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px]">
              Common questions
            </h2>
          </div>
          <div>
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <FAQItem key={i} q={q} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="audit-form-section" className="px-6 py-20 border-b border-white/[0.06]">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <div className="accent-label mb-3">Get started</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] font-bold text-text-primary tracking-[-0.6px] mb-3">
              Get your audit
            </h2>
            <p className="text-[14px] text-text-secondary">
              Takes 30 seconds. Report delivered within 5 business days.
            </p>
          </div>
          <AuditForm />
        </div>
      </section>

      {/* Final reassurance */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] font-bold text-text-primary tracking-[-0.5px] mb-4">
            Still on the fence?
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.65]">
            The audit is real, it's free, and it's specific to your operation. Worst case you get a useful PDF and never hear from us again. Best case you find a leak that costs your operation real money and decide what to do about it.
          </p>
        </div>
      </section>
    </>
  );
}
