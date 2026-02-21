"use client";

import Image from "next/image";

const team = [
  {
    name: "Neha Jain",
    role: "Co-founder",
    image: "/img/m2.jpeg",
  },
  {
    name: "Ashish Rao",
    role: "CEO",
    image: "/img/m2.jpeg",
  },
  {
    name: "Priya Jain",
    role: "Co-founder",
    image: "/img/m2.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-2xl font-semibold text-black mb-20">
          The Minds Behind the Tech
        </h2>

        {/* Cards Row */}
        <div className="grid grid-cols-3 gap-4 px-2">
          {team.map((member, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Circle */}
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Card */}
              <div className="w-full bg-white rounded-2xl mt-[-35px] md:mt-[-50px] pt-10 md:pt-16 pb-4 md:pb-6 px-2 md:px-4 text-center shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
                <h3 className="text-[13px] md:text-xl font-semibold text-black">
                  {member.name}
                </h3>

                <p className="text-[11px] md:text-base text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
