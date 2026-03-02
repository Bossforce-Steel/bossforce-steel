import React from 'react';
import { MapPin, Factory, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white pt-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter">Let's Build Safely.</h3>
            
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

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">WhatsApp</h4>
                  <a 
                    href="https://wa.me/917006699304" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-orange-600 transition-colors"
                  >
                    +91 70066 99304
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Your Name</label>
                <input name="name" type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="Full Name" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Email Address</label>
                <input name="email" type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="email@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Project Interest</label>
                <select name="interest" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium appearance-none">
                  <option>LGSF Residential</option>
                  <option>LGSF Commercial</option>
                  <option>Structural Steel Shed</option>
                  <option>Other Fabrication</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Message</label>
                <textarea name="message" rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-orange-600/10 focus:border-orange-600 transition-all font-medium" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
