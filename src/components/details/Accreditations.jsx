"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const accreditations = [
  {
    title: "AICTE Approved",
    icon: "/img/accreditation.png",
  },
  {
    title: "NAAC Grade A+",
    icon: "/img/accreditation.png",
  },
  {
    title: "INI",
    icon: "/img/accreditation.png",
  },
];

export default function Accreditations() {
  return (
    <section className="w-full bg-white px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-8">
        Accreditations & Recognitions
      </h2>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {accreditations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -5,
              boxShadow: "0px 18px 35px rgba(0,170,255,0.20)",
            }}
            whileTap={{
              scale: 0.96,
              rotate: [0, -1.5, 1.5, -1.5, 0],
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-gray-50 rounded-2xl h-[80px] flex items-center gap-6 px-6 shadow-md cursor-pointer transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl font-medium text-black">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
