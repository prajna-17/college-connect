"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="px-6 space-y-6">
      {/* Mission */}
      <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,170,255,0.15)] p-6 text-center">
        <Image
          src="/img/image2.jpg"
          alt="Mission"
          width={60}
          height={60}
          className="mx-auto mb-3"
        />
        <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
        <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,170,255,0.15)] p-6 text-center">
        <Image
          src="/img/image3.jpg"
          alt="Vision"
          width={60}
          height={60}
          className="mx-auto mb-3"
        />
        <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
        <p className="text-gray-600 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </section>
  );
}
