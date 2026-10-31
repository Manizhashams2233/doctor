import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Activity, Users, Globe, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white" dir="ltr">
      
      {/* ۱. بخش تیره بالای صفحه */}
      <HeroSection />

      {/* ۲. کارت‌های شیشه‌ای (در موبایل مارجین منفی کمتر می‌شود) */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 -mt-16 md:-mt-[112px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#2a4858] p-6 shadow-xl flex flex-col justify-between h-auto md:h-[224px]">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3">CORE Orthopaedic & ENT Clinic</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Flat no 101, Madhura Heights,<br/>
                Opposite Bank Of Baroda, Rajeev<br/>
                Nagar, Hyderabad, Telangana - 500018
              </p>
            </div>
            <Link to="/contact" className="border border-white/30 text-[10px] tracking-wider text-white px-4 py-2 flex items-center justify-between hover:bg-white hover:text-[#2a4858] transition-colors w-full">
              CONTACT US <ArrowRight size={12} />
            </Link>
          </div>

          <div className="bg-[#2a4858] p-6 shadow-xl flex flex-col justify-between h-auto md:h-[224px]">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3">Schedule an Appointment</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                CORE Orthopaedic & ENT Clinic,<br/>
                Rajeev Nagar<br/><br/>
                Mon - Sat &nbsp;&nbsp;&nbsp; 5:30PM - 9:00PM
              </p>
            </div>
            <Link to="/contact" className="border border-white/30 text-[10px] tracking-wider text-white px-4 py-2 flex items-center justify-between hover:bg-white hover:text-[#2a4858] transition-colors w-full">
              BOOK <span className="font-mono text-[9px]">&lt; / &gt;</span>
            </Link>
          </div>

          <div className="bg-[#2a4858] p-6 shadow-xl flex flex-col justify-between h-auto md:h-[224px]">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-white mb-3">HRC Hospital</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Chikoti Gardens, beside Prakash<br/>
                Nagar Metro Station, Begumpet,<br/>
                Hyderabad, Telangana - 500016
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white border border-white/30 px-4 py-2 w-full">
              <Phone size={12} /> 9701757017
            </div>
          </div>

        </div>
      </div>

      {/* ۳. بخش معرفی (در موبایل تک‌ستونه می‌شود) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-[45px] font-bold text-[#4a6572] leading-[1.1]">
              DR.<br />
              Khalid Khan Zadran<br />
              <span className="text-xl md:text-[26px] mt-3 block leading-[1.3]">
                Consultant Neurosurgeon & Brain-Spine Specialist
              </span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] mb-4">
              Dr. Khalid Khan Zadran is one of the best neurosurgeons in Kabul, rendering expert treatment for complex brain and spine conditions. He holds an FCPS in Neurosurgery and is a Fellow of the College of Physicians & Surgeons Pakistan.
            </p>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] mb-8">
              He holds over a decade of experience in neurosurgery and spinal disorders, under the guidance of renowned experts. He specializes in minimally invasive spine surgery, brain tumor resections, and neurotrauma care at the Rifah Medical Complex.
            </p>
            <Link to="/about" className="bg-[#4a6572] text-white px-10 py-3.5 text-sm font-semibold tracking-wider hover:bg-[#2a4858] transition-colors inline-block">
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ۴. بخش آمار (در موبایل زیر هم می‌آیند) */}
      <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden mt-8">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Stats" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-10 md:gap-4 text-center text-white">
          <div className="flex-1 flex flex-col items-center">
            <Activity size={48} className="md:w-16 md:h-16 mb-4 md:mb-6 text-white opacity-90" strokeWidth={1} />
            <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">1200</h3>
            <p className="text-base md:text-xl font-light tracking-wide">Surgeries</p>
          </div>
          <div className="flex-1 flex flex-col items-center border-y md:border-y-0 md:border-x border-white/20 py-6 md:py-0">
            <Users size={48} className="md:w-16 md:h-16 mb-4 md:mb-6 text-white opacity-90" strokeWidth={1} />
            <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">15000</h3>
            <p className="text-base md:text-xl font-light tracking-wide">Cases</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Globe size={48} className="md:w-16 md:h-16 mb-4 md:mb-6 text-white opacity-90" strokeWidth={1} />
            <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-3">3</h3>
            <p className="text-base md:text-xl font-light tracking-wide">Countries</p>
          </div>
        </div>
      </section>

      {/* ۵. بخش تخصص‌ها (عکس در موبایل بالای متن می‌آید) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          <div className="md:col-span-3">
            <img 
              src="/images (1).jpg" 
              alt="Dr. Khalid Zadran" 
              className="w-full max-w-sm mx-auto md:max-w-none h-auto object-cover rounded-md shadow-md border border-gray-100"
            />
          </div>

          <div className="md:col-span-9 pt-2">
            <span className="text-teal-600 font-bold text-[15px] tracking-widest uppercase mb-4 block">
              Areas of Expertise
            </span>

            <h2 className="text-xl md:text-[28px] text-[#2a4858] font-bold leading-[1.4] mb-8 md:mb-10">
              10 Years of extensive practice & global exposure has made Dr. Khalid Khan Zadran a top choice for neurosurgical care.
            </h2>

            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3 md:gap-4">
                <Check size={20} className="text-teal-500 mt-1 shrink-0" strokeWidth={2} />
                <span className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">Primary and Revision Spine Surgeries</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <Check size={20} className="text-teal-500 mt-1 shrink-0" strokeWidth={2} />
                <span className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">Specializes in Minimally Invasive Spine Surgeries</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <Check size={20} className="text-teal-500 mt-1 shrink-0" strokeWidth={2} />
                <span className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">Brain Tumor Resection and Neurotrauma treatment</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <Check size={20} className="text-teal-500 mt-1 shrink-0" strokeWidth={2} />
                <span className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">Cerebrovascular Surgery (Aneurysms & AVMs)</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <Check size={20} className="text-teal-500 mt-1 shrink-0" strokeWidth={2} />
                <span className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">Endoscopic and Minimally Invasive Neurosurgery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ۶. نوار اضطراری (در موبایل دکمه زیر متن می‌رود) */}
      <section className="w-full bg-[#e5e7eb] py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-[15px]">
            In case of <strong className="text-gray-800">EMERGENCY</strong>, call <span className="text-gray-800">+93 70 781 0781</span>
          </p>
          <Link to="/contact" className="bg-[#2a4858] text-white px-6 py-2.5 text-xs font-bold tracking-widest hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
            OR SEND US MESSAGE <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ۷. بخش Why Choose + 3 Cards (در موبایل ارتفاع عکس‌ها یکسان می‌شود) */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center flex flex-col items-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2a4858] mb-3 text-center">Why Choose Dr. Khalid Zadran</h3>
            <div className="w-24 h-[2px] bg-teal-400"></div>
          </div>
          <div className="text-center max-w-4xl mx-auto space-y-6 text-[#3b5c6b] text-sm md:text-[15px] leading-[1.8] md:leading-[2] mb-10 px-4">
            <p>Dr. Zadran's work ethic is a blend of professionalism, passion for the craft, skill and dexterity. He is extremely cooperative and is vigilant throughout the process makes him highly responsible and trustworthy as a neurosurgeon.</p>
            <p className="font-medium">He offers expert care for all complex neurosurgical cases</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
            <div className="bg-[#eef1f3] flex flex-col rounded-sm overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop" alt="Spine" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-[17px] font-bold text-[#2a4858] mb-2">Spine Surgery</h4>
                <p className="text-[12px] text-gray-500 leading-[1.8]">Spine surgery is a minimally invasive procedure for diagnosing and treating several spinal problems such as herniated discs.</p>
              </div>
            </div>
            <div className="bg-[#eef1f3] flex flex-col rounded-sm overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" alt="Brain" className="w-full h-56 md:h-44 object-cover" />
              <div className="p-6">
                <h4 className="text-[17px] font-bold text-[#2a4858] mb-2">Brain Tumor Resection</h4>
                <p className="text-[12px] text-gray-500 leading-[1.8]">Brain tumor resection is a surgical intervention used to treat tumors in the brain.</p>
              </div>
            </div>
            <div className="bg-[#eef1f3] flex flex-col rounded-sm overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" alt="Trauma" className="w-full h-56 md:h-32 object-cover" />
              <div className="p-6">
                <h4 className="text-[17px] font-bold text-[#2a4858] mb-2">Neurotrauma Care</h4>
                <p className="text-[12px] text-gray-500 leading-[1.8]">Neurotrauma care is a critical surgical intervention for those with severe head or spinal cord injuries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ۸. بخش لوگوی شرکا (در موبایل فونت‌ها کوچک می‌شوند) */}
      <section className="bg-[#e8e9eb] py-16 md:py-24 px-6 md:px-8 border-t border-b border-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center mb-12 md:mb-24 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-4xl font-serif text-gray-400 tracking-widest font-bold uppercase">PHARMA</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-serif italic text-gray-400 tracking-tight">foveris</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-sans font-light text-gray-400 tracking-widest">+Aetia</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center max-w-3xl mx-auto text-center">
            <div className="flex justify-center">
              <div className="border-2 border-gray-400 border-double px-8 md:px-12 py-3">
                <span className="text-xl md:text-2xl font-bold text-gray-400 tracking-[0.2em] font-serif">BRIGHTMED</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Activity size={32} className="md:w-12 md:h-12 text-gray-400" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-3xl font-bold text-gray-400 tracking-widest leading-none">MEDSCREEN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ۹. بخش نظرات (ارتفاع و فونت در موبایل تنظیم شد) */}
      <section className="relative w-full py-20 md:py-32 min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" alt="Testimonial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0f1718]/85"></div>
        </div>
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex items-center gap-4 text-white/60">
          <button className="hover:text-white transition-colors border border-white/20 p-1.5 rounded-sm">
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm font-light">|</span>
          <button className="hover:text-white transition-colors border border-white/20 p-1.5 rounded-sm">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center text-white">
          <p className="text-base md:text-[26px] leading-[1.8] font-light mb-8 md:mb-10">
            "I consulted Dr. Khalid Khan Zadran regarding multiple severe spine injuries. He was very patient while checking my reports and examining my condition. He spent a good amount of time explaining the injury and suggesting a course of action. Not every doctor spends this amount of time on every single patient, which is great."
          </p>
          <div>
            <h4 className="text-lg md:text-xl font-bold tracking-wider">Ahmad Wali</h4>
            <p className="text-sm text-gray-400 mt-1">Patient</p>
          </div>
        </div>
      </section>

    </div>
  );
}