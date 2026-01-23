import { motion } from "framer-motion";
import { TrendingUp, Building, Briefcase, ArrowUpRight } from "lucide-react";

const participants = [
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Access property ownership, income, and growth opportunities through a transparent digital system.",
    features: ["Portfolio dashboard", "Income tracking", "Ownership visibility"],
  },
  {
    icon: Building,
    title: "Issuers",
    description: "Digitise assets, raise capital efficiently, and manage ownership with reduced friction.",
    features: ["Asset issuance tools", "Investor management", "Reporting & distributions"],
  },
  {
    icon: Briefcase,
    title: "Brokers & Conveyancers",
    description: "Operate within a modern digital workflow that accelerates transactions and reduces paperwork.",
    features: ["Digital mandates", "Conveyancing workflows", "Transfer tracking"],
  },
];

const ParticipantsSection = () => {
  return (
    <section id="participants" className="bg-dark py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6">
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
              className="group"
            >
              <div className="relative h-full">
                {/* Gradient border effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/30 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 rounded-2xl bg-dark-muted border border-border h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                    <participant.icon className="w-7 h-7 text-dark" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-light mb-3">
                    {participant.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {participant.description}
                  </p>

                  <div className="mt-auto">
                    <div className="border-t border-border pt-6">
                      <ul className="space-y-2">
                        {participant.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mt-6 text-sm font-medium"
                    >
                      Learn more
                      <ArrowUpRight size={14} />
                    </a>
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
