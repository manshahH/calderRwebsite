import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="accent-label mb-4">Legal</div>
          <h1 className="font-display text-[clamp(24px,3.5vw,36px)] font-bold text-text-primary tracking-[-0.7px] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-text-muted mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-[14px] text-text-secondary leading-[1.75]">
            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">1. What we collect</h2>
              <p>When you request an audit, we collect your name, work email address, company name, and website URL. We also collect your role and unit count if you provide them. We use this information solely to produce your audit report and, optionally, to follow up with the results.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">2. Audit test data</h2>
              <p>As part of the audit, we submit test inquiries to your public-facing contact channels using fictional test personas. We disclose this to your team within 24 hours of submission. You can request exclusion from the study at any point by emailing hello@calderr.com.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">3. Aggregate statistics</h2>
              <p>We may use anonymized data from audits to compute aggregate statistics about leasing responsiveness across operators in a given market. No individual company is ever identified in these aggregates. You can opt out of aggregate use by emailing us before or after your audit.</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">4. Data retention</h2>
              <p>We retain your audit data for up to 24 months unless you request deletion. To request deletion, email hello@calderr.com with the subject line "Data deletion request."</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">5. Third parties</h2>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may use third-party tools for email delivery and analytics (aggregated and non-identifying).</p>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-text-primary mb-3">6. Contact</h2>
              <p>For privacy questions, contact us at <a href="mailto:hello@calderr.com" className="text-accent hover:text-blue-300 transition-colors">hello@calderr.com</a>.</p>
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
