"use client";

import Image from "next/image";

export default function CampusBanner() {
  return (
    <section className="w-full bg-white py-8 px-4">
      {/* Outer Light Border Box */}
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-lg p-3 bg-white">
        {/* Banner Image */}
        <div className="relative w-full h-[66px] sm:h-[110px] md:h-[130px] rounded-md overflow-hidden">
          <Image
            src="/img/lifeoncam.png" // change to your exact banner name
            alt="Life on Campus"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
