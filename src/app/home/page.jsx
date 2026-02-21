import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyActions from "@/components/StickyActions";
import TopCollegesList from "@/components/home/TopCollegeList";
import TopCollegesHero from "@/components/home/TopCollegesHero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-24">
        <TopCollegesHero />
        <TopCollegesList />
      </main>
      <Footer />
    </>
  );
}
