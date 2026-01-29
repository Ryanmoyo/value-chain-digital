import { motion } from "framer-motion";
import { TrendingUp, Building, Briefcase, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
//will be changed to partners, participants, users etc.
const participants = [
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Access property ownership, income, and growth opportunities through a transparent digital system.",
    features: ["Portfolio dashboard", "Income tracking", "Ownership visibility"],
    cta: "Start Investing",
    ctaLink: "#",
  },
  {
    icon: Building,
    title: "Issuers",
    description: "Digitise assets, raise capital efficiently, and manage ownership with reduced friction.",
    features: ["Asset issuance tools", "Investor management", "Reporting & distributions"],
    cta: "List Your Asset",
    ctaLink: "#",
  },
  {
    icon: Briefcase,
    title: "Brokers & Conveyancers",
    description: "Operate within a modern digital workflow that accelerates transactions and reduces paperwork.",
    features: ["Digital mandates", "Conveyancing workflows", "Transfer tracking"],
    cta: "Join as Partner",
    ctaLink: "#",
  },
];

const ParticipantsSection = () => {
  return (
    <section id="participants" className="bg-dark py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(45 85% 46% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(45 85% 46% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(45 85% 46% / 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <span className="text-gold text-sm font-medium">Participants</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
            Who the Platform Is{" "}
            <span className="text-gradient-gold">For</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {participants.map((participant, index) => (
            <motion.div
              key={participant.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full">
                {/* Gradient border effect */}
                <motion.div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/50 via-gold/20 to-gold/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative p-8 rounded-2xl bg-dark-muted border border-border h-full flex flex-col">
                  {/* Icon with pulse animation */}
                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <participant.icon className="w-7 h-7 text-dark" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gold/50"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>

                  <h3 className="font-display text-2xl font-semibold text-light mb-3 group-hover:text-gold transition-colors">
                    {participant.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {participant.description}
                  </p>

                  <div className="mt-auto">
                    <div className="border-t border-border pt-6 mb-6">
                      <ul className="space-y-2">
                        {participant.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + featureIndex * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <motion.div
                              className="w-1.5 h-1.5 bg-gold rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: featureIndex * 0.2 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="hero"
                        size="default"
                        className="w-full group/btn"
                        asChild
                      >
                        <a href={participant.ctaLink}>
                          {participant.cta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>

                      <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium group/link"
                      >
                        Learn more
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
