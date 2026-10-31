import { MapPin, Mail, Phone, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#151f21]" dir="ltr">
      
      {/* بخش اول: نقشه و کارت‌های تماس */}
      <div className="relative w-full max-w-6xl mx-auto pt-16 px-4 md:px-8">
        
        <div className="w-full h-[300px] md:h-[450px] bg-gray-200 shadow-lg rounded-t-md overflow-hidden relative">
          <iframe 
            src="https://maps.google.com/maps?q=Kabul,%20Afghanistan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, pointerEvents: 'none' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
          <a href="https://maps.google.com/?q=Kabul" target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label="Open map"></a>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-0 md:px-4 -mt-10 md:-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#587b8a] text-white shadow-2xl">
            
            <a href="#" className="flex items-center gap-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#4a6875] transition-colors group">
              <MapPin size={28} className="text-white/70 group-hover:text-white transition-colors shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] md:text-[11px] text-white/70 mb-1">Find a clinic near you</p>
                <p className="text-sm font-semibold">Find Us On Map</p>
              </div>
            </a>

            <a href="mailto:info@rifahhospital.com" className="flex items-center gap-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#4a6875] transition-colors group">
              <Mail size={28} className="text-white/70 group-hover:text-white transition-colors shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] md:text-[11px] text-white/70 mb-1">Feel free to message us</p>
                <p className="text-sm font-semibold">Send an Email</p>
              </div>
            </a>

            <a href="tel:+93707810781" className="flex items-center gap-4 p-6 md:p-8 hover:bg-[#4a6875] transition-colors group">
              <Phone size={28} className="text-white/70 group-hover:text-white transition-colors shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] md:text-[11px] text-white/70 mb-1">To book an appointment, call us on</p>
                <p className="text-sm font-semibold">+93 70 781 0781</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* بخش دوم: اطلاعات فوتر و فرم نوبت‌دهی */}
      <div className="py-16 md:py-20 px-6 md:px-8 bg-[#151f21] text-gray-400">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div>
              <h3 className="text-lg font-bold text-white mb-2">About us</h3>
              <div className="w-12 h-[2px] bg-teal-500 mb-6"></div>
              <p className="text-[13px] leading-loose">
                Dr. Khalid Khan Zadran is one of the best neurosurgeons in Kabul, rendering expert treatment for complex brain, spine, and nervous system conditions. He holds an FCPS and specializes in minimally invasive techniques.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Get in Touch</h3>
              <div className="w-12 h-[2px] bg-teal-500 mb-6"></div>
              <ul className="space-y-5 text-[13px]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-teal-500 mt-1 shrink-0" />
                  <span>Rifah Medical Complex,<br/>Airport Road, Lab-e-Jar,<br/>Kabul, Afghanistan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-teal-500 shrink-0" />
                  <a href="mailto:info@rifahhospital.com" className="hover:text-teal-400 transition-colors">info@rifahhospital.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-teal-500 shrink-0" />
                  <a href="tel:+93707810781" className="hover:text-teal-400 transition-colors" dir="ltr">+93 70 781 0781</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Additional Link</h3>
              <div className="w-12 h-[2px] bg-teal-500 mb-6"></div>
              <ul className="space-y-4 text-[13px]">
                <li>
                  <Link to="/" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                    <ChevronRight size={14} className="text-teal-500" /> Core Clinic
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                    <ChevronRight size={14} className="text-teal-500" /> Service
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                    <ChevronRight size={14} className="text-teal-500" /> About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                    <ChevronRight size={14} className="text-teal-500" /> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* فرم نوبت‌دهی */}
          <div className="max-w-3xl mx-auto text-center border-t border-slate-800 pt-16">
            <h3 className="text-xl font-bold text-white mb-2">Scheduled An Appointment</h3>
            <div className="w-16 h-[2px] bg-teal-500 mx-auto mb-10"></div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="bg-white text-gray-900 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full" />
              <input type="email" placeholder="Your Email" className="bg-white text-gray-900 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full" />
              <input type="tel" placeholder="Phone Number" className="bg-white text-gray-900 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full" />
              <input type="date" placeholder="Date" className="bg-white text-gray-900 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-gray-500" />
              
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="bg-[#2a4858] text-white px-8 py-3 text-sm font-semibold hover:bg-[#3b5c6b] transition-colors flex items-center justify-center gap-2 mx-auto w-48">
                  Submit <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-xs">
            <p>© 2024 Dr. Khalid Khan Zadran. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}