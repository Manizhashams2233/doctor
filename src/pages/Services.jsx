import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-20 px-8" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-[#2a4858] mb-4">Our Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive neurosurgical and spinal care tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Spine" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-[#2a4858] mb-4">Minimally Invasive Spine Surgery</h3>
              <p className="text-gray-500 text-sm">Spine surgery is a minimally invasive procedure for diagnosing and treating several spinal problems.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" alt="Brain" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-[#2a4858] mb-4">Brain Tumor Resection</h3>
              <p className="text-gray-500 text-sm">Brain tumor resection is a surgical intervention used to treat tumors in the brain with advanced techniques.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Trauma" className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-[#2a4858] mb-4">Neurotrauma Care</h3>
              <p className="text-gray-500 text-sm">Neurotrauma care is a critical surgical intervention for those with severe head or spinal cord injuries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}