"use client";

import { MapPin, Phone, Globe } from "lucide-react";

export default function CollegeContact() {
  return (
    <section className="w-full bg-white px-3 py-5">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-8">UIT College Details</h2>

      {/* Card */}
      <div className="bg-gray-50 rounded-2xl shadow-[0_18px_40px_rgba(0,170,255,0.20)] overflow-hidden">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps?q=Dehradun,Uttarakhand&output=embed"
          width="100%"
          height="250"
          loading="lazy"
          className="w-full"
        ></iframe>

        {/* Contact Details */}
        <div className="p-8 flex flex-col gap-8">
          {/* Location */}
          <div className="flex items-center gap-6">
            <MapPin size={28} className="text-gray-500" />
            <p className="text-lg text-gray-600">Dehradun, Uttarakhand</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-6">
            <Phone size={28} className="text-gray-500" />
            <a
              href="tel:01212341234"
              className="text-lg text-gray-600 hover:text-black transition"
            >
              012 – 1234 – 1234
            </a>
          </div>

          {/* Website */}
          <div className="flex items-center gap-6">
            <Globe size={28} className="text-gray-500" />
            <a
              href="https://www.uit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-black transition"
            >
              www.UIT.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
