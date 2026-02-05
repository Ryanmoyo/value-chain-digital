import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      {/* Background Glow */}
      <div className="cta-section__background">
        <div className="cta-section__glow" />
      </div>

      <div className="cta-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-section__content"
        >
          <h2 className="cta-section__title">
            Digitising Property Markets for the{" "}
            <span className="cta-section__title-accent">
              Next Generation
            </span>
          </h2>

          <p className="cta-section__description">
            Join the platform that's reshaping how real estate assets are
            originated, structured, owned, and transferred. Be part of the
            future of property investment.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="cta-section__actions"
          >
            <Button
              variant="hero"
              size="xl"
              className="cta-section__button group"
            >
              Get Early Access
              <ArrowRight className="cta-section__button-icon" />
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
            <p className="cta-trust__label">
              Trusted by forward-thinking institutions
            </p>

            <div className="cta-trust__list">
              {[
                "Institution 1",
                "Institution 2",
                "Institution 3",
                "Institution 4",
              ].map((inst) => (
                <span key={inst} className="cta-trust__item">
                  {inst}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
