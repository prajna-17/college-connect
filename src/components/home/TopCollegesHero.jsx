"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopCollegesHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Stream");

  // Disable background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const filterData = {
    Stream: [
      "Engineering",
      "Medical",
      "Law",
      "Science",
      "Management",
      "Design",
      "Arts",
      "Commerce",
      "Agriculture",
      "Architecture",
    ],
    "College Type": ["Private", "Government", "Public-Private"],
    Degree: ["B.Tech", "BBA", "MBA", "MBBS", "B.Sc", "M.Sc"],
    Specializations: [
      "Computer Science",
      "Mechanical",
      "Civil",
      "Finance",
      "Marketing",
    ],
    City: ["Dehradun", "Haridwar", "Roorkee", "Haldwani"],
    Area: ["Urban", "Semi-Urban", "Rural"],
    "Fees Range": ["< 1 Lakh", "1-3 Lakh", "3-5 Lakh", "> 5 Lakh"],
    Rating: ["4+ Stars", "3+ Stars", "2+ Stars"],
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className={`w-full py-12 px-4 -mb-15 bg-white ${
          isOpen ? "blur-sm" : ""
        } transition`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold text-black whitespace-nowrap">
                <span className="relative inline-block">
                  Top
                  <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400 rounded"></span>
                </span>{" "}
                Colleges In Uttarakhand
              </h1>
              <p className="text-gray-700 mt-4 max-w-[450px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at it layout.
              </p>
            </div>

            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 self-start mt-42 border-2 border-cyan-500 text-cyan-600 px-2 py-2 rounded-xl font-medium shadow-sm hover:bg-cyan-50 transition"
            >
              <SlidersHorizontal size={20} />
              Filters
            </motion.button>
          </div>
        </div>
      </section>

      {/* FILTER MODAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[500px] bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-400 text-white p-6 rounded-bl-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <p className="text-sm opacity-90">155 Results</p>
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 overflow-hidden font-medium">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-blue-50 border-r ">
                  {Object.keys(filterData).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left px-4 py-4 text-sm font-bold ${
                        activeTab === key
                          ? "bg-white border-r-4 border-cyan-500 text-black"
                          : "text-gray-600"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Right Options */}
                <div className="w-2/3 p-6 overflow-y-auto">
                  {filterData[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b"
                    >
                      <span className="text-gray-800">{item}</span>
                      <input
                        type="radio"
                        name={activeTab}
                        className="w-5 h-5 accent-cyan-500 text-cyan-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-4 border-t flex gap-4">
                <button className="w-1/2 border-2 border-cyan-500 text-cyan-600 py-3 rounded-xl font-medium">
                  Clear All
                </button>
                <button className="w-1/2 bg-cyan-500 text-white py-3 rounded-xl font-medium">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
