import { Link } from 'react-router-dom';

const PRODUCT_LINKS = [
  { label: 'What we build',     href: '/build' },
  { label: 'Get an audit',      href: '/audit' },
  { label: 'Case studies',      href: '/case-studies' },
];

const COMPANY_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact',  href: '/contact' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/calderr/', external: true },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms',   href: '/terms' },
];

function FooterLink({ href, label, external }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] text-text-muted hover:text-text-secondary transition-colors"
      >
        {label}
      </a>
    );
  }
  return (
    <Link
      to={href}
      className="text-[13px] text-text-muted hover:text-text-secondary transition-colors"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4 w-fit">
              <img
                src="/logo.png"
                alt="CalderR"
                className="h-6 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-text-muted leading-[1.7] max-w-[280px]">
              AI automation for property management operations.
            </p>
            <p className="text-[12px] text-text-muted mt-4">calderr.com</p>
          </div>

          {/* Product column */}
          <div>
            <h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.06em] mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ label, href, external }) => (
                <FooterLink key={label} href={href} label={label} external={external} />
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.06em] mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {COMPANY_LINKS.map(({ label, href, external }) => (
                <FooterLink key={label} href={href} label={label} external={external} />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-text-muted">
            © {year} CalderR. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-[12px] text-text-muted hover:text-text-secondary transition-colors"
              >
                {label}
              </Link>
            ))}
            <span className="text-[12px] text-text-muted">Built in {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
