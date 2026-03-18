 "use client";

import { motion } from "framer-motion";
import { MapPin, Trophy, BookOpen, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { colleges } from "@/data";

export  function PopularColleges() {
  return (
    <div>
      {colleges.map((college) => (
        <div key={college.id}>
          <h3>{college.name}</h3>
          <p>{college.location}</p>
        </div>
      ))}
    </div>
  );
}


export default function TopCollegesList() {
  const router = useRouter();
  return (
    <section className="w-full bg-[#ffffff] py-10 px-4">
    <div className="flex overflow-x-auto gap-6 pb-4">
        {colleges.map((college) => (
          <motion.div
            key={college.id}
           onClick={() => router.push(`/details/${college.id}`)}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden w-[300px] flex-shrink-0"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover"
              />

              {/* Rating Badge */}
              <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md flex items-center gap-1 shadow text-sm font-medium">
                {college.rating}
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <img
                  src={college.logo}
                  alt="logo"
                  className="w-14 h-14 rounded-full border object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900 leading-snug text-sm">
                    {college.name}
                  </h3>

                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="mr-1 text-red-500" />
                    {college.location}
                  </div>
                </div>
              </div>

              <hr className="my-4 text-gray-300" />

              {/* Accreditation + Exams */}
              <div className="flex justify-between text-sm mb-4">
                <div className="flex items-center gap-2 text-purple-600">
                  <Trophy size={16} />
                  <div>
                    <p className="text-purple-500 text-xs font-semibold">
                      Accreditation
                    </p>
                    <p className="font-medium text-gray-800">
                      {college.accreditation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-600">
                  <BookOpen size={16} />
                  <div>
                    <p className="text-green-600 text-xs font-semibold">
                      Exams
                    </p>
                    <p className="font-medium text-gray-800">{college.exams}</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-1/2 border-2 border-cyan-500 text-cyan-600 py-2 rounded-lg font-medium transition hover:bg-cyan-50"
                 onClick={() => router.push("/details")}
                >
                  View Details
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-1/2 bg-cyan-500 text-white py-2 rounded-lg font-medium shadow hover:bg-cyan-600 transition"
                  onClick={() => alert("Get Counselling Clicked")}
                >
                  Get Counselling
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}