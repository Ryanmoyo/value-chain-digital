import { motion } from "framer-motion";
import { Building2, Scale, UserCheck, FileKey, BarChart3, ArrowLeftRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: Building2,
    title: "Property Enters the Platform",
    description: "Assets are submitted by brokers or issuers with supporting legal and financial documentation.",
    details: [
      "Broker-led property intake",
      "Due diligence workflows",
      "Digital asset profiles",
      "Documentation verification",
    ],
  },
  {
    step: "02",
    icon: Scale,
    title: "Asset Is Structured",
    description: "Each asset is placed into a ring-fenced SPV with clearly defined ownership rights.",
    details: [
      "Ring-fenced SPVs",
      "Tax-transparent structures",
      "Embedded ownership rules",
      "Legal compliance frameworks",
    ],
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Participants Are Onboarded",
    description: "Investors and counterparties are verified and approved through our compliance system.",
    details: [
      "Investor verification (KYC/AML)",
      "Eligibility enforcement",
      "Digital agreements",
      "Accreditation checks",
    ],
  },
  {
    step: "04",
    icon: FileKey,
    title: "Ownership Is Issued",
    description: "Digital ownership units are issued under predefined compliance rules.",
    details: [
      "Full-title or fractional ownership",
      "Permissioned transfers",
      "Real-time cap tables",
      "Immutable ownership records",
    ],
  },
  {
    step: "05",
    icon: BarChart3,
    title: "Asset Is Managed",
    description: "Income, reporting, and communications are handled digitally through the platform.",
    details: [
      "Distribution automation",
      "Reporting dashboards",
      "Investor communications",
      "Performance tracking",
    ],
  },
  {
    step: "06",
    icon: ArrowLeftRight,
    title: "Ownership Transfers",
    description: "Ownership can be transferred efficiently within approved parameters.",
    details: [
      "Peer-to-peer transfers",
      "Broker-facilitated exits",
      "Secondary participation",
      "Compliant settlement",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40 25% 94%)" }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 border-b border-gold/20 relative overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
          </div>

          {/* Gold grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(hsl(45 80% 55% / 0.4) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(45 85% 38% / 0.4) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/50 bg-gold/10 mb-8 shadow-lg glow-gold">
                <span className="text-gold text-sm font-medium">End-to-End Lifecycle</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                How It <span className="text-gradient-gold">Works</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From property submission to ownership transfer — experience a fully digitised real estate lifecycle that reduces friction and accelerates transactions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Timeline */}
        <section className="py-24 lg:py-32 relative">
          {/* Subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5 pointer-events-none" />

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Line with gold gradient */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 lg:left-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-gold lg:-translate-x-1/2" />
                  )}

                  <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 lg:w-1/2 flex lg:justify-end">
                      <div className={`flex items-start gap-6 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Icon Circle with enhanced gold styling */}
                        <motion.div
                          className="relative z-10"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-lg glow-gold">
                            <step.icon className="w-8 h-8 text-dark" />
                          </div>
                          {/* Pulse ring */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-gold"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                        </motion.div>

                        {/* Step Number with gold outline */}
                        <div className={`hidden lg:block ${index % 2 === 1 ? 'text-left' : 'text-right'}`}>
                          <span
                            className="font-display text-6xl font-bold"
                            style={{
                              WebkitTextStroke: "2px hsl(45 85% 46% / 0.4)",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Card with gold border on hover */}
                    <div className="lg:w-1/2 pl-24 lg:pl-0">
                      <motion.div
                        className="relative group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Gradient border effect - always slightly visible */}
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative p-8 rounded-2xl bg-white border border-gold/20 group-hover:border-gold/40 transition-colors shadow-md">
                          {/* Mobile Step Number */}
                          <span className="lg:hidden font-display text-sm text-gold mb-2 block">
                            Step {step.step}
                          </span>

                          <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {step.description}
                          </p>

                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detail}
                                className="flex items-center gap-3 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + detailIndex * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 shadow-sm" style={{ boxShadow: "0 0 8px hsl(45 85% 46% / 0.5)" }} />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with enhanced gold styling */}
        <section className="py-24 border-t border-gold/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
          </div>

          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/30 rounded-br-3xl" />

          <div className="relative container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to <span className="text-gradient-gold">Get Started</span>?
              </h2>

              <p className="text-muted-foreground mb-10">
                Join the platform that's transforming how real estate assets move through their lifecycle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
