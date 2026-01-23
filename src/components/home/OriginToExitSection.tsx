import { motion } from "framer-motion";
import { Building2, Scale, UserCheck, FileKey, BarChart3, ArrowLeftRight, Link as LinkIcon } from "lucide-react";

const steps = [
  { icon: Building2, title: "Origin", subtitle: "Asset Intake" },
  { icon: Scale, title: "Structure", subtitle: "SPV Setup" },
  { icon: UserCheck, title: "Onboard", subtitle: "KYC/AML" },
  { icon: FileKey, title: "Issue", subtitle: "Ownership" },
  { icon: BarChart3, title: "Manage", subtitle: "Operations" },
  { icon: ArrowLeftRight, title: "Exit", subtitle: "Transfer" },
];

const OriginToExitSection = () => {
  return (
    <section className="bg-dark-muted py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(45 85% 46% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
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
            <LinkIcon className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">The Chain</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
            Origin to <span className="text-gradient-gold">Exit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A seamless chain connecting every stage of the property lifecycle
          </p>
        </motion.div>

        {/* Chain visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop layout - horizontal chain */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gold/20 blur-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Node */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-gold p-[2px] shadow-lg glow-gold">
                      <div className="w-full h-full rounded-full bg-dark flex items-center justify-center group-hover:bg-dark-muted transition-colors">
                        <step.icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>

                    {/* Pulse animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-gold/50"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>

                  {/* Label */}
                  <div className="text-center mt-4">
                    <p className="font-display font-semibold text-light text-sm">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                  </div>
                </motion.div>

                {/* Connector chain link */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex-1 mx-4 relative"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Animated chain links */}
                    <div className="h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    {/* Chain link decorations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-lg" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile layout - vertical chain */}
          <div className="lg:hidden flex flex-col items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {/* Node */}
                  <div className="w-16 h-16 rounded-full bg-gradient-gold p-[2px] shadow-lg">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>

                  {/* Label */}
                  <div>
                    <p className="font-display font-semibold text-light">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                  </div>
                </motion.div>

                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-1 h-8 bg-gradient-to-b from-gold via-gold/50 to-gold rounded-full my-2"
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
