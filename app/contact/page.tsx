"use client";

import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { useState, use } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ContactPage() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try{
  await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });
   setSuccess(true);
  }

  catch(error){
      console.error(error);
  }
  finally{
    setLoading(false);
  }
};


  return (
    <LegalPageLayout
      title="Contact Us"
      description="Have a question, suggestion or partnership idea? We'd love to hear from you."
    >
      <div className="space-y-10">

        {/* Intro */}
        <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get in Touch 💌
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Whether you have feedback, story ideas, printable requests,
            partnership opportunities or simply want to say hello,
            feel free to reach out.
          </p>
        </div>

        {/* Contact Form */}
        {!success ?(
            <>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" >

            <div>
                
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                setName(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="How can we help?"
                value={subject}
                onChange={(e) =>
                setSubject(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) =>
                setMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition-transform"
            >
              {loading
                          ? "Sending Message..."
                          : "Send Message ✨"}
              
            </button>

          </form>
        </div> </>):(
            <>
            <div className="min-h-screen flex items-center justify-center bg-[#fffaf7] px-5 text-center">
              <div>
                <h1 className="text-5xl font-bold text-slate-800">
                  Messaage sent!
                </h1>
      
                <p className="mt-5 text-slate-600 text-lg">
                  Thanks for reaching out to us we will look into message for sure and will get back to you as soon as possible.
                </p>
      
                <div className="mt-8">
                  <Link href="/stories">
                    <Button>Back to Stories</Button>
                  </Link>
                </div>
              </div>
            </div>
            </>
        )}

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
            <div className="text-3xl mb-3">📧</div>

            <h3 className="font-bold text-lg mb-2">
              Email
            </h3>

            <p className="text-gray-700">
              hello@kiddo.com
            </p>
          </div>

          <div className="bg-green-50 rounded-3xl p-6 border border-green-100">
            <div className="text-3xl mb-3">💡</div>

            <h3 className="font-bold text-lg mb-2">
              Suggestions
            </h3>

            <p className="text-gray-700">
              Share ideas for stories and printables.
            </p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-6 border border-purple-100">
            <div className="text-3xl mb-3">🤝</div>

            <h3 className="font-bold text-lg mb-2">
              Partnerships
            </h3>

            <p className="text-gray-700">
              Collaborate with Kiddo on educational content.
            </p>
          </div>

        </div>

        {/* FAQ Reminder */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-100">

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Looking for Quick Answers?
          </h2>

          <p className="text-gray-700 mb-4">
            You may find what you're looking for in our FAQ section.
          </p>

          <a
            href="/faq"
            className="inline-block bg-white px-6 py-3 rounded-2xl font-semibold shadow-sm hover:bg-gray-50"
          >
            Visit FAQ →
          </a>

        </div>

      </div>
    </LegalPageLayout>
  );
}