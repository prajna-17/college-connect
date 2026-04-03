import { useState } from "react";



const levels = ["All", "UG", "PG", "Diploma", "PhD"];

const levelColors = {
  UG:      "bg-blue-100 text-blue-800",
  PG:      "bg-green-100 text-green-800",
  Diploma: "bg-amber-100 text-amber-800",
  PhD:     "bg-purple-100 text-purple-800",
};

export default function CoursesAndFees({ data }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? data : data.filter((c) => c.level === active);

  return (
    <div className="p-4">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setActive(level)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              active === level
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">{filtered.length} courses found</p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((c, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[c.level]}`}
            >
              {c.level}
            </span>

            <h3 className="mt-2 mb-3 text-sm font-semibold text-gray-900 leading-snug">
              {c.course}
            </h3>

            {[
              ["Duration",    c.duration],
              ["Total fees",  c.totalFees],
              ["Per year",    c.perYearFees],
              ["Eligibility", c.eligibility],
            ].map(([label, val]) => (
              <div
                key={label}
                className="flex justify-between text-xs py-1.5 border-b border-gray-100 last:border-0 gap-2"
              >
                <span className="text-gray-400 shrink-0">{label}</span>
                <span className="text-gray-800 font-medium text-right">{val}</span>
              </div>
            ))}

            <div className="flex flex-wrap gap-1 mt-3">
              {c.specializations.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}