import Header from "./components/Header";
import Hero from "./components/Hero";
import ExploreDPS from "./components/ExploreDPS";
import CampusShowcase from "./components/CampusShowcase";
import Footer from "./components/Footer";
import AcademiesSection from "./components/AcademiesSection";
import StudentLifeSection from "./components/StudentLifeSection";
import BoardingSection from "./components/BoardingSection";
import AthleticsSection from "./components/AthleticsSection";
import WelcomeCenterSection from "./components/WelcomeCenterSection";

export default function HomePage() {
  return (
    <main className="main-page">
      <Header />
      <Hero />
      <ExploreDPS />
      <CampusShowcase />
      <AcademiesSection />
      <StudentLifeSection />
      <BoardingSection />
      <AthleticsSection />
      <WelcomeCenterSection />
      <Footer />
    </main>
  );
}
