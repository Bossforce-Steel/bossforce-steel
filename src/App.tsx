import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X,
  Construction,
  Ruler,
  ChevronRight,
  Factory,
  MessageCircle,
  Cpu,
  Layers,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Scroll to top or hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'LGSF', path: '/#lgsf' },
    { name: 'Structural', path: '/#structural' },
    { name: 'Manufacturing', path: '/#manufacturing' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="BossforceLogo.png" 
            alt="Bossforce Steel Logo" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className={`text-3xl md:text-5xl font-black tracking-tighter leading-none ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>
              BOSSFORCE <span className="text-orange-600">STEEL</span>
            </span>
            <span className={`text-[9px] md:text-[11px] uppercase tracking-[0.48em] font-bold mt-1 whitespace-nowrap ${isScrolled || !isHome ? 'text-slate-500' : 'text-white/60'}`}>
              Engineering safer tomorrow
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-orange-600 relative group ${isScrolled || !isHome ? 'text-slate-600' : 'text-white/90'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled || !isHome ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled || !isHome ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-8 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-900 font-bold text-lg uppercase tracking-widest border-b border-slate-50 pb-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="background.jpg" 
          alt="LGSF Structure Render" 
          className="w-full h-full object-cover opacity-50 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 bg-orange-600/20 border border-orange-500/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">Next-Gen Construction</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white leading-tight mb-12 tracking-tighter uppercase">
            ENGINEERING <span className="text-orange-600">SAFER</span> <br /> TOMORROW
          </h1>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/lgsf" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-orange-600/40">
              Explore LGSF Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/structural" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
              Our Projects
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="vertical-text text-white/20 font-black text-7xl tracking-tighter select-none">
          LGSF EXPERTS
        </div>
      </div>
    </section>
  );
};

const LGSFSection = ({ isPage = false }) => {
  return (
    <section id="lgsf" className={`py-32 bg-white overflow-hidden ${isPage ? 'pt-48' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="LGSF Fabrication.png" 
                  alt="LGSF Construction Site" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-50 rounded-full -z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 border-[20px] border-slate-50 rounded-3xl -z-0"></div>
              
              {/* Overlay Stat */}
              <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                <div className="text-3xl font-black text-orange-600 mb-1">3x Faster</div>
                <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Than traditional construction</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Light Gauge Steel Framing</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">The Smart Way to Build in J&K.</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              LGSF is a state-of-the-art construction technology that uses cold-formed steel sections. It's ideally suited for the seismic zones of Jammu & Kashmir, offering unparalleled safety and precision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: 'Seismic Resistant', desc: 'High strength-to-weight ratio makes it safer during earthquakes.' },
                { icon: Zap, title: 'Rapid Assembly', desc: 'Pre-engineered components allow for completion in weeks, not months.' },
                { icon: Wind, title: 'Weather Proof', desc: 'Steel doesn\'t rot, warp, or support mold growth in damp climates.' },
                { icon: Layers, title: 'Sustainable', desc: '100% recyclable material with minimal on-site construction waste.' }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {!isPage && (
              <Link to="/lgsf" className="inline-flex items-center gap-2 mt-12 text-orange-600 font-black uppercase tracking-widest text-sm group">
                Learn More About LGSF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FactorySection = ({ isPage = false }) => {
  return (
    <section id="manufacturing" className={`py-32 bg-slate-950 relative overflow-hidden ${isPage ? 'pt-48' : ''}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-6">Our Manufacturing</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Precision Engineering Excellence.</h3>
          <p className="text-slate-400 text-lg">
            Our advanced roll-forming facility uses fully automated CNC machinery to produce LGSF sections with sub-millimeter accuracy, ensuring perfect fitment for every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="design1.png" 
              alt="LGSF Roll Forming Machine" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="space-y-10">
            {[
              { 
                icon: Cpu, 
                title: 'Fully Automated CNC', 
                desc: 'Our machines are driven by advanced BIM software, ensuring every piece is cut and punched exactly as designed.' 
              },
              { 
                icon: Factory, 
                title: 'High Capacity Production', 
                desc: 'Equipped to handle large-scale commercial projects and rapid residential developments simultaneously.' 
              },
              { 
                icon: CheckCircle2, 
                title: 'Quality Control', 
                desc: 'Every batch undergoes rigorous testing to meet international structural standards for cold-formed steel.' 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            {!isPage && (
              <Link to="/manufacturing" className="inline-flex items-center gap-2 mt-8 text-orange-500 font-black uppercase tracking-widest text-sm group">
                Explore Our Facility
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const StructuralSection = ({ isPage = false }) => {
  return (
    <section id="structural" className={`py-32 bg-slate-50 ${isPage ? 'pt-48' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Structural Steel</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Heavy-Duty Structural Excellence.</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Beyond LGSF, we are experts in traditional structural steel construction. From industrial warehouses to complex commercial frames, we provide end-to-end fabrication and erection services.
            </p>
            
            <ul className="space-y-4 mb-12">
              {['Industrial Sheds & Warehouses', 'Multi-Story Commercial Frames', 'Custom Steel Fabrication', 'Seismic Retrofitting'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/structural" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all inline-block">
              View Structural Portfolio
            </Link>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="structural.jpg" 
                alt="Structural Steel Model" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ isPage = false }) => {
  return (
    <section id="contact" className={`py-32 bg-white ${isPage ? 'pt-48' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Contact Us</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">Let's Build Safely.</h3>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Corporate Office</h4>
                  <p className="text-slate-500">Rajbagh, Srinagar, Jammu & Kashmir</p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Factory className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Manufacturing Unit</h4>
                  <p className="text-slate-500">Industrial Estate Rangreth, Srinagar, J&K</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Direct Line</h4>
                  <p className="text-slate-500">+91 70066 99304</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Email</h4>
                  <p className="text-slate-500">info@bossforcesteel.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Your Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Email Address</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Project Interest</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium appearance-none">
                  <option>LGSF Residential</option>
                  <option>LGSF Commercial</option>
                  <option>Structural Steel Shed</option>
                  <option>Other Fabrication</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Message</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="BossforceLogo.png" 
                alt="Bossforce Steel Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-none">
                  BOSSFORCE <span className="text-orange-600">STEEL</span>
                </span>
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.48em] font-bold text-white/60 mt-1 whitespace-nowrap">
                  Engineering safer tomorrow
                </span>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Pioneering the future of construction in Jammu & Kashmir with precision-engineered steel solutions. Engineering safer tomorrow, today.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'LN', 'IG'].map(social => (
                <div key={social} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all text-slate-500 font-black text-xs">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h6 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Solutions</h6>
              <ul className="space-y-4">
                {['LGSF Framing', 'Structural Steel', 'Roofing Systems', 'Wall Panels'].map(link => (
                  <li key={link}>
                    <Link to="/lgsf" className="text-slate-500 hover:text-orange-500 transition-colors text-sm font-bold">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Company</h6>
              <ul className="space-y-4">
                {['About Us', 'Our Factory', 'Projects', 'Careers'].map(link => (
                  <li key={link}>
                    <Link to="/" className="text-slate-500 hover:text-orange-500 transition-colors text-sm font-bold">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h6 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.3em]">Support</h6>
              <ul className="space-y-4">
                {['Contact', 'Get a Quote', 'Privacy', 'Terms'].map(link => (
                  <li key={link}>
                    <Link to="/contact" className="text-slate-500 hover:text-orange-500 transition-colors text-sm font-bold">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Bossforce Steel. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <Shield className="w-3 h-3 text-orange-600" />
            Certified Structural Engineering
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/917006699304" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us
    </span>
  </a>
);

const HomePage = () => (
  <>
    <Hero />
    <LGSFSection />
    <FactorySection />
    <StructuralSection />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-orange-600/30 selection:text-orange-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lgsf" element={<LGSFSection isPage={true} />} />
          <Route path="/structural" element={<StructuralSection isPage={true} />} />
          <Route path="/manufacturing" element={<FactorySection isPage={true} />} />
          <Route path="/contact" element={<Contact isPage={true} />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
