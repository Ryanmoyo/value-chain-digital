import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-dark py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-6">
            Digitising Property Markets for the{" "}
            <span className="text-gradient-gold">Next Generation</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Join the platform that's reshaping how real estate assets are originated, structured, owned, and transferred. Be part of the future of property investment.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" className="group animate-pulse-glow">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by forward-thinking institutions</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {["Institution 1", "Institution 2", "Institution 3", "Institution 4"].map((inst) => (
                <div key={inst} className="font-display text-lg text-light/60">
                  {inst}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
