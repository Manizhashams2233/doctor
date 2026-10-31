
import { useState } from "react";

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#1a2223] p-8 rounded-2xl border border-slate-800 shadow-2xl">
      <h2 className="text-2xl font-serif font-bold mb-6 text-white">Request an Appointment</h2>
      
      {sent ? (
        <div className="text-teal-400 font-medium bg-teal-500/10 p-6 rounded-xl border border-teal-500/30 text-center">
          ✅ Your request has been received successfully. <br/> Our team will contact you to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name</label>
            <input type="text" placeholder="John Doe" required className="w-full border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-teal-500 bg-[#0f1516] text-white transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Phone Number</label>
            <input type="tel" placeholder="+93 70 XXX XXXX" required className="w-full border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-teal-500 bg-[#0f1516] text-white transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Reason for Visit</label>
            <textarea placeholder="Briefly describe your condition..." required className="w-full border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-teal-500 bg-[#0f1516] text-white transition-colors" rows="3"></textarea>
          </div>
          <button type="submit" className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-500 font-bold transition-colors mt-2">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}