import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./CTASection.css";

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
              {["Institution 1", "Institution 2", "Institution 3", "Institution 4"].map(
                (inst) => (
                  <div key={inst} className="cta-trust-logo">
                    {inst}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
