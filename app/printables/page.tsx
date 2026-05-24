import Newsletter from "@/components/sections/Newsletter";
import {printables} from "@/data/printables";


export default function PrintablesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50 text-slate-800 overflow-hidden">
      
      {/* Hero */}
      <section className="relative py-20 px-5 overflow-hidden">
        <div className="absolute top-10 left-10 w-52 h-52 bg-yellow-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-200/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-orange-100 shadow-md px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">
                New activity packs every week 🎨
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Fun Printables for Creative Little Learners 🎨
            </h1>

            <p className="mt-7 text-lg text-slate-600 max-w-xl leading-relaxed">
              Free worksheets, coloring pages, tracing sheets and fun learning activities.
            </p>
            
            {/* Search */}
            {/*<div className="mt-10 bg-white rounded-3xl shadow-lg border border-orange-100 p-3 flex items-center gap-3 max-w-xl">
              <input
                type="text"
                placeholder="Search printables..."
                className="flex-1 outline-none px-3 py-3 bg-transparent"
              />

              <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform">
                Search
              </button>
            </div>*/}
          </div>
          {/* HERO IMAGE */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl border border-white overflow-hidden">
              <div className="aspect-[4/5] rounded-[30px] bg-slate-100 flex items-center justify-center text-slate-400 text-lg font-medium">
                [KIDS DRAWING & COLORING IMAGE]
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* Search Section */}
    <section className="px-5 -mt-8 relative z-20">
      <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-2xl border border-orange-100 p-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search printables..."
          className="flex-1 outline-none px-4 py-4 bg-transparent text-slate-700"
        />
    
        <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-7 py-4 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform">
          Search
        </button>
      </div>
    </section>


     {/* Age Filters */}
      <section className="px-5 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {["Ages 3–4", "Ages 5–7", "Ages 8–10"].map(
            (age, i) => (
              <button
                key={i}
                className={`px-6 py-3 rounded-2xl font-medium transition-all shadow-sm ${
                  i === 0
                    ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                    : "bg-white border border-orange-100 text-slate-600 hover:border-orange-300"
                }`}
              >
                {age}
              </button>
            )
          )}
        </div>
      </section>
      {/* Categories */}
      <section className="px-5 py-8">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-3">
          {[
            "All",
            "Coloring Pages",
            "Alphabet Tracing",
            "Numbers",
            "Mazes",
            "Puzzles",
            "Reward Charts",
            "Festival Activities",
          ].map((category, i) => (
            <button
              key={i}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
                i === 0
                  ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg"
                  : "bg-white border border-orange-100 text-slate-600 hover:border-orange-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Printable */}
      <section className="px-5 py-14">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden grid lg:grid-cols-2">
          {/* Preview */}
          <div className="bg-slate-100 min-h-[350px] flex items-center justify-center text-slate-400 text-lg font-medium">
            [FEATURED PRINTABLE PREVIEW]
          </div>

          {/* Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
              Featured Printable
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Animal Coloring Pack
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A fun printable collection of adorable animals designed to inspire creativity and learning.
            </p>

            <button className="mt-10 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform w-fit">
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Printables Grid */}
      <section className="px-5 py-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {printables.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Preview */}
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-medium">
                [WORKSHEET PREVIEW]
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-500">
                    {item.age}
                  </span>

                  <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full font-semibold">
                    PDF
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="mt-6 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-[1.02] transition-transform shadow-md">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Downloads */}
      <section className="px-5 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trending Downloads 🔥
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
              "Alphabet Tracing",
              "Animal Coloring",
              "Reward Charts",
              "Maze Pack",
              "Festival Worksheets",
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] bg-white rounded-[28px] p-6 shadow-lg border border-orange-100"
              >
                <div className="h-36 rounded-2xl bg-slate-100 mb-5 flex items-center justify-center text-slate-400 text-sm">
                  [TRENDING PREVIEW]
                </div>

                <h3 className="font-bold text-lg">
                  {item}
                </h3>

                <button className="mt-5 bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-medium">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter/>

      {/* Footer */}
      {/*<footer className="bg-slate-900 text-white px-5 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">*/}
          {/* Brand */}
          {/*<div>
            <h3 className="text-3xl font-bold">
              Kiddo
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Creative learning resources designed for joyful little learners.
            </p>
          </div>*/}

          {/* Links */}
         {/* <div className="flex flex-col gap-4 text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/printables">Printables</Link>
            <Link href="/parenting">Parenting</Link>
          </div>*/}

          {/* Social */}
          {/*<div>
            <p className="text-slate-400 mb-5">
              Follow Us
            </p>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
            </div>

            <p className="text-slate-500 text-sm mt-8">
              © 2026 Kiddo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>*/}
    </div>
  );
}