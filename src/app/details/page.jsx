"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetailsHero from "@/components/details/DetailsHero";
import DetailsTabs from "@/components/details/DetailsTabs";
import KeyHighlights from "@/components/details/KeyHighlights";
import Accreditations from "@/components/details/Accreditations";
import CoursesSection from "@/components/details/CoursesSection";
import AdmissionProcess from "@/components/details/AdmissionProcess";
import CampusFacilities from "@/components/details/CampusFacilities";
import StudentCorner from "@/components/details/StudentCorner";
import CollegeContact from "@/components/details/CollegeContact";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pb-20">
        <DetailsHero />
        <DetailsTabs />
        <KeyHighlights />
        <Accreditations />
        <CoursesSection />
        <AdmissionProcess />
        <CampusFacilities />
        <StudentCorner />
        <CollegeContact />
      </main>
      <Footer />
    </>
  );
}
