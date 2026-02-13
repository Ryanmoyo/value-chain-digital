import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./CTASection.css";

import godwallLogo from "@/assets/Godwall_Logo.png";
import rlabsLogo from "@/assets/RLabsLogo.png";
import alxLogo from "@/assets/alx_logo.jpg";
import geuUnLogo from "@/assets/geu_un_logo.jpg";
import yomaLogo from "@/assets/yoma_logo.png";

const partners = [
  { name: "Godwall", logo: godwallLogo },
  { name: "RLabs", logo: rlabsLogo },
  { name: "ALX", logo: alxLogo },
  { name: "GEU UN", logo: geuUnLogo },
  { name: "Yoma", logo: yomaLogo },
];
const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Background Elements */}
      <div className="cta-bg">
        <div className="cta-bg-decor" />
      </div>

      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2 className="cta-title">
            Digitising Property Markets for the{" "}
            <span className="cta-title-highlight">Next Generation</span>
          </h2>

          <p className="cta-description">
            Join the platform that's reshaping how real estate assets are
            originated, structured, owned, and transferred. Be part of the
            future of property investment.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="cta-actions"
          >
            <Button variant="hero" size="xl" className="cta-button">
              Get Early Access
              <ArrowRight className="cta-button-icon" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="cta-trust"
          >
            <p className="cta-trust-text">Trusted by forward-thinking institutions</p>
            <div className="cta-trust-logos">
              {partners.map((partner) => (
                <div key={partner.name} className="cta-trust-logo">
                  <img src={partner.logo} alt={partner.name} className="cta-trust-logo-img" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
