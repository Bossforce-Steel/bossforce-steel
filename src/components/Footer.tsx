import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="/BossforceLogo.png" 
                alt="Bossforce Steel Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none whitespace-nowrap">
                  BOSSFORCE <span className="text-orange-600">STEEL</span>
                </span>
                <span className="text-[5px] md:text-[7px] uppercase tracking-[0.45em] font-bold text-white/60 whitespace-nowrap leading-none mt-1">
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

export default Footer;
