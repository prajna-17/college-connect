"use client";

import Image from "next/image";
import { MapPin, Star, Download, ChevronRight } from "lucide-react";

export default function DetailsHero() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[250px]">
        <Image
          src="/img/uit.jpeg" // replace later
          alt="College Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 px-4 flex items-center">
          <div className="flex items-start gap-4 text-white">
            {/* Round Logo */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
              <Image
                src="/img/college-logo.jpg" // replace later
                alt="College Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            {/* College Info */}
            <div>
              <h1 className="text-lg md:text-3xl font-semibold leading-snug">
                Uttaranchal University Of
                <br />
                Technology (UIT)
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 mt-2 text-sm">
                <MapPin className="text-red-500" size={18} />
                <span>Dehradun, Uttarakhand</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-1 text-sm">
                <Star className="text-orange-400 fill-orange-400" size={18} />
                <span>4.5 (2.5k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[90%] max-w-2xl bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-3">
        <p className="text-gray-600 mb-2 text-sm">Updated On 15 Feb 2026</p>

        <div className="flex gap-4">
          {/* Brochure Button */}
          <button
            onClick={() => alert("Download Brochure")}
            className="flex-1 border-2 border-cyan-500 text-sm text-cyan-600 py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-cyan-50 transition"
          >
            Brochure
            <Download size={18} />
          </button>

          {/* Start Application Button */}
          <button
            onClick={() => alert("Start Application")}
            className="flex-1 bg-cyan-500 text-white text-sm py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-cyan-600 transition"
          >
            Start Application
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Space below for floating card */}
      <div className="h-24"></div>
    </section>
  );
}
