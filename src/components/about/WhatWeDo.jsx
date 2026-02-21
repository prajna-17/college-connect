"use client";

import Image from "next/image";

const services = [
  { title: "College Discover", img: "/img/image4.jpg" },
  { title: "Student-college connect", img: "/img/image5.jpg" },
  { title: "Guided Decision", img: "/img/image6.jpg" },
  { title: "Community Support", img: "/img/image7.jpg" },
];

export default function WhatWeDo() {
  return (
    <section className="px-6 py-8 bg-white">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">What We Do</h2>

      <div className="grid grid-cols-2 gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-[0_8px_20px_rgba(0,170,255,0.15)] flex items-center gap-3"
          >
            <Image src={item.img} alt={item.title} width={40} height={40} />
            <span className="text-sm font-semibold text-gray-900">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
