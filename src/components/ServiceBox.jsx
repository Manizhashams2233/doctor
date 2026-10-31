export default function ServiceBox({ title, desc }) {
  return (
    <div className="bg-[#1a2223] border border-slate-800 p-8 rounded-xl hover:border-teal-500/50 hover:bg-[#1e2829] transition-all duration-300 group">
      <div className="w-12 h-1 bg-teal-500 mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}