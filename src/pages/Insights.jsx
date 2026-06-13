import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const POSTS = [
  {
    slug: 'phoenix-leasing-response-time-study',
    category: 'Audit Findings',
    categoryColor: '#3B82F6',
    title: 'We tested 50 Phoenix property management companies on leasing response time. Here\'s what we found.',
    excerpt: 'We submitted identical test inquiries to 50 Phoenix-area property management companies over two weeks. The results were worse than we expected.',
    date: 'June 10, 2026',
    readTime: '6 min read',
    body: `We submitted a realistic leasing inquiry — "looking for a 2BR, moving in August, budget around $1,800" — to 50 property management companies across the Phoenix metro. The inquiry went through their public contact forms and Zillow listings. We measured response time, response quality, and follow-up behavior.

**The numbers:**
- Average response time: 4.7 hours
- Companies that never responded: 18 of 50 (36%)
- Companies that responded within 15 minutes: 4 of 50 (8%)
- Companies that offered a tour on the first response: 11 of 50 (22%)

**What this means:**
After 1 hour, prospect conversion probability drops by roughly 60%. After 24 hours, it drops by 90%. Most of these companies are running their leasing operations as if prospects will wait indefinitely. They won't.

The best-performing companies had a consistent pattern: a brief auto-acknowledgement within seconds, followed by a personal response from a leasing agent within 30 minutes, followed by a tour offer. The worst performers had silence for days — and three of them responded to a months-old inquiry a week later.

**The fix:**
Most of these failures are automatable. An AI leasing concierge running in the background would have handled the acknowledgement and initial qualification immediately, leaving the human agent to close the tour. That's the gap we build into.`,
  },
  {
    slug: 'how-ai-leasing-concierge-works',
    category: 'Technical',
    categoryColor: '#A78BFA',
    title: 'How an AI leasing concierge actually works (and why most chatbots in multifamily fail).',
    excerpt: 'The chatbot widget on your website is not a leasing concierge. Here\'s what makes the difference.',
    date: 'June 3, 2026',
    readTime: '8 min read',
    body: `Most property management companies experimenting with AI start with a chatbot widget. A small bubble in the corner of their website. A FAQ bot. This is not a leasing concierge, and treating it like one is a mistake.

**What a chatbot does:**
Answers questions from visitors who are already on your website. Maybe 5-10% of your inbound leasing traffic reaches your website. The rest come through Zillow, Apartments.com, email, and phone. A website chatbot ignores 90% of your leads.

**What a leasing concierge does:**
Monitors all inbound channels simultaneously. Responds to an inquiry on Zillow within seconds. Picks up the SMS thread from a prospect who texted your office number. Sends a follow-up to the email that went unacknowledged. It's infrastructure, not a widget.

**The technical difference:**
A production leasing concierge has: (1) channel connectors for SMS, email, and web chat, (2) a structured qualification flow tied to your actual inventory, (3) direct calendar integration for tour booking, (4) fair-housing compliance logic, and (5) a human escalation path for anything outside its scope.

Building this is a 4-8 week project for an experienced team. It's not a SaaS subscription. It's a custom deployment against your specific PMS and channels.

**Why most fail:**
They use generic chatbot tools not designed for leasing. They don't integrate with the PMS. They don't have channel coverage beyond the website. They lack fair-housing guardrails. And when they break, no one monitors them.`,
  },
  {
    slug: 'why-property-management-ai-startups-will-fail',
    category: 'Opinion',
    categoryColor: '#F59E0B',
    title: 'Why most property management AI startups will fail in the next 24 months.',
    excerpt: 'The multifamily tech wave is producing a lot of AI tools. Most of them will be gone by 2027. Here\'s why.',
    date: 'May 27, 2026',
    readTime: '5 min read',
    body: `Every month there's a new "AI for property management" pitch in the inbox. AI for leasing. AI for maintenance. AI for owner communication. Most of these products will fail. Here's why.

**They're selling to the wrong person.**
Most multifamily AI startups sell to the COO or technology decision-maker. But the ROI lives at the operational level — with the leasing team, the maintenance coordinator, the accounting staff. If the people who do the work don't see immediate value, no C-suite mandate will save the product.

**They don't understand the operations.**
Ask the founders of most proptech AI companies how long a maintenance work order sits open on average in a 500-unit portfolio. Most can't answer. Ask them how fair-housing rules interact with automated leasing responses. Same. You can't automate a workflow you don't understand.

**They're building horizontal tools in a vertical market.**
Generic AI assistants that "help with property management" don't compete against doing nothing. They compete against purpose-built tools that integrate deeply with AppFolio, Yardi, Buildium, and Rent Manager. Horizontal wins on breadth; vertical wins on depth. In property management, depth wins.

**What survives:**
The tools that survive the next 24 months will be the ones that: (1) integrate at depth with the major PMS platforms, (2) are built by people who understand the operational workflows, and (3) can show specific, measurable ROI in hours saved and revenue protected. Everything else is a demo.

We're building in that third category. The audit is how we prove it before we're paid.`,
  },
];

export default function Insights() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="accent-label mb-4">Insights</div>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold text-text-primary tracking-[-1.2px] leading-[1.12] mb-4">
              Field notes from property management operations.
            </h1>
            <p className="text-[16px] text-text-secondary leading-[1.65]">
              Audit findings, technical breakdowns, and contrarian takes on AI in multifamily ops. New posts roughly weekly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map(({ slug, category, categoryColor, title, excerpt, date, readTime }, i) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  to={`/insights/${slug}`}
                  className="group block bg-[#111114] border border-white/[0.07] rounded-card p-6 card-hover h-full flex flex-col"
                >
                  {/* Category */}
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.06em] mb-4 self-start"
                    style={{ color: categoryColor }}
                  >
                    {category}
                  </span>

                  {/* Title */}
                  <h2 className="text-[16px] font-semibold text-text-primary leading-[1.45] mb-3 group-hover:text-white transition-colors flex-1">
                    {title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[13px] text-text-secondary leading-[1.6] mb-5">
                    {excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[11px] text-text-muted border-t border-white/[0.06] pt-4">
                    <span>{date}</span>
                    <span>{readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
