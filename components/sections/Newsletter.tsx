export default function Newsletter() {
  return (
    <section className="px-5 py-24">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 rounded-[40px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Get free bedtime stories every week
          </h2>

          <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of parents discovering magical educational content for their kids.
          </p>

          <div className="mt-10 bg-white rounded-3xl p-3 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto shadow-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none px-4 py-4 rounded-2xl text-slate-700"
            />

            <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}