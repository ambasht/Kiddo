import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-5 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold">
            Kiddo
          </h3>

          <p className="text-slate-400 mt-4 leading-relaxed">
            Creative learning resources designed for joyful little learners.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/printables">Printables</Link>
          <Link href="/parenting">Parenting</Link>
          <Link href="/healthy-food">Healthy Food</Link>
        </div>

        {/* Social */}
        <div>
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
    </footer>
  );
}