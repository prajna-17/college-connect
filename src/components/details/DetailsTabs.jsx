"use client";

import { useState } from "react";

const tabs = ["Info", "Courses & Fees", "Cutoff", "Placement"];

export default function DetailsTabs() {
  const [activeTab, setActiveTab] = useState("Info");

  return (
    <section className="w-full bg-white px-4 pt-6">
      {/* Horizontal Scroll Tabs */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-cyan-500 text-white shadow-md"
                : "bg-gray-200 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Example Content */}
      <div className="mt-6">
        {activeTab === "Info" && (
          <div>
            <h2 className="text-xl font-semibold mb-3">More About UIT</h2>
            <p className="text-black font-medium leading-relaxed text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry!!
            </p>
          </div>
        )}

        {activeTab === "Courses & Fees" && (
          <p className="text-black">Courses & Fees Content</p>
        )}

        {activeTab === "Cutoff" && <p className="text-black">Cutoff Content</p>}

        {activeTab === "Placement" && (
          <p className="text-black">Placement Content</p>
        )}
      </div>
    </section>
  );
}
