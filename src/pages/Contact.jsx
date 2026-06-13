import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ─── Formspree setup ─────────────────────────────────────────────────────────
// 1. Go to https://formspree.io/  →  sign up free  →  create a form
// 2. Copy your form endpoint (looks like: https://formspree.io/f/xabcdefg)
// 3. Paste it here:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjyorle';
// ─────────────────────────────────────────────────────────────────────────────

const EMAIL = 'hello@calderr.com';

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }));
  const isReady = fields.name.trim() && fields.email.trim() && fields.company.trim() && fields.message.trim();

  const inputClass = "w-full px-4 py-3 bg-[#111114] border border-white/[0.10] rounded-btn text-[14px] text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all";
  const labelClass = "block text-[12px] font-medium text-text-secondary mb-1.5";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isReady) return;

    setStatus('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          company: fields.company,
          message: fields.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">Contact</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-5">
              Let's talk.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65] max-w-[440px]">
              The fastest path is the free audit. If you'd rather just have a conversation, drop us a note here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-12 h-12 rounded-full bg-accent/[0.12] border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-[22px] font-semibold text-text-primary mb-2">Message sent.</h2>
                <p className="text-[14px] text-text-secondary mb-6">We reply within 1 business day.</p>
                <Link to="/" className="text-[13px] text-accent hover:text-blue-300 transition-colors">← Back to home</Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={set('name')}
                    required
                    disabled={status === 'loading'}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>Work email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="jane@yourpmc.com"
                    value={fields.email}
                    onChange={set('email')}
                    required
                    disabled={status === 'loading'}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className={labelClass}>Company *</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Meridian Property Group"
                    value={fields.company}
                    onChange={set('company')}
                    required
                    disabled={status === 'loading'}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>Message *</label>
                  <textarea
                    id="contact-message"
                    placeholder="What's on your mind?"
                    value={fields.message}
                    onChange={set('message')}
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Error state */}
                {status === 'error' && (
                  <p className="text-[13px] text-red-400 text-center">
                    Something went wrong. Email us directly at{' '}
                    <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isReady || status === 'loading'}
                  className="w-full py-3 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-btn transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : 'Send'}
                </button>

                <p className="text-center text-[12px] text-text-muted">
                  Or email us directly at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-accent hover:text-blue-300 transition-colors">{EMAIL}</a>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
