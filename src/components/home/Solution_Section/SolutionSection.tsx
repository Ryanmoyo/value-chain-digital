import { motion } from "framer-motion";
import "./SolutionSection.css";

const SolutionSection: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <motion.div
          className="solution-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="solution-label">
            <span>Our Solution</span>
          </div>

          <h2 className="solution-title">
            A Unified Digital{" "}
            <span className="text-gradient-gold">Property Infrastructure</span>
          </h2>

          <p className="solution-description">
            EquiXToken Capital digitises every stage of the real estate lifecycle — from asset origination and legal structuring to ownership issuance, capital participation, settlement, and transfer. This creates a single, auditable system where property assets can move efficiently between stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
