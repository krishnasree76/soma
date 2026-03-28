import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ProgramsSection from "@/components/ProgramsSection";
import ConsultationSection from "@/components/ConsultationSection";
import ContactSection from "@/components/ContactSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-glow grain overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1600px] mx-auto">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ApproachSection />
        <ProgramsSection />
        <ConsultationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
