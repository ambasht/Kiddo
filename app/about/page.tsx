"use client";

import Link from "next/link";
import Newsletter from "@/components/sections/Newsletter";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF8] text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 py-20 lg:py-28">

        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>✨</span>
              About Kiddo
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Creating a Safe &
              Magical Learning
              Space for Kids ✨
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Kiddo helps parents discover engaging stories,
              creative printables and learning experiences
              designed to make childhood more joyful,
              educational and screen-positive.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Explore Stories
              </Link>

              <Link
                href="/printables"
                className="bg-white border border-gray-200 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition"
              >
                Browse Printables
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 rounded-[40px] p-8 shadow-xl">

              {/* IMAGE PLACEHOLDER */}
              <div className="aspect-[4/3] rounded-3xl bg-white/70 flex items-center justify-center text-gray-400 text-center px-6">
                ADD ILLUSTRATION HERE
                <br />
                (Happy children reading & learning)
              </div>

            </div>

            <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="text-lg">⭐</span>
                Trusted by Parents
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We believe learning should feel playful,
              calming and inspiring. Kiddo was created to
              help families discover high-quality educational
              content in a safe and joyful digital environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {/* CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-5 text-3xl">
                📚
              </div>
              <h3 className="text-xl font-bold mb-3">
                Educational Content
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Stories and activities carefully designed
                to encourage imagination, reading habits
                and creativity.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-pink-100">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5 text-3xl">
                🛡️
              </div>

              <h3 className="text-xl font-bold mb-3">
                Parent-Friendly
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A clean, safe and ad-conscious experience
                built with parents’ trust and children’s
                wellbeing in mind.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-yellow-100">
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-5 text-3xl">
                💛
              </div>

              <h3 className="text-xl font-bold mb-3">
                Joyful Learning
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We combine fun visuals, storytelling and
                playful activities to make learning feel
                magical every day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 lg:px-20 py-20 bg-gradient-to-b from-[#FFF8F3] to-[#FFFDF8]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE PLACEHOLDER */}
          <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-[40px] p-8 shadow-xl">
            <div className="aspect-[4/3] rounded-3xl bg-white/70 flex items-center justify-center text-gray-400 text-center px-6">
              ADD ILLUSTRATION HERE
              <br />
              (Parent and child learning together)
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Built for Curious Kids
              and Caring Parents 💛
            </h2>

            <div className="mt-8 space-y-6">

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg">
                  Safe Digital Experience
                </h3>

                <p className="text-gray-600 mt-2">
                  We prioritize clean layouts, calming colors
                  and child-friendly content across every page.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg">
                  Encouraging Creativity
                </h3>

                <p className="text-gray-600 mt-2">
                  From printable activities to imaginative
                  stories, Kiddo helps children explore,
                  create and grow.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg">
                  Learning Through Play
                </h3>

                <p className="text-gray-600 mt-2">
                  We blend education and entertainment
                  to make learning enjoyable and memorable.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

    </main>
  );
}