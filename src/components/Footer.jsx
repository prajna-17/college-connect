"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#292828] text-white px-6 pt-10 pb-1 relative">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/img/logo.png" // change if needed
          alt="College Connect"
          width={80}
          height={40}
        />
      </div>

      {/* Tagline */}
      <h2 className="text-xl font-medium mb-6">
        Find The Best{" "}
        <span className="border-b-2 border-orange-400">Right</span> College
      </h2>

      {/* Newsletter */}
      <p className="mb-3 text-lg">Subscribe to our Newsletter!</p>

      <div className="flex items-center mb-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-white text-black rounded-xl px-1 py-2 outline-none"
        />
        <button className="ml-3 bg-blue-500 w-16 h-10 rounded-full flex items-center justify-center text-white text-xl">
          →
        </button>
      </div>

      {/* Social Section */}
      <p className="mb-3 text-lg">Follow Us on</p>

      <div className="flex gap-6 mb-6">
        <Image src="/img/linkedin.png" alt="LinkedIn" width={28} height={28} />
        <Image src="/img/facebook.png" alt="Facebook" width={28} height={28} />
        <Image
          src="/img/instagram.png"
          alt="Instagram"
          width={28}
          height={28}
        />
      </div>

      {/* Contact */}
      {/* Contact */}
      <div className="flex items-center justify-between text-sm mb-8">
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-white" />
          <span>+1 206-214-2298</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} className="text-white" />
          <span>support@atulyam.com</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex justify-between text-sm border-t border-gray-500 pt-4">
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Privacy Policy</span>
      </div>

      {/* Sticky Buttons */}
      {/* <div className="fixed bottom-0 left-0 w-full flex">
        <button className="w-1/2 bg-white text-black py-4 font-medium">
          💬 Chat with us
        </button>

        <button className="w-1/2 bg-blue-500 text-white py-4 font-medium">
          Get a call back
        </button>
      </div> */}
    </footer>
  );
}
