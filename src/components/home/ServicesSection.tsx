import { motion } from "framer-motion";
import { FileKey, Shield, BarChart3, Users, Building2, ArrowLeftRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Asset Digitisation",
    description: "Transform physical properties into digital assets with full legal compliance.",
  },
  {
    icon: FileKey,
    title: "Ownership Issuance",
    description: "Issue fractional or full ownership units with transparent cap table management.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Built-in KYC/AML, investor accreditation, and jurisdiction-specific rules.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Management",
    description: "Real-time dashboards for performance tracking and income distribution.",
  },
  {
    icon: Users,
    title: "Investor Relations",
    description: "Streamlined communications, reporting, and document management.",
  },
  {
    icon: ArrowLeftRight,
    title: "Secondary Market",
    description: "Facilitate compliant peer-to-peer transfers and liquidity events.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-dark py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Our Services</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
            End-to-End <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive infrastructure for digitising, managing, and trading real estate assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full">
                {/* Animated border on hover */}
                <motion.div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/50 via-gold/20 to-gold/50 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative p-8 rounded-2xl bg-dark-muted border border-border h-full backdrop-blur-sm">
                  {/* Icon with glow effect */}
                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-gold" />
                    <div className="absolute inset-0 rounded-xl bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-light mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
