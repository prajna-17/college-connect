"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {  newsData  } from "@/data";


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

                <div className="relative w-full h-48">
                  <Image
                   src={item.icon}
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover rounded-lg"
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



