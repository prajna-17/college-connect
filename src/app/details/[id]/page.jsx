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



  return (
    <>
      <h1>{params.id}</h1>
      <Header />
      <main className="bg-gray-50 pb-20">
       <div id="brochure-content" style={{pointerEvents: "auto", position: "relative", zIndex: 0}}>
        <DetailsHero college={college} />
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
    
  </div>
      </main>
      <Footer />
    </>
  );
}