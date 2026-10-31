import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-20 px-8" dir="ltr">
      <div className="max-w-7xl mx-auto">
        
        {/* استفاده از Flexbox برای چیدمان مطمئن */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
          
          {/* ستون سمت چپ: عکس و عنوان */}
          <div className="md:w-5/12 w-full">
            <img
              src="/doctor.jpg" // <--- مسیر عکس (مطمئن شو اسم فایل همین است)
              alt="Dr. Khalid Khan Zadran"
              className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100"
            />
            <div className="mt-6 text-left">
              <h2 className="text-3xl font-bold text-[#2a4858]">DR. Khalid Khan Zadran</h2>
              <p className="text-teal-600 font-semibold mt-2">Consultant Neurosurgeon & Brain-Spine Specialist</p>
            </div>
          </div>

          {/* ستون سمت راست: متن درباره داکتر */}
          <div className="md:w-7/12 w-full text-left">
            <h1 className="text-4xl font-serif font-bold text-[#2a4858] mb-8">About Dr. Zadran</h1>
            
            <p className="text-gray-600 text-[16px] leading-[1.8] mb-6">
              Dr. Khalid Khan Zadran is one of the best neurosurgeons in Kabul, rendering expert treatment for complex brain and spine conditions. He holds an FCPS in Neurosurgery and is a Fellow of the College of Physicians & Surgeons Pakistan.
            </p>
            
            <p className="text-gray-600 text-[16px] leading-[1.8] mb-6">
              He holds over a decade of experience in neurosurgery and spinal disorders, under the guidance of renowned experts. He specializes in minimally invasive spine surgery, brain tumor resections, and neurotrauma care at the Rifah Medical Complex.
            </p>
            
            <p className="text-gray-600 text-[16px] leading-[1.8] mb-10">
              Dr. Zadran's work ethic is a blend of professionalism, passion for the craft, skill, and dexterity. He is extremely cooperative and is vigilant throughout the process making him highly responsible and trustworthy as a neurosurgeon.
            </p>

            <Link 
              to="/contact" 
              className="bg-[#2a4858] text-white px-8 py-3.5 text-sm font-bold tracking-widest hover:bg-teal-600 transition-colors inline-block"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}