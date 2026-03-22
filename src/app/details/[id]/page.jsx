"use client";
 
import { useParams } from "next/navigation"; 

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
import { colleges } from "@/data";

  
export default function AboutPage() {
 const params = useParams();

 const college = colleges.find(
 (item) => item.id === params.id
 );

 if (!college) {
   return <p>Loading...</p>;
 }


const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/brochure.pdf";
  link.download = "College-Brochure.pdf";
  link.click();
};

  return (
    <>
      <h1>{params.id}</h1>
      <Header />
      <main className="bg-gray-50 pb-20">
       <div id="brochure-content" style={{pointerEvents: "auto", position: "relative", zIndex: 0}}>
        <DetailsHero college={college} downloadPDF={downloadPDF} />
        <DetailsTabs college={college} />
        <KeyHighlights college={college} />
        <Accreditations />
        <CoursesSection />
        <AdmissionProcess />
        <CampusFacilities />
        <StudentCorner />
        <CollegeContact />
        </div>
        <div className="p-4 text-center">
    <button
      onClick={downloadPDF}
      className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium"
    >
      Download Brochure
    </button>
  </div>
      </main>
      <Footer />
    </>
  );
}