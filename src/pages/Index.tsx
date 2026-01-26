import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BannerSection from "@/components/home/BannerSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ServicesSection from "@/components/home/ServicesSection";
import OriginToExitSection from "@/components/home/OriginToExitSection";
import ParticipantsSection from "@/components/home/ParticipantsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        {/* <HeroSection /> */}
        <BannerSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <OriginToExitSection />
        <ParticipantsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
