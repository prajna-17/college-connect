"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviewsData } from "@/data";


export default function StudentCorner() {
  return (
    <section className="w-full bg-white px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Student Corner</h2>

        <button
          onClick={() => alert("View All Reviews")}
          className="text-gray-500 underline hover:text-black transition"
        >
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {reviewsData.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -5,
              boxShadow: "0px 20px 40px rgba(0,170,255,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-50 rounded-2xl p-2 shadow-[0_15px_35px_rgba(0,170,255,0.18)] cursor-pointer transition-all duration-300"
          >
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <Star size={22} fill="#F97316" stroke="#F97316" />
              <span className="text-lg font-medium">{review.rating}</span>
            </div>

            {/* Quote */}
            <p className="text-lg font-medium mb-4">“ {review.quote} ”</p>

            {/* Name & Details */}
            <p className="text-lg font-semibold">
              -{review.name}
              <span className="text-gray-400 font-normal">
                {" "}
                {review.course} | {review.batch}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
