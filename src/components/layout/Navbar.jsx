import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'What we build', href: '/build' },
  { label: 'Case studies',  href: '/case-studies' },
  { label: 'About',         href: '/about' },
  { label: 'Insights',      href: '/insights' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Handle hash scroll on home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const handleClose = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/[0.07] py-3'
            : 'bg-transparent border-b border-white/[0.05] py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 select-none group">
            <img
              src="/logo.png"
              alt="CalderR"
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  location.pathname.startsWith(link.href)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-[13px] text-text-secondary hover:text-text-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/audit"
              className="text-[13px] px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-btn font-medium transition-colors"
            >
              Get free audit
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/audit"
              onClick={handleClose}
              className="text-[12px] px-3 py-1.5 bg-accent hover:bg-accent-dark text-white rounded-btn font-medium transition-colors"
            >
              Free audit
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[57px] left-0 right-0 z-[99] bg-[#0F0F12] border-b border-white/[0.07] shadow-xl md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={handleClose}
                    className="block py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary border-b border-white/[0.05] last:border-0 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="block py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
