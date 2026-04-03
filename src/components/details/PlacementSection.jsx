const PlacementSection = ({ data }) => {
  const stats = [
    { label: "Highest Package", val: data.highlightStats.highestPackage, sub: data.highlightStats.year },
    { label: "Average Package", val: data.highlightStats.averagePackage, sub: `Median: ${data.highlightStats.medianPackage || "N/A"}` },
    { label: "Placement Rate", val: data.highlightStats.placementRate, sub: `${data.highlightStats.studentsPlaced} students placed` },
    { label: "Companies Visited", val: data.highlightStats.companiesVisited },
  ];

  const parseRate = (str) => parseInt(str) || 0;

  return (
    <div className="space-y-6">

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-1">{s.label}</p>
            <p className="text-lg font-semibold text-gray-900">{s.val}</p>
            {s.sub && <p className="text-xs text-gray-400 mt-1">{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* Branch-wise Table */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Branch-wise Placement
        </p>
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-left">
                <th className="px-3 py-2 font-medium">Course</th>
                <th className="px-3 py-2 font-medium">Avg</th>
                <th className="px-3 py-2 font-medium hidden sm:table-cell">Highest</th>
                <th className="px-3 py-2 font-medium">Placed</th>
              </tr>
            </thead>
            <tbody>
              {data.branchWise.map((b, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 font-medium text-gray-800">{b.course}</td>
                  <td className="px-3 py-2 text-gray-600">{b.avgPackage}</td>
                  <td className="px-3 py-2 text-gray-600 hidden sm:table-cell">{b.highestPackage}</td>
                  <td className="px-3 py-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      parseRate(b.placedStudents) >= 80
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {b.placedStudents}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Progress Bars */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Placement Rate by Branch
        </p>
        <div className="space-y-3">
          {data.branchWise.map((b, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{b.course}</span>
                <span className="font-medium">{b.placedStudents}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-400 rounded-full transition-all duration-700"
                  style={{ width: b.placedStudents }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Placements */}
      {data.notablePlacements?.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Notable Placements
          </p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {data.notablePlacements.map((n, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {n.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{n.name}</p>
                  <p className="text-xs text-gray-500">{n.course} &bull; {n.company}</p>
                </div>
                <span className="text-sm font-semibold text-green-600 whitespace-nowrap">{n.package}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Recruiters */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Top Recruiters
        </p>
        <div className="flex flex-wrap gap-2">
          {data.topRecruiters.map((r, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 bg-white">
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Note if present */}
      {data.highlightStats.note && (
        <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-3">
          * {data.highlightStats.note}
        </p>
      )}
    </div>
  );
};

export default PlacementSection;