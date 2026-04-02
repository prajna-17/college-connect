"use client";

import Image from "next/image";
import { MapPin, Star, ChevronRight } from "lucide-react";

export default function DetailsHero({ college }) {
  const handleDownload = () => {
    const fileName = college.brochure.split("/").pop();

    const link = document.createElement("a");
    link.href = `/api/download-brochure?file=${encodeURIComponent(fileName)}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full">
      <div className="relative w-full h-[250px]">
        <Image
          src={college.image}
          alt="College Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 px-4 flex items-center z-0">
          <div className="flex items-start gap-4 text-white">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
              <Image
                src={college.logo}
                alt={college.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h1 className="text-lg md:text-3xl font-semibold leading-snug">
                {college.name}
              </h1>

              <div className="flex items-center gap-2 mt-2 text-sm">
                <MapPin className="text-red-500" size={18} />
                <span>{college.location}</span>
              </div>

              <div className="flex items-center gap-2 mt-1 text-sm">
                <Star className="text-orange-400 fill-orange-400" size={18} />
                <span>{college.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50 mx-auto -mt-6 w-[90%] max-w-2xl bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-3">
        <p className="text-gray-600 mb-2 text-sm">Updated On 15 Feb 2026</p>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 border-2 border-cyan-500 text-sm text-cyan-600 py-3 rounded-xl cursor-pointer relative z-50 hover:bg-cyan-50 transition"
            onClick={handleDownload}
          >
            Brochure
          </button>

          <button
            onClick={() => alert("Start Application")}
            className="flex-1 bg-cyan-500 text-white text-sm py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-cyan-600 transition"
          >
            Start Application
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}