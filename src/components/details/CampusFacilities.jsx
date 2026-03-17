"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import{facilities}  from "@/data";



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
