"use client";


import { useState, use } from "react";




export default function Newsletter() {

const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try{
  await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email
    }),
  });
   setSuccess(true);
  }

  catch(error){
      console.error(error);
  }
  finally{
    setLoading(false);
    setEmail("");
  }
};




  return (
    <section className="px-5 py-24">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 rounded-[40px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10">
          {!success? (
            <>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get free bedtime stories every week
            </h2>
  
            <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of parents discovering magical educational content for their kids.
            </p>
            </>):(
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Thanks for subscribing!
              </h2>
    
              <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                
              </p>
            </>
            )}
          <form onSubmit={handleSubmit}>
          <div className="mt-10 bg-white rounded-3xl p-3 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto shadow-xl">
            <input
              
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) =>
                setEmail(e.target.value)}
              className="flex-1 outline-none px-4 py-4 rounded-2xl text-slate-700"
            />

            <button type="submit" className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">
              {loading?"Subscribing":"Subscribe"}
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}