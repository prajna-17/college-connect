"use client";

import { useRef } from "react";
import Image from "next/image";

const colleges = [
  { name: "BFIT", location: "Dehradun", image: "/img/bfit1.jpeg", rating: 4.5 },
  {
    name: "DIT University",
    location: "Dehradun",
    image: "/img/dit.jpeg",
    rating: 4.5,
  },
  {
    name: "JBIT College",
    location: "Dehradun",
    image: "/img/jbit.jpeg",
    rating: 4.5,
  },
  { name: "UIT", location: "Dehradun", image: "/img/uit.jpeg", rating: 4.5 },
  {
    name: "BFIT",
    location: "Dehradun",
    image: "/img/jbit.jpeg",
    rating: 4.5,
  },
];

export default function PopularColleges() {
  const scrollRef = useRef(null);

  return (
    <>
      <style>{`
        /* Hide scrollbar cross-browser */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Hover lift & active press */
        .college-card {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .college-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(100, 160, 255, 0.24) !important;
        }
        .college-card:active {
          transform: scale(0.97);
        }
        .view-all-btn:hover { color: #374151 !important; }
      `}</style>

      <section
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          paddingTop: "28px",
          paddingBottom: "32px",
          fontFamily:
            "'Nunito', 'DM Sans', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "15px",
              fontWeight: "700",
              color: "#1a1a2e",
              lineHeight: 1.35,
            }}
          >
            {/* "Popular" gets the orange underline beneath it */}
            <span
              style={{
                display: "inline-block",
                position: "relative",
                paddingBottom: "6px",
                marginRight: "4px",
              }}
            >
              Popular
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width:
                    "52px" /* matches the ~partial underline in screenshot */,
                  height: "3px",
                  backgroundColor: "#f97316",
                  borderRadius: "2px",
                }}
              />
            </span>
            Colleges In Uttarakhand
          </h2>

          <button
            className="view-all-btn"
            style={{
              fontSize: "13px",
              color: "#9ca3af",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontWeight: "500",
              fontFamily: "inherit",
              flexShrink: 0,
              marginLeft: "12px",
              transition: "color 0.15s",
            }}
          >
            View All
          </button>
        </div>

        {/* ── Horizontal Scroll ── */}
        <div
          ref={scrollRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "14px",
            overflowX: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "10px",
            scrollSnapType: "x mandatory",
          }}
        >
          {colleges.map((college, index) => (
            <div
              key={index}
              className="college-card"
              style={{
                flexShrink: 0,
                /* Shows ~2.5 cards at once, matching the screenshot */
                width: "clamp(90px, 47vw, 160px)",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                scrollSnapAlign: "start",
                boxShadow: "0 14px 20px -10px rgba(59, 130, 246, 0.35)",
                cursor: "pointer",
              }}
            >
              {/* Card Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "120px",
                  backgroundColor: "#e5e7eb",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={college.image}
                  alt={college.name}
                  fill
                  sizes="(max-width: 300px) 58vw, 210px"
                  style={{ objectFit: "cover" }}
                />

                {/* Rating Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(255,255,255,0.96)",
                    borderRadius: "8px",
                    padding: "3px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#111827",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.14)",
                    lineHeight: 1,
                  }}
                >
                  {college.rating}
                  <span
                    style={{
                      color: "#f97316",
                      fontSize: "13px",
                      lineHeight: 1,
                    }}
                  >
                    ★
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "14px 16px 18px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#111827",
                    lineHeight: 1.3,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {college.name}
                </h3>
                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "13px",
                    color: "#9ca3af",
                    fontWeight: "500",
                    lineHeight: 1.3,
                  }}
                >
                  {college.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
