import { motion } from "framer-motion";
import { FileKey, Shield, BarChart3, Users, Building2, ArrowLeftRight, Sparkles } from "lucide-react";
import "./ServiceSection.css";

const services = [
  { icon: Building2, title: "Asset Digitisation", description: "Transform physical properties into digital assets with full legal compliance." },
  { icon: FileKey, title: "Ownership Issuance", description: "Issue fractional or full ownership units with transparent cap table management." },
  { icon: Shield, title: "Regulatory Compliance", description: "Built-in KYC/AML, investor accreditation, and jurisdiction-specific rules." },
  { icon: BarChart3, title: "Portfolio Management", description: "Real-time dashboards for performance tracking and income distribution." },
  { icon: Users, title: "Investor Relations", description: "Streamlined communications, reporting, and document management." },
  { icon: ArrowLeftRight, title: "Secondary Market", description: "Facilitate compliant peer-to-peer transfers and liquidity events." },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-background">
        <div className="bg-decor-top" />
        <div className="bg-decor-bottom" />
      </div>

      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-label">
            <Sparkles className="services-label-icon" />
            <span>Our Services</span>
          </div>

          <h2 className="services-title">
            End-to-End <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="services-description">
            Comprehensive infrastructure for digitising, managing, and trading real estate assets.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="services-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="services-card">
                <motion.div className="services-icon-wrapper" whileHover={{ scale: 1.1, rotate: 5 }}>
                  <service.icon className="services-icon" />
                  <div className="services-icon-glow" />
                </motion.div>

                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
