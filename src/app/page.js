import Hero from "@/components/dashboard/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCards from "@/components/dashboard/CategoryCards";
import PopularColleges from "@/components/dashboard/PopularColleges";
import CampusBanner from "@/components/dashboard/CampusBanner";
import ExploreCourses from "@/components/dashboard/ExploreCourses";
import Welcome from "@/components/dashboard/Welcome";
import TopExams from "@/components/dashboard/TopExams";
import WhyChoose from "@/components/dashboard/WhyChoose";
import LatestNews from "@/components/dashboard/LatestNews";
import PopularSearches from "@/components/dashboard/PopularSearches";
import StickyActions from "@/components/StickyActions";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <Hero />
        <CategoryCards />
        <PopularColleges />
        <CampusBanner />
        <ExploreCourses />
        <Welcome />
        <TopExams />
        <WhyChoose />
        <LatestNews />
        <PopularSearches />
        <StickyActions />
      </main>

      <Footer />
    </>
  );
}
