"use client";

import { useState, use } from "react";
import Newsletter from "@/components/sections/Newsletter";
import {printables} from "@/data/printables";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function DownloadPage({
  params,
}: {
  params: Promise<{slug: string }>;
}) {
   const { slug }=use(params)
  const printable = printables.find(
    (item) => item.slug === slug
  );


  const relatedPrintables = printables
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!printable) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffaf7] px-5 text-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-800">
            File Not Found
          </h1>

          <p className="mt-5 text-slate-600 text-lg">
            The file you are looking for does not exist.
          </p>

          <div className="mt-8">
            <Link href="/printables">
              <Button>Back to Printables</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf7] overflow-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#fdf2f8] to-[#fef3c7] py-20 md:py-28">

        <div className="absolute top-10 left-10 w-56 h-56 bg-pink-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm mb-6">
                📄 Free Printable PDF
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-800">
                {printable.title}
              </h1>

              <p className="mt-7 text-xl leading-relaxed text-slate-600 max-w-xl">
                {printable.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  {printable.age}
                </span>

                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                  PDF Download
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-5 shadow-2xl border border-white overflow-hidden">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100">
                  <img
                    src={printable.thumbnail}
                    alt={printable.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Instant PDF access",
              "Print at home anytime",
              "Kid-friendly learning",
              "Weekly free activities",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] border border-orange-100 p-6 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">
                  ✨
                </div>

                <p className="font-semibold text-slate-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Email Unlock */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              <div className="p-8 md:p-12 bg-gradient-to-br from-orange-50 to-pink-50">
                <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-sm mb-6">
                  Free Download ✨
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                  Get This Printable Delivered to Your Inbox 🎨
                </h2>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Enter your email to instantly receive this printable PDF and weekly learning resources.
                </p>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">

                {!success ? (
                  <>
                    <h3 className="text-3xl font-bold text-slate-800">
                      Unlock Free Download ✨
                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      We’ll send the printable PDF directly to your email.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-5"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className="w-full h-14 rounded-2xl border border-orange-200 px-5 outline-none focus:ring-4 focus:ring-orange-100 text-slate-700"
                        required
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all disabled:opacity-70"
                      >
                        {loading
                          ? "Sending Printable..."
                          : "Send Printable PDF ✨"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-green-100 mx-auto flex items-center justify-center text-5xl">
                      ✨
                    </div>

                    <h3 className="mt-8 text-4xl font-bold text-slate-800">
                      Check Your Inbox 🎉
                    </h3>

                    <p className="mt-5 text-lg leading-relaxed text-slate-600">
                      Your printable has been sent successfully.
                    </p>

                    <div className="mt-8">
                      <a
                        href={printable.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                      >
                        Download Directly
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ad Placeholder */}
      <section className="py-8">
        <Container>
          <div className="bg-white rounded-[32px] border border-dashed border-orange-200 p-10 text-center shadow-sm">
            <p className="text-slate-400 font-medium text-lg">
              [ GOOGLE ADSENSE AD PLACEMENT ]
            </p>
          </div>
        </Container>
      </section>

      {/* Related Printables */}
      <section className="py-20">
        <Container>

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              More Fun Printables ✨
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {relatedPrintables.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-7">

                  <span className="inline-block bg-orange-100 text-orange-500 text-sm px-4 py-2 rounded-full font-medium mb-5">
                    {item.age}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <Link href={`/downloads/${item.slug}`}>
                       <Button>
                        Get Printable
                       </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Newsletter />
    </div>
  );
}
