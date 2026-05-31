import Newsletter from "@/components/sections/Newsletter";
import Link from "next/link";
export default function KiddoHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-sky-50 text-slate-800 overflow-hidden">
     

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-orange-100 px-4 py-2 rounded-full mb-6 animate-bounce">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium">Trusted by modern parents</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              A brighter world for your
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"> little ones</span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Kiddo creates a joyful, secure, and engaging experience for children while giving parents complete peace of mind.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/stories">
              <button className="bg-gradient-to-r from-orange-400 to-pink-400 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl">
                Start Exploring
              </button>
              </Link>
              <Link href="/about">
              <button className="bg-white hover:bg-slate-50 border border-slate-200 px-8 py-4 rounded-2xl font-semibold shadow-md transition-all duration-300">
                Learn More
              </button>
              </Link>
            </div>
            {/*
            <div className="flex gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-orange-500">10K+</h3>
                <p className="text-slate-500 text-sm">Happy Families</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-500">99%</h3>
                <p className="text-slate-500 text-sm">Parent Satisfaction</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-500">24/7</h3>
                <p className="text-slate-500 text-sm">Support & Safety</p>
              </div>
            </div>*/}
          </div>

          {/* IMAGE PLACEHOLDER: HERO IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-pink-300/20 rounded-[40px] blur-2xl animate-pulse"></div>

            <div className="relative bg-white/70 backdrop-blur-xl p-5 rounded-[40px] shadow-2xl border border-white overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[30px] overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400 text-lg font-medium">
                [HERO IMAGE HERE]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider">Why Parents Love Kiddo</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Designed with care, trust, and joy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safe Environment',
                desc: 'Every interaction is thoughtfully designed with child safety and parental confidence in mind.',
                emoji: '🛡️'
              },
              {
                title: 'Interactive Learning',
                desc: 'Fun experiences that help children learn, grow, and stay curious every day.',
                emoji: '📚'
              },
              {
                title: 'Parent Friendly',
                desc: 'Easy-to-use controls and updates that keep parents connected and reassured.',
                emoji: '❤️'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg rounded-[32px] p-10 shadow-lg hover:shadow-2xl border border-slate-100 hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-100 to-pink-100 flex items-center justify-center text-4xl mb-8 group-hover:rotate-6 transition-transform duration-500">
                  {item.emoji}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,200,0,0.12),_transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* IMAGE PLACEHOLDER: TRUST SECTION IMAGE */}
          <div className="bg-slate-100 rounded-[40px] aspect-square flex items-center justify-center text-slate-400 text-lg font-medium shadow-xl">
            [TRUST SECTION IMAGE HERE]
          </div>

          <div>
            <p className="text-pink-500 font-semibold uppercase tracking-wider">Built for Families</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Every detail created to bring smiles and peace of mind
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Kiddo combines playful experiences with modern safety standards so children can explore freely while parents feel secure and informed.
            </p>

            <div className="space-y-6 mt-10">
              {[
                'Bright and engaging child-friendly design',
                'Simple experience for parents and families',
                'Modern technology focused on trust and reliability'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-slate-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials 
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 font-semibold uppercase tracking-wider">What Parents Say</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
            Trusted by families everywhere
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Kiddo instantly felt warm, safe, and welcoming for our family.',
              'The design feels modern while still being playful for children.',
              'Finally a platform that parents can trust completely.'
            ].map((quote, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-center mb-6 text-yellow-400 text-2xl">
                  ★★★★★
                </div>

                <p className="text-slate-600 leading-relaxed italic">
                  “{quote}”
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-300 to-pink-300"></div>
                  <div className="text-left">
                    <p className="font-semibold">Happy Parent</p>
                    <p className="text-sm text-slate-500">Kiddo Community</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* CTA */}
      <Newsletter/>

      
    </div>
  )
}

/*
====================================================
IMAGE PROMPTS FOR WEBSITE
====================================================

1. HERO IMAGE
Prompt:
“A bright modern illustration/photo-realistic scene of happy children and caring parents interacting in a safe, colorful digital environment, warm sunlight, pastel orange and yellow tones, modern UI-inspired setting, joyful atmosphere, trust and safety feeling, premium website hero image, soft gradients, cinematic lighting, ultra high quality”

2. TRUST SECTION IMAGE
Prompt:
“A warm and modern family-oriented illustration showing parents feeling reassured while children learn and play safely, soft pastel background, cheerful expressions, clean minimal modern design style, bright natural lighting, orange pink yellow color palette, premium startup website aesthetic”

====================================================
ANIMATION IDEAS
====================================================

- Floating background gradient blobs
- Hover lift animations on cards
- Soft pulse glow effects
- Button scale interactions
- Smooth fade-in sections using Framer Motion
- Scroll-triggered animations
- Gentle bouncing badge in hero section

====================================================
OPTIONAL NEXT STEPS
====================================================

- Add Framer Motion animations
- Add mobile hamburger menu
- Add dark/light mode toggle
- Add parallax scrolling effects
- Add interactive illustrations
- Add testimonials carousel
- Add FAQ section
- Add pricing section
- Add signup/login pages

*/
