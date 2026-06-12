import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    id: 'footer-whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.link/lrm669',
    color: '#25D366',
    hoverBg: '#25D36615',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'footer-linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/calderr/',
    color: '#0A66C2',
    hoverBg: '#0A66C215',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'footer-instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/calderr.official/',
    color: '#E1306C',
    hoverBg: '#E1306C15',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'footer-x',
    label: 'X (Twitter)',
    href: 'https://x.com/officialcalderr',
    color: '#000000',
    hoverBg: '#00000012',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// Email contact with subject/body pre-filled
const EMAIL = 'contact@calderr.com';
const EMAIL_SUBJECT = 'PMC Audit Inquiry';
const EMAIL_BODY = 'Hi Calderr team,\n\nI would like to learn more about your PMC responsiveness audit service.\n\nCompany name:\nWebsite:\nNumber of units managed:\n\nBest,';

function EmailModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-[200] backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-x-4 bottom-6 sm:inset-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[201] bg-white rounded-card border border-black/[0.09] shadow-2xl p-7 max-w-md w-full mx-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-1">Send us a message</h3>
              <p className="text-[13px] text-gray-500 leading-[1.55]">
                Click the button below to open your email app with our address pre-filled, or copy the address directly.
              </p>
            </div>

            {/* Email address display */}
            <div className="flex items-center gap-2.5 bg-[#F7F8FA] border border-black/[0.08] rounded-btn px-4 py-3 mb-4">
              <span className="text-[13px] text-gray-700 font-medium flex-1 select-all">{EMAIL}</span>
              <button
                onClick={() => navigator.clipboard.writeText(EMAIL)}
                className="text-[11px] font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
                title="Copy to clipboard"
              >
                Copy
              </button>
            </div>

            {/* Open in mail client */}
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-[14px] font-medium rounded-btn transition-colors mb-3"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              Open in email app
            </a>
            <p className="text-center text-[11px] text-gray-400">We reply within 1 business day.</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-black/[0.08] bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/logo.png" alt="CalderR Logo" className="h-5 w-auto object-contain" />
                <span className="text-[17px] font-semibold tracking-[-0.3px] text-gray-900">
                  CalderR
                </span>
              </div>
              <p className="text-[13px] text-gray-500 leading-[1.65] max-w-[240px]">
                The only automated responsiveness audit service built specifically for property management companies.
              </p>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.6px] mb-4">
                Contact us
              </h4>
              <div className="flex flex-col gap-3">

                {/* WhatsApp */}
                <a
                  id="footer-whatsapp-link"
                  href="https://wa.link/lrm669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-[#25D366] group-hover:border-[#25D366]/40 group-hover:bg-[#25D36610] transition-all shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-medium">Chat on WhatsApp</span>
                    <span className="text-[11px] text-gray-400">Fastest response</span>
                  </span>
                </a>

                {/* Email */}
                <button
                  id="footer-email-btn"
                  onClick={() => setEmailOpen(true)}
                  className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  <span className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center text-brand group-hover:border-brand/40 group-hover:bg-brand-tint transition-all shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-medium">Send us an email</span>
                    <span className="text-[11px] text-gray-400">contact@calderr.com</span>
                  </span>
                </button>

              </div>
            </div>

            {/* Follow column */}
            <div>
              <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.6px] mb-4">
                Follow us
              </h4>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ id, label, href, color, hoverBg, icon }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[13px] text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span
                      className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center transition-all shrink-0"
                      style={{ color }}
                    >
                      {icon}
                    </span>
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-black/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-gray-400">
              © 2026 CalderR · PMC responsiveness auditing
            </p>
            <p className="text-[12px] text-gray-400">
              calderr.com
            </p>
          </div>
        </div>
      </footer>

      {/* Email modal */}
      <EmailModal open={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
}
