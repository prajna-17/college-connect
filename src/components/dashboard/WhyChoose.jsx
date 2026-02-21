"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Accurate Results",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: "/img/accurate.png",
    bg: "bg-yellow-100",
  },
  {
    title: "Personalized Recommendation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: "/img/personalized.png",
    bg: "bg-green-100",
  },
  {
    title: "Trusted By Thousand",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: "/img/trusted.png",
    bg: "bg-orange-100",
  },
  {
    title: "Real Time Update",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: "/img/realtime.png",
    bg: "bg-pink-100",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[20px] font-semibold text-gray-900">
            Why Choose College Connect ?
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Your trusted partner in making informed decisions about educational
            future
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-7">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,170,255,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-[0_10px_25px_rgba(0,170,255,0.18)]"
            >
              {/* Top Row */}
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Description directly under icon */}
              <div className="flex gap-4">
                <div className="w-14" /> {/* empty space same as icon width */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
