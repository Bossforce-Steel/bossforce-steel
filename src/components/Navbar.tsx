import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'LGSF', path: '/lgsf' },
    { name: 'Structural Steel', path: '/structural' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/BossforceLogo.png" 
            alt="Bossforce Steel Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col justify-center">
            <span className={`text-xl md:text-3xl font-black tracking-tighter leading-none whitespace-nowrap ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>
              BOSSFORCE <span className="text-orange-600">STEEL</span>
            </span>
            <span className={`text-[5px] md:text-[8px] uppercase tracking-[0.45em] font-bold whitespace-nowrap leading-none mt-1 ${isScrolled || !isHome ? 'text-slate-500' : 'text-white/60'}`}>
              Engineering safer tomorrow
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
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

export default Navbar;
