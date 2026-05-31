import React from "react";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-[#FFFDF8] min-h-screen">

      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-orange-50 via-pink-50 to-[#FFFDF8]">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            📖 Kiddo Information
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            {description}
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-orange-100 p-8 md:p-12">

          {children}

        </div>
      </section>

    </main>
  );
}