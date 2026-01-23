import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section className="bg-dark py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <span className="text-gold text-sm font-medium">Our Solution</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-6">
            A Unified Digital{" "}
            <span className="text-gradient-gold">Property Infrastructure</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            EquiXToken Capital digitises every stage of the real estate lifecycle — from asset origination and legal structuring to ownership issuance, capital participation, settlement, and transfer. This creates a single, auditable system where property assets can move efficiently between stakeholders.
          </p>
        </motion.div>

        {/* Value Chain Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-dark-muted border border-border rounded-3xl p-8 lg:p-12">
            <h3 className="font-display text-xl text-gold mb-10 text-center">
              From Origin to Exit — Fully Digitised
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { step: "01", label: "Asset Origination & Listing" },
                { step: "02", label: "Legal Structuring & SPVs" },
                { step: "03", label: "Investor Onboarding" },
                { step: "04", label: "Ownership Issuance" },
                { step: "05", label: "Asset & Investor Management" },
                { step: "06", label: "Income & Reporting" },
                { step: "07", label: "Transfer & Liquidity" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-4 rounded-xl bg-dark/50 border border-border hover:border-gold/50 transition-all duration-300 h-full text-center">
                    <span className="font-display text-2xl font-bold text-gold mb-2 block">
                      {item.step}
                    </span>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {item.label}
                    </p>
                  </div>
                  
                  {/* Connector */}
                  {index < 6 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
