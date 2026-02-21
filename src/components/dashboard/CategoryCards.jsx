"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { title: "Govt. College", img: "/img/govt.png" },
  { title: "Private College", img: "/img/private.png" },
  { title: "Medical", img: "/img/ste.png" },
  { title: "Management", img: "/img/management.png" },
];

export default function CategoryCards() {
  return (
    <section className="w-full py-6 bg-white">
      <div className="grid grid-cols-4 gap-3 px-3">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl h-[110px] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(0,170,255,0.2)]"
          >
            {/* Bounce only image */}
            <motion.div
              whileTap={{ y: [-6, 0, -6, 0] }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>

            <p className="mt-2 text-[11px] font-semibold text-gray-700">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
