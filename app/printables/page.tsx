"use client";

import { useState } from "react";
import { searchPrintables } from "@/lib/searchPrintables";
import Newsletter from "@/components/sections/Newsletter";
import { printables } from "@/data/printables";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Paging from "@/components/layout/Paging";
import PrintableCard from "@/components/ui/PrintableCard";


export default function PrintablesPage() {
  const featuredPrintable = printables.find(
    (item) => item.featured
  );

  // search input state
  const [search, setSearch] = useState("");

  // age filter state
  const [selectedAge, setSelectedAge] =
    useState("");

  // filtered results
  const filteredPrintables =
    searchPrintables(search, selectedAge);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50 text-slate-800 overflow-hidden">

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
              {featuredPrintable?.title}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {featuredPrintable?.desc}
            </p>

            <Link href={`/printables/${featuredPrintable?.slug}`}>
              <Button>Download PDF</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Search Section */}
      <section className="px-5 -mt-8 relative z-20">
        <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-2xl border border-orange-100 p-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search printables..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
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
      </section>*/}

      <Paging
        items={filteredPrintables}
        renderItem={(printable) => (
          <PrintableCard
            key={printable.slug}
            printable={printable}
          />
        )}
      />

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
      <Newsletter />


    </div>
  );
}