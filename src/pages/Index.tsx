import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BannerSection from "@/components/home/Banner_Section/BannerSection";
import ProblemSection from "@/components/home/ProblemSection/ProblemSection";
import SolutionSection from "@/components/home/Solution_Section/SolutionSection";
import ServicesSection from "@/components/home/Service_Section/ServicesSection";
import OriginToExitSection from "@/components/home/OriginToExit/OriginToExitSection";
import ParticipantsSection from "@/components/home/ParticipantsSection";
import CTASection from "@/components/home/CTA_Section/CTASection";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "EquiXToken Capital",
      "url": "https://www.equixtokencapital.xyz",
      "logo": "https://www.equixtokencapital.xyz/equixtoken-logo.png",
      "description": "A digital infrastructure platform modernising how real estate assets are structured, owned, transacted, and managed.",
      "email": "info@equixtokencapital.xyz",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "name": "EquiXToken Capital",
      "url": "https://www.equixtokencapital.xyz",
      "description": "Digitising the Real Estate Value Chain — modernising how property assets are structured, owned, transacted, and managed."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.equixtokencapital.xyz/",
      "name": "EquiXToken Capital — Digitising the Real Estate Value Chain",
      "description": "EquiXToken Capital is a digital infrastructure platform that modernises how real estate assets are structured, owned, transacted, and managed.",
      "isPartOf": { "@id": "https://www.equixtokencapital.xyz" },
      "about": {
        "@type": "Service",
        "name": "Real Estate Digitisation Platform",
        "provider": { "@type": "Organization", "name": "EquiXToken Capital" },
        "description": "End-to-end infrastructure for digitising, managing, and trading real estate assets.",
        "serviceType": "Financial Technology",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Platform Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asset Digitisation", "description": "Transform physical properties into digital assets with full legal compliance." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ownership Issuance", "description": "Issue fractional or full ownership units with transparent cap table management." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regulatory Compliance", "description": "Built-in KYC/AML, investor accreditation, and jurisdiction-specific rules." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portfolio Management", "description": "Real-time dashboards for performance tracking and income distribution." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Secondary Market", "description": "Facilitate compliant peer-to-peer transfers and liquidity events." } }
          ]
        }
      }
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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
