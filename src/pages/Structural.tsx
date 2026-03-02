import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Structural = ({ isPage = true }) => {
  return (
    <section id="structural" className={`py-32 bg-slate-50 ${isPage ? 'pt-48' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Structural Steel</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter whitespace-nowrap uppercase">Structural Steel</h3>
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

            <Link to="/projects" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all inline-block">
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
                src="/structural.jpg" 
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

export default Structural;
