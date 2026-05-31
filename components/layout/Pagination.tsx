import { useState,useEffect } from "react";
import { searchStories } from "@/lib/searchStories";
import Link from "next/link";
import Button from "@/components/ui/Button";
export default function Pagination() {

    const ITEMS_PER_PAGE = 2;
    const [currentPage, setCurrentPage] = useState(1);

    // search input state
    const [search, setSearch] = useState("");

    // age filter state
    const [selectedAge, setSelectedAge] =useState("");
    // filtered results
    const filteredStories = searchStories(search, selectedAge);

    const totalPages = Math.ceil(
    filteredStories.length / ITEMS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) * ITEMS_PER_PAGE;

    const currentStories =
        filteredStories.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );

    useEffect(() => {
     setCurrentPage(1);
    }, [selectedAge]);

     return (
        <div>
             {/*Search Bar*/}
             <section className="px-5 -mt-8 relative z-20">
                 <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-2xl border border-orange-100 p-4 flex items-center gap-3">
                     <input
                         type="text"
                         placeholder="Search magical stories..."
                         value={search}
                         onChange={(e) =>
                             setSearch(e.target.value)
                         }
                         className="flex-1 outline-none px-4 py-4 bg-transparent text-slate-700"
                     />

                     <button
                         className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-7 py-4 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform">
                         Search
                     </button>
                 </div>
             </section>

             {/* Age Filters */}
             <section className="px-5 py-10">
                 <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
                     {["", "3–4", "5–7", "8–10"].map(
                         (age, i) => (
                             <button
                                 key={i}
                                 onClick={() => setSelectedAge(age)}
                                 className={`px-6 py-3 rounded-2xl font-medium transition-all shadow-sm ${age === selectedAge
                                         ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                                         : "bg-white border border-orange-100 text-slate-600 hover:border-orange-300"
                                     }`}
                             >
                                 {`Ages `}{age === "" ? "All" : age}
                             </button>
                         )
                     )}
                 </div>
             </section>

             {/* Categories */}
             {/*
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
            */}
             <section className="px-5 py-10">
                 <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {currentStories.map((story, i) => (
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
                                     <span>{story.age}{`Age`}</span>
                                     <span>{story.time}{`mins read time`}</span>
                                 </div>

                                 <h3 className="text-2xl font-bold leading-snug">
                                     {story.title}
                                 </h3>

                                 <p className="mt-4 text-slate-600 leading-relaxed">
                                     {story.desc}
                                 </p>

                                 <Link href={`/stories/${story.slug}`}>
                                     <Button>Read Story</Button>
                                 </Link>
                             </div>
                         </div>
                     ))}
                 </div>
                 <div className="flex justify-center items-center gap-2 mt-12">

                     <button
                         onClick={() =>
                             setCurrentPage((p) =>
                                 Math.max(p - 1, 1)
                             )
                         }
                         disabled={currentPage === 1}
                         className="px-4 py-2 rounded-xl border"
                     >
                         Previous
                     </button>

                     {Array.from(
                         { length: totalPages },
                         (_, i) => i + 1
                     ).map((page) => (
                         <button
                             key={page}
                             onClick={() =>
                                 setCurrentPage(page)
                             }
                             className={`px-4 py-2 rounded-xl ${currentPage === page
                                     ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                                     : "border"
                                 }`}
                         >
                             {page}
                         </button>
                     ))}

                     <button
                         onClick={() =>
                             setCurrentPage((p) =>
                                 Math.min(p + 1, totalPages)
                             )
                         }
                         disabled={currentPage === totalPages}
                         className="px-4 py-2 rounded-xl border"
                     >
                         Next
                     </button>

                 </div>
             </section>
        </div>
     );
}