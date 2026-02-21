"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const processes = [
  {
    title: "Entrance Exam",
    icon: "/img/exam.png",
    content:
      "Candidates must appear for JEE Main or university entrance examination. Selection is based on merit and exam performance.",
  },
  {
    title: "Cutoff & Shortlisting",
    icon: "/img/cutoff.png",
    content:
      "Based on exam results, cutoff marks are released. Eligible candidates are shortlisted for counseling and document verification.",
  },
  {
    title: "Final Admission",
    icon: "/img/admission.png",
    content:
      "After verification and fee submission, final admission confirmation is granted. Students receive enrollment details.",
  },
];

export default function AdmissionProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-8">
        Admission Process 2026–2027
      </h2>

      <div className="flex flex-col gap-6">
        {processes.map((item, index) => (
          <div key={index}>
            {/* Card */}
            <motion.div
              onClick={() => toggleCard(index)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 rounded-2xl h-[85px] flex items-center justify-between px-6 shadow-[0_15px_35px_rgba(0,170,255,0.18)] cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={45}
                  height={45}
                />
                <p className="text-lg font-semibold">{item.title}</p>
              </div>

              <motion.div
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight size={26} />
              </motion.div>
            </motion.div>

            {/* Expandable Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden bg-white px-6 pt-4 pb-6 rounded-b-2xl"
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
