import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Homepage sections
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import AuditPitch from './components/sections/AuditPitch';
import WhyUs from './components/sections/WhyUs';
import FoundersSection from './components/sections/FoundersSection';
import FinalCTA from './components/sections/FinalCTA';

// Audit tool pages — UNTOUCHED
import ReportDemo from './pages/ReportDemo';
import ReportView from './pages/ReportView';

// New pages
import AuditPage from './pages/AuditPage';
import BuildPage from './pages/BuildPage';
import LeasingConcierge from './pages/build/LeasingConcierge';
import MaintenanceTriage from './pages/build/MaintenanceTriage';
import OwnerReporting from './pages/build/OwnerReporting';
import VendorInvoices from './pages/build/VendorInvoices';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Insights from './pages/Insights';
import InsightPost from './pages/InsightPost';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AuditPitch />
        <HowItWorks />
        <WhyUs />
        <FoundersSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <main className="pt-[64px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Audit landing page */}
      <Route path="/audit" element={<PageWrapper><AuditPage /></PageWrapper>} />

      {/* Build pages */}
      <Route path="/build" element={<PageWrapper><BuildPage /></PageWrapper>} />
      <Route path="/build/leasing-concierge" element={<PageWrapper><LeasingConcierge /></PageWrapper>} />
      <Route path="/build/maintenance-triage" element={<PageWrapper><MaintenanceTriage /></PageWrapper>} />
      <Route path="/build/owner-reporting" element={<PageWrapper><OwnerReporting /></PageWrapper>} />
      <Route path="/build/vendor-invoices" element={<PageWrapper><VendorInvoices /></PageWrapper>} />

      {/* Other pages */}
      <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/insights" element={<PageWrapper><Insights /></PageWrapper>} />
      <Route path="/insights/:slug" element={<PageWrapper><InsightPost /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
      <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />

      {/* Audit tool — PRESERVED EXACTLY */}
      <Route path="/report/demo" element={<ReportDemo />} />
      <Route path="/report/:id" element={<ReportView />} />
    </Routes>
  );
}

export default App;
