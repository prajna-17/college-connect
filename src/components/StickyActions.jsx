"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyActions() {
  return (
    <div className="fixed bottom-0 left-0 w-full  shadow-[0_-5px_20px_rgba(0,0,0,0.08)] p-3 z-50">
      <div className="flex gap-3 max-w-4xl mx-auto">
        {/* WhatsApp Button */}
        <a
          href="#"
          className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl py-3 text-gray-800 font-medium shadow-sm hover:shadow-md transition"
        >
          <span className="text-green-500 text-lg">
            <FaWhatsapp className="text-green-500 text-lg" />
          </span>
          Chat with us
        </a>

        {/* Call Back Button */}
        <button className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white rounded-xl py-3 font-medium shadow-sm hover:bg-cyan-600 transition">
          <Phone size={18} />
          Request a call back
        </button>
      </div>
    </div>
  );
}
