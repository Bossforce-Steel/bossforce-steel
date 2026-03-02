import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.jpg" 
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
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-12 tracking-tighter uppercase flex flex-col">
            <span>ENGINEERING</span>
            <span className="text-orange-600">SAFER</span>
            <span>TOMORROW</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/lgsf" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-orange-600/40">
              Explore LGSF Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/projects" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">
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

const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tighter">Pioneering Steel Solutions in J&K.</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'LGSF Construction', desc: 'Rapid, seismic-resistant framing for residential and commercial projects.', link: '/lgsf' },
              { title: 'Structural Steel', desc: 'Heavy-duty fabrication for industrial sheds and large-scale frames.', link: '/structural' },
              { title: 'Manufacturing', desc: 'State-of-the-art CNC roll-forming facility in Rangreth.', link: '/manufacturing' }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-left">
                <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest group-hover:text-orange-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                  Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
