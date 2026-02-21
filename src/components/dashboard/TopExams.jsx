"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const exams = [
  {
    title: "CET 2026",
    image: "/img/cet.png",
    colleges: 30,
    date: "Feb 26, 2026",
    level: "Bachelors",
  },
  {
    title: "JEE 2026",
    image: "/img/jee.png",
    colleges: 50,
    date: "Jan 15, 2026",
    level: "Engineering",
  },
  {
    title: "NEET 2026",
    image: "/img/neet.png",
    colleges: 40,
    date: "May 10, 2026",
    level: "Medical",
  },
];

export default function TopExams() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1); // forward
    setIndex((prev) => (prev + 1) % exams.length);
  };

  const prev = () => {
    setDirection(-1); // backward
    setIndex((prev) => (prev === 0 ? exams.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-gray-800">Top Exams</h2>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-2 bg-white rounded-md shadow hover:bg-gray-200 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="p-2 bg-white rounded-md shadow hover:bg-gray-200 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={exams[index].title}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-[0_8px_20px_rgba(0,170,255,0.15)]"
          >
            {/* Top Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border">
                <Image
                  src={exams[index].image}
                  alt={exams[index].title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">
                Offline
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-cyan-600 mb-4">
              {exams[index].title}
            </h3>

            {/* Info Rows */}
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Participating Colleges</span>
                <span>{exams[index].colleges}</span>
              </div>

              <div className="flex justify-between">
                <span>Exam Date</span>
                <span>{exams[index].date}</span>
              </div>

              <div className="flex justify-between">
                <span>Exam Level</span>
                <span>{exams[index].level}</span>
              </div>
            </div>

            {/* Links */}
            <div className="mt-5 space-y-3 text-cyan-600 text-sm font-medium">
              <button className="flex justify-between w-full hover:underline transition">
                Application Process
                <span>›</span>
              </button>

              <button className="flex justify-between w-full hover:underline transition">
                Exam Info
                <span>›</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
