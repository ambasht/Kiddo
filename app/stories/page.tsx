import Newsletter from "@/components/sections/Newsletter";

import { stories } from "@/data/stories";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-50 text-slate-800 overflow-hidden">


      {/* Hero Section */}
      <section className="relative py-20 px-5 overflow-hidden">
        <div className="absolute top-10 left-10 w-44 h-44 bg-orange-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-200/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-orange-100 shadow-md px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">
                New magical stories every week ✨
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Magical Stories for Curious Little Minds ✨
            </h1>

            <p className="mt-7 text-lg text-slate-600 max-w-xl leading-relaxed">
              Bedtime stories, moral tales, animal adventures and more.
            </p>

            {/* Search */}
            {/*<div className="mt-10 bg-white rounded-3xl shadow-lg border border-orange-100 p-3 flex items-center gap-3 max-w-xl">
              <input
                type="text"
                placeholder="Search magical stories..."
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
                [KIDS READING HERO IMAGE]
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
             placeholder="Search magical stories..."
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
            "Bedtime",
            "Moral",
            "Animal",
            "Funny",
            "Festival",
            "Adventure",
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

      {/* Featured Story */}
      <section className="px-5 py-14">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden grid lg:grid-cols-2">
          <div className="bg-slate-100 min-h-[350px] flex items-center justify-center text-slate-400 text-lg font-medium">
            [FEATURED STORY IMAGE]
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
              Featured Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Moonlight Adventure
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Follow Luna and her little owl friend on a magical night journey filled with wonder and courage.
            </p>

            <button className="mt-10 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform w-fit">
              Read Story
            </button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-5 py-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-medium">
                [STORY THUMBNAIL]
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>{story.age}</span>
                  <span>{story.time}</span>
                </div>

                <h3 className="text-2xl font-bold leading-snug">
                  {story.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {story.desc}
                </p>

                <button className="mt-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-md">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter/>

      {/* Footer */}
      {/*<footer className="bg-slate-900 text-white px-5 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-3xl font-bold">Kiddo</h3>

            <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
              Inspiring imagination, learning and joyful moments for little minds.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/printables">Printables</Link>
            <Link href="/parenting">Parenting</Link>
          </div>*/}

          {/* Social Icons Placeholder */}
          {/*<div>
            <p className="text-slate-400 mb-4">
              Follow Us
            </p>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10"></div>
            </div>
          </div>
        </div>
      </footer>*/}
    </div>
  );
}