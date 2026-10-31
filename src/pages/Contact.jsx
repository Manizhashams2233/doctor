import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen" dir="ltr">
      
      {/* بخش اطلاعات و فرم */}
      <div className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16">
        
        {/* اطلاعات تماس */}
        <div>
          <h1 className="text-4xl font-serif font-bold mb-6 text-[#2a4858]">Get in Touch</h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            To schedule a consultation or for any medical inquiries, please reach out to us using the information below or fill out the appointment form.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-teal-50 p-4 rounded-full text-teal-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2a4858] mb-1">Clinic Address</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Rifah Medical Complex, Airport Road,<br/>Kabul, Afghanistan</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-teal-50 p-4 rounded-full text-teal-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2a4858] mb-1">Phone Contact</h3>
                <p className="text-gray-500 text-sm">+93 70 781 0781</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-teal-50 p-4 rounded-full text-teal-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2a4858] mb-1">Email</h3>
                <p className="text-gray-500 text-sm">info@rifahhospital.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* فرم نوبت */}
        <div className="bg-[#f8f9fa] p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#2a4858]">Request an Appointment</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <textarea placeholder="Reason for visit" rows="4" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
            <button type="submit" className="bg-[#2a4858] text-white p-3 rounded-lg hover:bg-[#3b5c6b] font-bold transition-colors">
              Submit Request
            </button>
          </form>
        </div>

      </div>

      {/* نوار اضطراری */}
      <section className="w-full bg-[#e5e7eb] py-10 px-8 mb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-lg">
            In case of <strong className="text-gray-800">EMERGENCY</strong>, call <span className="text-gray-800 font-bold">+93 70 781 0781</span>
          </p>
          <a href="tel:+93707810781" className="bg-[#2a4858] text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-teal-600 transition-colors flex items-center gap-2">
            CALL NOW <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}