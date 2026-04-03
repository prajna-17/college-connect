"use client";

import PlacementSection from "./PlacementSection";
import { useState } from "react";
import CoursesAndFees from "./CoursesAndFees"; 

const tabs = ["Info", "Courses & Fees", "Cutoff", "Placement"];

export default function DetailsTabs({ college }) {
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
            <h2 className="text-xl font-semibold mb-3">
              More About {college.name}
            </h2>
            <p className="text-black font-medium leading-relaxed text-[15px]">
              {college.desc}
            </p>
          </div>
        )}
        {activeTab === "Courses & Fees" && (
  <CoursesAndFees data={college.coursesAndFees} />
)}
        {activeTab === "Cutoff" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Cutoff 2026</h2>
            {college.cutoff && college.cutoff.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cyan-500 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-xl">
                        Course
                      </th>
                      <th className="px-4 py-3 text-center">General</th>
                      <th className="px-4 py-3 text-center">OBC</th>
                      <th className="px-4 py-3 text-center">SC</th>
                      <th className="px-4 py-3 text-center rounded-tr-xl">
                        ST
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.cutoff.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-4 py-3 font-medium text-black">
                          {row.course}
                        </td>
                        <td className="px-4 py-3 text-center text-black">
                          {row.general}
                        </td>
                        <td className="px-4 py-3 text-center text-black">
                          {row.obc}
                        </td>
                        <td className="px-4 py-3 text-center text-black">
                          {row.sc}
                        </td>
                        <td className="px-4 py-3 text-center text-black">
                          {row.st}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">
                Is college ka cutoff data abhi available nahi hai.
              </p>
            )}
          </div>
        )}

        {activeTab === "Placement" && (
          <div className="p-4">
            {college.placement ? (
              <PlacementSection data={college.placement} />
            ) : (
              <p className="text-gray-500 text-sm">
                Placement data not available.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
