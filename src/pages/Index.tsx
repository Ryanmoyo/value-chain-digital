import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BannerSection from "@/components/home/Banner_Section/BannerSection";
<<<<<<< HEAD
import ProblemSection from "@/components/home/Problem_Section/ProblemSection";
=======
import ProblemSection from "@/components/home/ProblemSection/ProblemSection";
>>>>>>> f7ba351f210b66f4ddd2761d44d836f586cdab2b
import SolutionSection from "@/components/home/Solution_Section/SolutionSection";
import ServicesSection from "@/components/home/Service_Section/ServicesSection";
import OriginToExitSection from "@/components/home/OriginToExit/OriginToExitSection";
import ParticipantsSection from "@/components/home/ParticipantsSection";
<<<<<<< HEAD
import CTASection from "@/components/home/CTASection/CTASection";
=======
import CTASection from "@/components/home/CTA_Section/CTASection";
>>>>>>> f7ba351f210b66f4ddd2761d44d836f586cdab2b

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <HeroSection /> */}
        <BannerSection />
        <ProblemSection />
        <SolutionSection />
        <OriginToExitSection />
        <ServicesSection />
        
        {/* <ParticipantsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
