import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const WORKER_URL = import.meta.env.VITE_WORKER_URL;
const WORKER_SECRET = import.meta.env.VITE_WORKER_SECRET;

const POLL_INTERVAL_MS = 10_000; // 10 seconds

// Status that means the audit is still in progress
const PENDING_STATUSES = new Set([
  'pending', 'crawling', 'crawl_complete',
  'submitting_inquiry', 'inquiry_submitted',
  'generating_report', 'scored', 'manual_running',
]);

const STATUS_LABELS = {
  pending:            { label: 'Queued — starting shortly',          step: 1 },
  crawling:           { label: 'Crawling your website…',              step: 2 },
  crawl_complete:     { label: 'Website analysed — preparing inquiry', step: 2 },
  submitting_inquiry: { label: 'Submitting test inquiry…',            step: 3 },
  inquiry_submitted:  { label: 'Inquiry submitted — monitoring replies', step: 3 },
  scored:             { label: 'Responses scored — building report…', step: 4 },
  generating_report:  { label: 'Generating your PDF report…',         step: 4 },
  report_generated:   { label: 'Report ready — sending now…',         step: 4 },
  sending_report:     { label: 'Delivering report to your inbox…',    step: 4 },
  complete:           { label: 'Audit complete!',                      step: 5 },
};

const STEPS = [
  'Queued',
  'Website crawl',
  'Inquiry submitted',
  'Report generated',
  'Complete',
];

