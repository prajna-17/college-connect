"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Courses :",
    value: "45+",
    icon: "/img/courses.png",
  },
  {
    title: "Avg Fees :",
    value: "Rs. 2.4 L/Year",
    icon: "/img/fees.png",
  },
  {
    title: "Total Seat :",
    value: "1535",
    icon: "/img/seats.png",
  },
  {
    title: "Campus :",
    value: "120 Acres",
    icon: "/img/campus.png",
  },
];

export default function KeyHighlights() {
  return (
    <section className="w-full bg-white px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Key Highlights</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -6,
              boxShadow: "0px 20px 40px rgba(0,170,255,0.25)",
            }}
            whileTap={{
              scale: 0.95,
              rotate: [0, -2, 2, -2, 0],
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl h-[95px] flex items-center gap-4 px-4 shadow-[0_12px_25px_rgba(0,170,255,0.18)] cursor-pointer transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm text-black font-medium">{item.title}</p>
              <p className="text-sm font-semibold text-black">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
