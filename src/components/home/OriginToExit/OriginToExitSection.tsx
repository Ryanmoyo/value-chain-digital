import { motion } from "framer-motion";
import { Building2, Scale, UserCheck, FileKey, BarChart3, ArrowLeftRight, Link as LinkIcon } from "lucide-react";
import "./OriginToExitSection.css";

const steps = [
  { icon: Building2, title: "Origin", subtitle: "Asset Intake" },
  { icon: Scale, title: "Structure", subtitle: "SPV Setup" },
  { icon: UserCheck, title: "Onboard", subtitle: "KYC/AML" },
  { icon: FileKey, title: "Issue", subtitle: "Ownership" },
  { icon: BarChart3, title: "Manage", subtitle: "Operations" },
  { icon: ArrowLeftRight, title: "Exit", subtitle: "Transfer" },
];

const OriginToExitSection: React.FC = () => {
  return (
    <section className="chain-section">
      {/* Grid background removed */}

      <div className="chain-container">
        <motion.div
          className="chain-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="chain-label">
            <LinkIcon className="chain-label-icon" />
            <span>The Chain</span>
          </div>

          <h2 className="chain-title">
            Origin to <span className="text-gradient-gold">Exit</span>
          </h2>
          <p className="chain-subtitle">
            A seamless chain connecting every stage of the property lifecycle
          </p>
        </motion.div>

        <div className="chain-visual">
          {/* Desktop horizontal */}
          <div className="chain-desktop">
            {steps.map((step, index) => (
              <div key={step.title} className="chain-step">
                <motion.div
                  className="chain-node-group group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div className="chain-node-glow" transition={{ duration: 0.3 }} />

                  <div className="chain-node-wrapper">
                    <div className="chain-node-outer">
                      <div className="chain-node-inner">
                        <step.icon className="chain-node-icon" />
                      </div>
                    </div>

                    <motion.div
                      className="chain-node-pulse"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>

                  <div className="chain-node-label">
                    <p>{step.title}</p>
                    <p>{step.subtitle}</p>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="chain-connector"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="chain-connector-bar">
                      <motion.div
                        className="chain-connector-animated"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    <div className="chain-connector-dot" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="chain-mobile">
            {steps.map((step, index) => (
              <div key={step.title} className="chain-step-mobile">
                <motion.div
                  className="chain-node-mobile"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="chain-node-mobile-icon">
                    <step.icon className="chain-node-icon" />
                  </div>
                  <div className="chain-node-mobile-label">
                    <p>{step.title}</p>
                    <p>{step.subtitle}</p>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="chain-connector-vertical"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginToExitSection;