function StatusStepper({ status }) {
  const currentStep = STATUS_LABELS[status]?.step ?? 1;
  return (
    <div className="flex items-center gap-0 w-full max-w-md mx-auto mb-8">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const done = stepNum < currentStep;
        const active = stepNum === currentStep;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors ${
                done    ? 'bg-brand text-white' :
                active  ? 'bg-brand text-white ring-4 ring-brand/20' :
                          'bg-gray-100 text-gray-400'
              }`}>
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : stepNum}
              </div>
              <span className={`text-[10px] font-medium whitespace-nowrap ${active ? 'text-brand' : done ? 'text-gray-500' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-[2px] mb-4 mx-1 rounded-full transition-colors ${done ? 'bg-brand' : 'bg-gray-100'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function PulsingDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-50"/>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"/>
    </span>
  );
}

export default function ReportView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [audit, setAudit] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);
  const intervalRef = useRef(null);

  async function fetchStatus() {
    try {
      const res = await fetch(
        `${WORKER_URL}/admin/audit-status?auditId=${encodeURIComponent(id)}`,
        { headers: { 'Authorization': `Bearer ${WORKER_SECRET}` } }
      );
      
      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        throw new Error(`Server returned invalid response: ${text.slice(0, 120) || 'Empty response'}`);
      }

      if (!res.ok) throw new Error(data.error || 'Failed to fetch status');
      setAudit(data.audit);
      setFetchError(null);
      setLastChecked(new Date());

      // Stop polling once complete or report_generated/sending_report
      if (data.audit?.status === 'complete' || data.audit?.status === 'report_generated' || data.audit?.status === 'sending_report') {
        clearInterval(intervalRef.current);
      }
    } catch (err) {
      setFetchError(err.message);
    }
  }

  useEffect(() => {
    fetchStatus(); // immediate first call
    intervalRef.current = setInterval(fetchStatus, POLL_INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [id]);

  const status = audit?.status ?? 'pending';
  const isComplete = status === 'complete' || status === 'report_generated' || status === 'sending_report';
  const isPending = PENDING_STATUSES.has(status);
  const statusInfo = STATUS_LABELS[status] ?? STATUS_LABELS['pending'];

  // Extract PDF filename from D1 data if available
  const pdfFilename = audit?.reportPdfKey
    ? audit.reportPdfKey.replace('reports/', '')
    : audit?.id
    ? `audit-${audit.id}.pdf`
    : null;

  const pdfUrl = pdfFilename ? `${WORKER_URL}/reports/${pdfFilename}` : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[72px]">
        <div className="max-w-2xl mx-auto px-6 py-14">

          {/* Audit not found */}
          {fetchError && !audit && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-[48px] mb-4">🔍</div>
              <h1 className="text-[22px] font-semibold text-gray-900 mb-2">Audit not found</h1>
              <p className="text-[14px] text-gray-500 mb-6">{fetchError}</p>
              <button
                onClick={() => navigate('/#audit-cta')}
                className="px-5 py-2.5 bg-brand text-white text-[14px] font-medium rounded-btn hover:bg-brand-dark transition-colors"
              >
                Start a new audit
              </button>
            </motion.div>
          )}

          {/* Loading initial state */}
          {!audit && !fetchError && (
            <div className="flex flex-col items-center py-20 gap-4">
              <svg className="animate-spin w-8 h-8 text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
              <p className="text-[14px] text-gray-400">Loading audit status…</p>
            </div>
          )}

          {/* Audit found */}
          {audit && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

              {/* Header */}
              <div className="mb-8">
                <div className="text-[11px] font-semibold text-brand-tint-text uppercase tracking-[0.6px] mb-2">
                  PMC Responsiveness Audit
                </div>
                <h1 className="text-[26px] font-semibold text-gray-900 tracking-[-0.4px]">
                  {audit.pmcName ?? 'Your PMC'}
                </h1>
                <p className="text-[13px] text-gray-400 mt-1">
                  Audit ID: <span className="font-mono text-[12px]">{id}</span>
                </p>
              </div>

              {/* Stepper */}
              <StatusStepper status={status} />

              {/* Status card */}
              <div className={`rounded-card border p-6 mb-8 ${
                isComplete
                  ? 'bg-brand-tint border-brand/20'
                  : 'bg-[#F7F8FA] border-black/[0.08]'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  {isComplete ? (
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                  ) : (
                    <PulsingDot />
                  )}
                  <span className={`text-[14px] font-semibold ${isComplete ? 'text-brand-tint-text' : 'text-gray-900'}`}>
                    {statusInfo.label}
                  </span>
                </div>

                {!isComplete && (
                  <p className="text-[13px] text-gray-500 leading-[1.6] pl-[26px]">
                    Your audit is running automatically. This page refreshes every 10 seconds. Full reports are typically delivered within 48 hours — we'll also email the results when ready.
                  </p>
                )}

                {isComplete && pdfUrl && (
                  <div className="pl-[26px]">
                    <p className="text-[13px] text-brand-tint-text mb-4 leading-[1.6]">
                      Your audit report is ready. Click below to view or download the PDF.
                    </p>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-[14px] font-medium rounded-btn transition-colors"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="12" y1="18" x2="12" y2="12"/>
                        <line x1="9" y1="15" x2="15" y2="15"/>
                      </svg>
                      View full report (PDF)
                    </a>
                  </div>
                )}

                {isComplete && !pdfUrl && (
                  <p className="text-[13px] text-brand-tint-text pl-[26px]">
                    Report is being finalised — check your email shortly.
                  </p>
                )}
              </div>

              {/* Technical details (collapsible) */}
              <details className="group border border-black/[0.07] rounded-card overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors list-none">
                  <span>Audit details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform group-open:rotate-180" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="px-5 py-4 bg-[#F7F8FA] border-t border-black/[0.06]">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[12px]">
                    {[
                      ['Status', audit.status],
                      ['Mode', audit.mode],
                      ['Website', audit.websiteUrl ?? '—'],
                      ['Started', audit.createdAt ? new Date(audit.createdAt * 1000).toLocaleString() : '—'],
                      ['Updated', audit.updatedAt ? new Date(audit.updatedAt * 1000).toLocaleString() : '—'],
                      ['Persona name', audit.testPersonaName ?? '—'],
                      ['Persona email', audit.testPersonaEmail ?? '—'],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-gray-400">{k}</dt>
                        <dd className="font-medium text-gray-700 break-all">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {lastChecked && (
                    <p className="mt-4 text-[11px] text-gray-400">
                      Last checked: {lastChecked.toLocaleTimeString()} · refreshes every 10s
                    </p>
                  )}
                </div>
              </details>

              {/* Bottom CTA */}
              {!isComplete && (
                <div className="mt-8 pt-6 border-t border-black/[0.07] text-center">
                  <p className="text-[13px] text-gray-500 mb-3">
                    Want to audit another location?
                  </p>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#audit-cta');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else navigate('/#audit-cta');
                    }}
                    className="text-[13px] font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Start another audit →
                  </button>
                </div>
              )}

            </motion.div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
