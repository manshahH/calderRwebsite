import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="accent-label mb-4">Legal</div>
          <h1 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.7px] mb-2">
            Terms of Service
          </h1>
          <p className="text-[13px] text-text-muted mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-[14px] text-text-secondary leading-[1.75]">
            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">1. The audit service</h2>
              <p>CalderR's leasing performance audit is a diagnostic service. By requesting an audit, you authorize CalderR to submit test inquiries to your public-facing leasing channels using clearly disclosed test personas. CalderR will disclose the nature of these inquiries to your team within 24 hours of submission.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">2. Accuracy of information</h2>
              <p>Audit results reflect the state of your leasing operation at the time of testing. Results are provided for informational purposes only and are not a guarantee of future performance. CalderR makes no warranties as to the completeness or accuracy of the report findings.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">3. Free audit</h2>
              <p>The audit service is provided free of charge. CalderR reserves the right to limit the number of audits per company. The free audit does not obligate you to purchase any services from CalderR.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">4. Paid services</h2>
              <p>Paid build and retainer services are governed by separate service agreements signed between CalderR and the client. These terms do not apply to paid engagements.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">5. Limitation of liability</h2>
              <p>CalderR is not liable for any business decisions made based on audit report findings. The report is a diagnostic tool, not professional business advice.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">6. Governing law</h2>
              <p>These terms are governed by applicable law. For questions, contact us at <a href="mailto:hello@calderr.com" className="text-accent hover:text-blue-300 transition-colors">hello@calderr.com</a>.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <Link to="/" className="text-[13px] text-text-muted hover:text-text-secondary transition-colors">← Back to home</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
