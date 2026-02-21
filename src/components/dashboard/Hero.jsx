"use client";

import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[45vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/img/herobg.jpeg')", // your exact image
        }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 leading-snug">
          Connecting Ambition
          <br />
          with Opportunity
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-black">
          Explore Colleges in <span className="font-bold">Uttarakhand</span>
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-md">
          <div className="flex items-center bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl px-4 py-3 shadow-lg">
            <Search className="text-white mr-3" size={20} />

            <input
              type="text"
              placeholder="Search colleges, courses..."
              className="flex-grow bg-transparent outline-none text-white placeholder-white text-base"
            />

            <span className="ml-3 text-white text-xl">›</span>
          </div>
        </div>
      </div>
    </section>
  );
}
