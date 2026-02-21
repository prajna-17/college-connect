"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const facilities = [
  {
    title: "Academic Spaces",
    content:
      "Smart classrooms equipped with projectors, seminar halls, collaborative discussion rooms, and modern lecture theatres.",
  },
  {
    title: "Incubation Centers",
    content:
      "Startup incubation support, mentorship programs, innovation labs, and funding assistance for student entrepreneurs.",
  },
  {
    title: "Guest House",
    content:
      "Fully furnished guest rooms for visiting faculty, parents, and official guests with dining and lounge facilities.",
  },
  {
    title: "Laboratories",
    content:
      "Advanced labs for Mechanical, Civil, Computer Science, Physics, Chemistry, and Electronics with modern equipment.",
  },
  {
    title: "Library",
    content:
      "Digital library access, thousands of books, research journals, e-resources, and silent study zones.",
  },
  {
    title: "Medical Facilities",
    content:
      "On-campus health center with qualified doctors, emergency services, and first-aid assistance.",
  },
  {
    title: "Cafeteria",
    content:
      "Hygienic multi-cuisine cafeteria offering vegetarian and non-vegetarian meals at affordable prices.",
  },
  {
    title: "Hostels",
    content:
      "Separate boys and girls hostels with WiFi, 24/7 security, mess facilities, and recreational spaces.",
  },
  {
    title: "Auditorium",
    content:
      "Large fully air-conditioned auditorium for seminars, cultural events, workshops, and conferences.",
  },
  {
    title: "Student Help Desk",
    content:
      "Dedicated student support center for academic queries, documentation, grievance redressal, and guidance.",
  },
  {
    title: "Transport Service",
    content:
      "University-operated bus services covering major city routes with safety and punctuality.",
  },
];

export default function CampusFacilities() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-8">Campus Facilities at UIT</h2>

      <div className="flex flex-col">
        {facilities.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Row */}
            <motion.div
              onClick={() => toggle(index)}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between py-5 cursor-pointer"
            >
              <p className="text-lg font-semibold">{item.title}</p>

              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <Plus size={26} />
              </motion.div>
            </motion.div>

            {/* Expand Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
