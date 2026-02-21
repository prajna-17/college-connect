"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  GraduationCap,
  Info,
  HelpCircle,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

export default function SidebarDrawer({ isOpen, onClose }) {
  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { label: "Home", icon: Home },
    { label: "Explore Colleges", icon: GraduationCap },
    { label: "About Us", icon: Info },
    { label: "Contact Us", icon: HelpCircle },
    { label: "Login", icon: LogIn },
    { label: "Register", icon: UserPlus },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar Content */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50"
          >
            {/* Dark Header */}
            <div className="bg-[#2e2e2e] flex justify-between items-center px-5 py-4">
              <Image
                src="/img/logo.png"
                alt="College Connect"
                width={120}
                height={40}
              />
              <button onClick={onClose} className="text-white">
                <X size={26} />
              </button>
            </div>

            {/* White Card */}
            <div className="bg-white mx-4 mt-6 rounded-2xl shadow-[0_15px_40px_rgba(0,170,255,0.2)] p-6">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-4 py-5 border-b border-cyan-100 cursor-pointer"
                  >
                    <Icon size={24} className="text-cyan-500" />
                    <span className="text-lg font-medium text-cyan-600">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
