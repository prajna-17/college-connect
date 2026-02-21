"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/img/grad.jpeg" // replace with your real hero image
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
          <h1 className="text-white text-[24px] sm:text-[30px] md:text-[36px] font-semibold leading-snug max-w-3xl">
            Bridging the gap between
            <br />
            students and opportunities
          </h1>
        </div>
      </div>

      {/* SVG Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,120 720,90 C960,60 1200,20 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
