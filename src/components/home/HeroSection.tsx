import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(45 85% 46% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(45 85% 46% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Digital Property Infrastructure</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-tight mb-6">
              Digitising the Entire{" "}
              <span className="text-gradient-gold">Real Estate</span>{" "}
              Value Chain
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              EquiXToken Capital is a digital infrastructure platform that modernises how real estate assets are structured, owned, transacted, and managed — reducing friction, lowering costs, and expanding access to property markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Explore the Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Get Early Access
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Value Chain Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-dark-muted border border-border rounded-2xl p-8 lg:p-12">
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl blur-sm" />
              
              <div className="relative">
                <h3 className="font-display text-lg text-gold mb-8 text-center">
                  The Real Estate Value Chain
                </h3>

                <div className="flex flex-col gap-4">
                  {[
                    { icon: Building2, label: "Origination", desc: "Asset Intake & Structuring" },
                    { icon: Users, label: "Ownership", desc: "Issuance & Management" },
                    { icon: TrendingUp, label: "Liquidity", desc: "Transfer & Exit" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-dark/50 border border-border hover:border-gold/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <item.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-light">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      {index < 2 && (
                        <div className="ml-auto">
                          <ArrowRight className="w-5 h-5 text-gold/50" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Line */}
                <div className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-gold/50 hidden lg:block" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
