import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import LGSF from './pages/LGSF';
import Structural from './pages/Structural';
import Manufacturing from './pages/Manufacturing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-orange-600/30 selection:text-orange-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lgsf" element={<LGSF />} />
          <Route path="/structural" element={<Structural />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
