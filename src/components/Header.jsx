"use client";

import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import SidebarDrawer from "@/components/SidebarDrawer";
export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <header className="w-full bg-[#292828] h-24 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/img/logo.png" // change to your exact image name
          alt="College Connect"
          width={80}
          height={40}
          priority
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-white">
        <Search size={22} className="cursor-pointer" />
        <button onClick={() => setOpenSidebar(true)}>
          <Menu size={24} />
        </button>{" "}
      </div>
      <SidebarDrawer
        isOpen={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />
    </header>
  );
}
