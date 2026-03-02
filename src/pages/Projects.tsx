import React from 'react';

const Projects = () => (
  <section className="pt-48 pb-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Our Projects</h2>
      <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter">Building the Future of J&K.</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'LGSF Residential Villa', desc: 'A modern, seismic-resistant residential structure built with precision LGSF technology.', img: '/villa.jpg' },
          { title: 'Industrial Warehouse', desc: 'Heavy-duty structural steel framing designed for maximum durability and space efficiency.', img: '/industrial.jpg' },
          { title: 'Commercial Complex', desc: 'A multi-story commercial frame combining LGSF and structural steel for optimal strength.', img: '/commercial.jpg' },
        ].map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="rounded-3xl overflow-hidden mb-6 aspect-video">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-widest">{project.title}</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
