"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import WhatWeDo from "@/components/about/WhatWeDo";
import StatsSection from "@/components/about/StatsSection";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pb-20">
        <AboutHero />
        <WhoWeAre />
        <MissionVision />
        <WhatWeDo />
        <StatsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
