import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const WORKER_URL = import.meta.env.VITE_WORKER_URL;
const WORKER_SECRET = import.meta.env.VITE_WORKER_SECRET;

// Derive a clean company name from the URL for the Worker
function nameFromUrl(url) {
  try {
    const host = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
    return host.replace(/^www\./, '').split('.')[0] || host;
  } catch {
    return url;
  }
}

export default function AuditCTA() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  function validateEmail(emailStr) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  }

  async function handleSubmit() {
    const raw = url.trim();
    const rawEmail = email.trim();
    if (!raw || !rawEmail) return;

    if (!validateEmail(rawEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    // Normalise — ensure it has a scheme for the Worker
    const websiteUrl = raw.startsWith('http') ? raw : `https://${raw}`;
    const name = nameFromUrl(websiteUrl);

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${WORKER_URL}/admin/start-fresh-audit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WORKER_SECRET}`,
        },
        body: JSON.stringify({ name, websiteUrl, email: rawEmail }),
      });

      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        throw new Error(`Server returned invalid response: ${text.slice(0, 120) || 'Empty response'}`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Audit failed to start');
      }

      // Redirect to the live report page with the real auditId
      navigate(`/report/${data.auditId}`);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <section
      id="audit-cta"
      ref={ref}
      className="px-6 py-16 bg-[#F7F8FA] border-b border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-[520px] mx-auto text-center"
        >
          <h2 className="text-[24px] font-semibold text-gray-900 tracking-[-0.3px] mb-2.5">
            See your PMC's audit score — free
          </h2>
          <p className="text-[14px] text-gray-500 leading-[1.6] mb-7">
            Enter your details below and we'll run a full audit. Report delivered to your inbox within 48 hours.
          </p>

          <div className="flex flex-col gap-3.5 max-w-[360px] mx-auto text-left">
            <div className="flex flex-col gap-1">
              <label htmlFor="audit-url-input" className="text-[12px] font-medium text-gray-600">
                PMC Website URL
              </label>
              <input
                id="audit-url-input"
                type="text"
                placeholder="yourpmc.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
                className="px-4 py-2.5 text-[14px] rounded-btn border border-black/[0.14] bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all disabled:opacity-50 w-full"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="audit-email-input" className="text-[12px] font-medium text-gray-600">
                Email Address
              </label>
              <input
                id="audit-email-input"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="px-4 py-2.5 text-[14px] rounded-btn border border-black/[0.14] bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all disabled:opacity-50 w-full"
              />
            </div>

            <button
              id="audit-submit-btn"
              onClick={handleSubmit}
              disabled={loading || !url.trim() || !email.trim() || !validateEmail(email)}
              className="mt-2 px-5 py-3 bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-btn transition-colors flex items-center justify-center gap-2 w-full shadow-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                  </svg>
                  Starting audit…
                </>
              ) : (
                'Run free check'
              )}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-[13px] text-[#E24B4A]"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <p className="mt-4 text-[12px] text-gray-400">
            No credit card required. Full report in 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
