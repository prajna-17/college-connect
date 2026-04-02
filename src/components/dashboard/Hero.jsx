"use client";
import SearchBar from "./SearchBar";

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
         <SearchBar />
        </div>
      
    </section>
  );
}
