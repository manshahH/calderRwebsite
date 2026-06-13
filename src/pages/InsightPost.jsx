import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { POSTS } from './Insights';

function renderBody(body) {
  const lines = body.trim().split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <h3 key={i} className="text-[16px] font-semibold text-text-primary mt-6 mb-2">
          {line.replace(/\*\*/g, '')}
        </h3>
      );
    }
    if (line.trim() === '') return <div key={i} className="h-2" />;
    return (
      <p key={i} className="text-[15px] text-text-secondary leading-[1.75]">
        {line}
      </p>
    );
  });
}

export default function InsightPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="px-6 py-24 text-center">
        <h1 className="font-display text-[28px] font-bold text-text-primary mb-4">Post not found</h1>
        <Link to="/insights" className="text-accent hover:text-blue-300 transition-colors text-[14px]">← Back to Insights</Link>
      </div>
    );
  }

  return (
    <article className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Back */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-secondary transition-colors mb-8"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Insights
          </Link>

          {/* Category */}
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-4 block"
            style={{ color: post.categoryColor }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-[clamp(24px,4vw,38px)] font-bold text-text-primary tracking-[-0.8px] leading-[1.2] mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[12px] text-text-muted mb-10 pb-8 border-b border-white/[0.06]">
            <span>CalderR</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-3">
            {renderBody(post.body)}
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-white/[0.06] text-center">
            <p className="text-[15px] text-text-secondary mb-5">
              Want to see your own numbers?
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-semibold rounded-btn transition-colors"
            >
              Get your free audit →
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
