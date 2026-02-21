"use client";

import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="px-6 py-8">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/img/image8.jpg"
          alt="Stats"
          width={800}
          height={200}
          className="object-cover w-full"
        />

        <div className="absolute inset-0 bg-blue-600/70 flex justify-around items-center text-white py-6 text-center">
          <div>
            <h3 className="text-xl font-bold">10k+</h3>
            <p className="text-xs">Students Joined</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">50+</h3>
            <p className="text-xs">Partner Colleges</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">5k+</h3>
            <p className="text-xs">Mentorship Formed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
