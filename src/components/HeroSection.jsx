export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#0f1718] overflow-hidden" dir="ltr">
      
      {/* عکس پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
          alt="Surgery Room"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1718] via-[#0f1718]/80 to-transparent"></div>
      </div>

      {/* متن‌ها */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-32 md:pb-48">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-6">
            A decade of <br />
            experience as an <br />
            <span className="font-bold text-teal-400">Neurosurgeon.</span>
          </h1>
          <p className="text-gray-200 mt-6 text-base md:text-xl font-light leading-relaxed">
            Experience best-in-class consultation <br className="hidden md:block" /> & treatment plans
          </p>
        </div>
      </div>

      {/* خط سفید و اعداد */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
          <div className="w-full border-t border-white/30 relative">
            <span className="absolute left-[33.33%] -top-2.5 -translate-x-1/2 text-xs text-white/70">1</span>
            <span className="absolute left-[66.66%] -top-2.5 -translate-x-1/2 text-xs text-white/70">2</span>
            <span className="absolute right-0 -top-2.5 text-xs text-white/70">3</span>
          </div>
        </div>
      </div>

    </div>
  );
}