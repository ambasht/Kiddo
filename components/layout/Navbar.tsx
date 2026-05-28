"use client";
import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="bg-gradient-to-b from-orange-50 via-white to-yellow-50 text-slate-800 overflow-hidden">
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center shadow-md text-white font-bold text-xl">
            K
          </div>

          <div>
            <h1 className="text-2xl font-bold">Kiddo</h1>
            <p className="text-xs text-slate-500">
              Stories & Learning
            </p>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4 font-medium text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/printables">Printables</Link>
            <Link href="/parenting">Parenting</Link>
            <Link href="/healthy-food">Healthy Food</Link>
          </div>
        )}
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/">Home</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/printables">Printables</Link>
          {/*<Link href="/parenting">Parenting</Link>
          <Link href="/healthy-food">Healthy Food</Link>*/}
          <Link href="/about">About</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
           onClick={() => setMenuOpen(!menuOpen)}
           className="md:hidden flex flex-col gap-1.5"
         >
           <span className="w-6 h-0.5 bg-slate-700 rounded-full"></span>
           <span className="w-6 h-0.5 bg-slate-700 rounded-full"></span>
           <span className="w-6 h-0.5 bg-slate-700 rounded-full"></span>
         </button>
      </div>
    </header>
    </div>
    
  );

}