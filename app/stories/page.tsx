"use client";
import { useState } from "react";
import Newsletter from "@/components/sections/Newsletter";
import Link from "next/link";
import { stories } from "@/data/stories";
import { searchStories } from "@/lib/searchStories";
import Button from "@/components/ui/Button";
import Paging from "@/components/layout/Paging";
import StoryCard from "@/components/ui/StoryCards";
export default function StoriesPage() {
  const featuredStory = stories.find(
    (story) => story.featured);

  // search input state
  const [search, setSearch] = useState("");

  // age filter state
  const [selectedAge, setSelectedAge] = useState("");
  // filtered results
  const filteredStories = searchStories(search, selectedAge);


  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-50 text-slate-800 overflow-hidden">
      {/* Featured Story */}
      <section className="px-5 py-14">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden grid lg:grid-cols-2">
          <div className="bg-slate-100 min-h-[350px] flex items-center justify-center text-slate-400 text-lg font-medium">
            {/*<img
             src={featuredStory?.heroImage}
             alt={featuredStory?.title}
             />*/}
            <div className="h-48 bg-gray-200 rounded-xl" />
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6">
              Featured Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {featuredStory?.title}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {featuredStory?.desc}
            </p>


            <Link href={`/stories/${featuredStory?.slug}`}>
              <Button>Read Story</Button>
            </Link>
          </div>
        </div>
      </section>
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

      {/*Stories grid*/}
      <Paging
        items={filteredStories}
        renderItem={(story) => (
          <StoryCard
            key={story.slug}
            title={story.title}
            desc={story.desc}
            age={story.age}
            time={story.time}
            slug={story.slug}
          />
        )}
      />
      {/* Newsletter */}
      <Newsletter />


    </div>
  );
}