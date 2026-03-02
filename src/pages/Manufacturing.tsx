import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = ({ isPage = true }) => {
  return (
    <section id="manufacturing" className={`py-32 bg-slate-950 relative overflow-hidden ${isPage ? 'pt-48' : ''}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-6">Our Manufacturing</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Precision Engineering Excellence.</h3>
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
              src="/design1.png" 
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

export default Manufacturing;
