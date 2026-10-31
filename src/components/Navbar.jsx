import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BrainCircuit, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `block px-4 py-2 rounded-full transition-all duration-300 ${
      isActive 
        ? "bg-teal-600 text-white font-bold shadow-md shadow-teal-500/20" 
        : "text-slate-600 hover:text-teal-600 font-medium hover:bg-slate-50"
    }`;

  return (
    <nav className="bg-white py-4 px-6 md:px-12 shadow-sm relative z-50" dir="ltr">
      <div className="flex items-center justify-between">
        
        {/* لوگو */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-teal-50 border border-teal-100 p-2 rounded-xl group-hover:bg-teal-600 transition-colors duration-300">
            <BrainCircuit size={28} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-slate-900 leading-tight tracking-wide">
              Dr. Khalid Zadran
            </span>
            <span className="text-[10px] text-teal-600 font-semibold tracking-[0.2em] uppercase">
              Neurosurgeon
            </span>
          </div>
        </Link>
        
        {/* لینک‌ها در دسکتاپ */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyles}>About</NavLink>
          <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
          <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
        </div>

        {/* دکمه رزرو در دسکتاپ */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-slate-900/20">
            Book Appointment
          </Link>
        </div>

        {/* دکمه منوی موبایل */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* منوی بازشو در موبایل */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
          <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyles} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" className={navLinkStyles} onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className={navLinkStyles} onClick={() => setIsOpen(false)}>Contact</NavLink>
          
          <Link 
            to="/contact" 
            className="mt-2 text-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}