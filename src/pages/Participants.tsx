import { motion } from "framer-motion";
import { TrendingUp, Building, Briefcase, ArrowRight, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const participants = [
  {
    icon: TrendingUp,
    title: "Investors",
    subtitle: "Access Real Estate Ownership",
    description: "Participate in real estate ownership, income, and growth through a secure digital system.",
    features: [
      { name: "Portfolio dashboard", description: "Track all your property investments in one place" },
      { name: "Income tracking", description: "Monitor rental income and distributions in real-time" },
      { name: "Ownership visibility", description: "Clear view of your ownership stakes and rights" },
    ],
    cta: "Start Investing",
    ctaLink: "#",
  },
  {
    icon: Building,
    title: "Issuers",
    subtitle: "Digitise & Raise Capital",
    description: "Digitise assets, unlock capital, and manage ownership with reduced operational burden.",
    features: [
      { name: "Asset issuance tools", description: "Streamlined process to tokenize properties" },
      { name: "Investor management", description: "Comprehensive tools to manage your investor base" },
      { name: "Reporting & distributions", description: "Automated reporting and dividend distributions" },
    ],
    cta: "List Your Asset",
    ctaLink: "#",
  },
  {
    icon: Briefcase,
    title: "Brokers & Conveyancers",
    subtitle: "Digital Transaction Workflows",
    description: "Operate within a digital transaction environment designed to reduce friction and accelerate settlement.",
    features: [
      { name: "Digital mandates", description: "Paperless mandate management and execution" },
      { name: "Conveyancing workflows", description: "Streamlined legal transfer processes" },
      { name: "Transfer tracking", description: "Real-time visibility into transaction status" },
    ],
    cta: "Join as Partner",
    ctaLink: "#",
  },
];

const Participants = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40 20% 88%)" }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 border-b border-gold/20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
          </div>

          {/* Gold grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(hsl(45 85% 46% / 0.4) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(45 85% 46% / 0.4) 1px, transparent 1px)`,
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
                <span className="text-gold text-sm font-medium">Platform Participants</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Who the Platform Is{" "}
                <span className="text-gradient-gold">For</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                EquixToken serves investors, issuers, and transaction professionals with tailored tools and workflows for each participant type.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Participants Cards */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5 pointer-events-none" />

          <div className="relative container mx-auto px-6">
            <div className="space-y-24">
              {participants.map((participant, index) => (
                <motion.div
                  key={participant.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div className="lg:w-1/2">
                    <motion.div
                      className="relative group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative p-10 rounded-2xl bg-white border border-gold/20 group-hover:border-gold/40 transition-colors shadow-lg">
                        {/* Icon */}
                        <motion.div
                          className="relative w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{ boxShadow: "0 0 20px hsl(45 85% 46% / 0.4)" }}
                        >
                          <participant.icon className="w-8 h-8 text-dark" />
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-gold"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                        </motion.div>

                        <span className="text-gold text-sm font-medium mb-2 block">
                          {participant.subtitle}
                        </span>

                        <h2 className="font-display text-3xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                          {participant.title}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                          {participant.description}
                        </p>

                        <Button variant="hero" size="lg" className="group/btn" asChild>
                          <a href={participant.ctaLink}>
                            {participant.cta}
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Features Side */}
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground mb-6">
                        Key Features
                      </h3>
                      {participant.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + featureIndex * 0.1 }}
                          className="relative group/feature"
                        >
                          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-gold/20 to-gold/10 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex gap-4 p-5 rounded-xl bg-white/80 border border-gold/10 group-hover/feature:border-gold/30 transition-colors shadow-sm">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                              <Check className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {feature.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-gold/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
          </div>

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
                Find Your <span className="text-gradient-gold">Place</span> in the Ecosystem
              </h2>

              <p className="text-muted-foreground mb-10">
                Whether you're investing, issuing, or facilitating — EquixToken provides the tools you need.
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

export default Participants;
