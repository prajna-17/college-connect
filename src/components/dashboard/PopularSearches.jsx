"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const data = [
  {
    title: "New Age Colleges",
    items: [
      "AI & Data Science Institutes",
      "FinTech Colleges",
      "Design & Creative Universities",
      "Sustainable Technology Schools",
    ],
  },
  {
    title: "Courses",
    items: [
      "B.Tech Computer Science",
      "MBA in Marketing",
      "Civil Engineering",
      "BCA & MCA Programs",
    ],
  },
  {
    title: "Entrance Exams",
    items: ["JEE Main", "NEET", "CUET", "CAT"],
  },
  {
    title: "Resources",
    items: [
      "Previous Year Papers",
      "Syllabus PDF",
      "College Comparison Tool",
      "Rank Predictor",
    ],
  },
  {
    title: "Tools & Predictor",
    items: ["College Predictor", "Exam Rank Predictor", "Fees Calculator"],
  },
  {
    title: "College Admission Forms",
    items: [
      "Apply to Top Colleges",
      "Track Application Status",
      "Scholarship Forms",
    ],
  },
];

export default function PopularSearches() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Popular Searches
        </h2>

        <div className="space-y-5">
          {data.map((section, index) => (
            <div key={index} className="border-b border-cyan-100 pb-4">
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-base font-medium text-gray-800">
                  {section.title}
                </span>

                <motion.div
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* Animated Content */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            y: -3,
                            boxShadow: "0px 10px 20px rgba(0,170,255,0.15)",
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="bg-gray-50 rounded-xl p-3 text-sm text-gray-700 cursor-pointer transition-all duration-300"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
