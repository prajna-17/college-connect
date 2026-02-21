"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsData = [
  {
    category: "Exam",
    date: "26th Feb 2026",
    title: "JEE Mains 2026 Exam Analysis ...",
    description:
      "It is a long established fact that a reader will be distracted...",
    icon: "/img/exam.png",
  },
  {
    category: "Courses",
    date: "26th Feb 2026",
    title: "Civil Engineering Courses ...",
    description:
      "It is a long established fact that a reader will be distracted...",
    icon: "/img/courses.png",
  },
  {
    category: "Exam",
    date: "26th Feb 2026",
    title: "JEE Mains 2026 Result Update ...",
    description:
      "It is a long established fact that a reader will be distracted...",
    icon: "/img/exam.png",
  },
];

export default function LatestNews() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Latest News
        </h2>

        {/* Slider */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="min-w-[65%] sm:min-w-[45%] md:min-w-[30%] border border-gray-300 bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Top Blue Section */}
              <div className="bg-[#d9eef7] p-4 relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <div className="w-8 h-8 relative">
                    <Image
                      src={item.icon}
                      alt={item.category}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-600">{item.date}</p>
              </div>

              {/* Bottom Section */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                <button className="text-cyan-600 text-sm font-medium hover:underline transition">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
