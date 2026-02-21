"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const data = {
  UG: [
    {
      title: "Bachelor Of Technology ( B. Tech )",
      specs: [
        "B.Tech in Information Technology",
        "B.Tech in Aerospace Engineering",
        "B.Tech in Mechanical Engineering",
      ],
    },
    {
      title: "Bachelor Of Science",
      specs: [
        "Bachelor of Science in Physics",
        "Bachelor of Science in Chemistry",
        "Bachelor of Science in Maths",
      ],
    },
    {
      title: "Bachelor Of Technology ( B. Tech )",
      specs: [
        "B.Tech in Information Technology",
        "B.Tech in Aerospace Engineering",
        "B.Tech in Mechanical Engineering",
      ],
    },
  ],
  PG: [
    {
      title: "Master Of Technology ( M.Tech )",
      specs: [
        "M.Tech in Civil Engineering",
        "M.Tech in Computer Science",
        "M.Tech in Electrical Engineering",
      ],
    },
  ],
  Diploma: [
    {
      title: "Diploma in Engineering",
      specs: [
        "Diploma in Mechanical",
        "Diploma in Civil",
        "Diploma in Electrical",
      ],
    },
  ],
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("UG");
  const [visibleCount, setVisibleCount] = useState(2);

  const courses = data[activeTab];

  return (
    <section className="w-full bg-white px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Courses Offered at UIT</h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {["UG", "PG", "Diploma"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setVisibleCount(2);
            }}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
              activeTab === tab
                ? "border-cyan-500 text-cyan-600 bg-cyan-50"
                : "border-gray-300 text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {courses.slice(0, visibleCount).map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-2xl p-6 shadow-[0_15px_35px_rgba(0,170,255,0.15)]"
          >
            {/* Course Title */}
            <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

            {/* Specializations */}
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              SPECIALIZATIONS
            </p>

            <div className="flex flex-col gap-3 mb-4">
              {course.specs.map((spec, i) => (
                <div
                  key={i}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white"
                >
                  {spec}
                </div>
              ))}
            </div>

            {/* +10 Button */}
            <button className="border border-gray-300 rounded-lg px-5 py-2 text-sm mb-5">
              +10
            </button>

            {/* Enquiry Button */}
            <button
              onClick={() => alert("Enquiry Clicked")}
              className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 transition"
            >
              Enquiry Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* View More */}
      {visibleCount < courses.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount(courses.length)}
            className="border-2 border-cyan-500 text-cyan-600 px-8 py-3 rounded-xl hover:bg-cyan-50 transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
