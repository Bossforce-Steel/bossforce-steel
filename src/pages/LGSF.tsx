import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Wind, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LGSF = ({ isPage = true }) => {
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
                  src="/LGSF Fabrication.png" 
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
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">The Smartest Way to Build in J&K.</h3>
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

export default LGSF;
