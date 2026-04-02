import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { colleges, courseData } from "../../data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ colleges: [], courses: [] });
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) { setOpen(false); return; }
    const q = val.toLowerCase();

    const matchedColleges = colleges.filter(
      (c) => c.name.toLowerCase().includes(q) || c.location?.toLowerCase().includes(q)
    );

    const allCourses = [
      ...courseData.UG.map((c) => ({ ...c, type: "UG" })),
      ...courseData.PG.map((c) => ({ ...c, type: "PG" })),
      ...courseData.Diploma.map((c) => ({ ...c, type: "Diploma" })),
    ];
    const matchedCourses = allCourses.filter((c) =>
      c.title.toLowerCase().includes(q)
    );

    setResults({ colleges: matchedColleges, courses: matchedCourses });
    setOpen(true);
  };

  return (
    <div className="mt-8 w-full max-w-md relative" ref={ref}>
      <div className="flex items-center bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl px-4 py-3 shadow-lg">
        <Search className="text-white mr-3" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search colleges, courses..."
          className="flex-grow bg-transparent outline-none text-white placeholder-white text-base"
        />
        {query && (
          <button onClick={() => { setQuery(""); setOpen(false); }}>
            <X className="text-white" size={18} />
          </button>
        )}
      </div>

      {open && (results.colleges.length > 0 || results.courses.length > 0) && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">

          {results.colleges.length > 0 && (
            <>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Colleges</p>
              {results.colleges.map((c) => (
                <div key={c.id} onClick={() => { setQuery(c.name); setOpen(false); }}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 cursor-pointer border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-base">🏫</div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{c.name}</p>
                    <p className="text-xs text-gray-400">{c.location} · ⭐ {c.rating}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {results.courses.length > 0 && (
            <>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Courses</p>
              {results.courses.map((c, i) => (
                <div key={i} onClick={() => { setQuery(c.title.split("|")[0]); setOpen(false); }}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 cursor-pointer border-t border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-base">📚</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-800">{c.title.split("|")[0]}</p>
                      <span className={`text-xs px-1.5 py-0.5 rounded font-medium 
                        ${c.type === "UG" ? "bg-green-100 text-green-700" : 
                          c.type === "PG" ? "bg-purple-100 text-purple-700" : 
                          "bg-blue-100 text-blue-700"}`}>
                        {c.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{c.duration} · {c.fees}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}