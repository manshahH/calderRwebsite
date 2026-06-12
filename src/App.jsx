import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import AuditCTA from './components/sections/AuditCTA';
import Footer from './components/layout/Footer';
import ReportDemo from './pages/ReportDemo';
import ReportView from './pages/ReportView';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <AuditCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report/demo" element={<ReportDemo />} />
      <Route path="/report/:id" element={<ReportView />} />
    </Routes>
  );
}

export default App;
