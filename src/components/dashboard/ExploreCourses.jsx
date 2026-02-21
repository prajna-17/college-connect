"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courseData = {
  UG: [
    {
      title: "BBA | Bachelor of Business Administration",
      duration: "3 Years",
      fees: "Rs. 1 - 1.5 Lakhs",
      colleges: 25,
    },
    {
      title: "BCA | Bachelor of Computer Applications",
      duration: "3 Years",
      fees: "Rs. 1.2 - 1.8 Lakhs",
      colleges: 20,
    },
  ],

  PG: [
    {
      title: "PGDM | Post Graduate Diploma Management",
      duration: "2 Years",
      fees: "Rs. 2 - 2.5 Lakhs",
      colleges: 30,
    },
    {
      title: "MBA | Master of Business Administration",
      duration: "2 Years",
      fees: "Rs. 2.5 - 3 Lakhs",
      colleges: 28,
    },
  ],

  Diploma: [
    {
      title: "Diploma in Engineering",
      duration: "3 Years",
      fees: "Rs. 80k - 1.2 Lakhs",
      colleges: 18,
    },
    {
      title: "Diploma in Pharmacy",
      duration: "2 Years",
      fees: "Rs. 90k - 1.3 Lakhs",
      colleges: 15,
    },
  ],
};

export default function ExploreCourses() {
  const [activeTab, setActiveTab] = useState("PG");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const courses = courseData[activeTab];

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % courses.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Explore Courses
          </h2>

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

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          {["UG", "PG", "Diploma"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "border border-cyan-500 text-cyan-600 bg-cyan-50"
                    : "bg-white text-gray-500 border border-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={courses[index].title}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-[0_8px_20px_rgba(0,170,255,0.15)]"
            >
              <div className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md mb-3">
                Offline
              </div>

              <h3 className="text-base font-semibold text-cyan-600 mb-4">
                {courses[index].title}
              </h3>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{courses[index].duration}</span>
                </div>

                <div className="flex justify-between">
                  <span>Average Fees</span>
                  <span>{courses[index].fees}</span>
                </div>

                <div className="flex justify-between">
                  <span>Colleges</span>
                  <span>{courses[index].colleges}</span>
                </div>
              </div>

              <button className="mt-5 text-cyan-600 text-sm font-medium hover:underline transition">
                Read More →
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
