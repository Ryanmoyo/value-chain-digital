import { motion } from "framer-motion";
import { Banknote, Lock, Clock } from "lucide-react";

const problems = [
  {
    icon: Banknote,
    title: "High Transaction Costs",
    description: "Conveyancing, intermediaries, and paperwork slow down ownership transfer.",
  },
  {
    icon: Lock,
    title: "Limited Access",
    description: "Property remains inaccessible to most due to high capital requirements.",
  },
  {
    icon: Clock,
    title: "Illiquidity",
    description: "Real estate capital is locked for years with limited exit options.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-dark py-24 lg:py-32  border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
            Real Estate Is Broken by{" "}
            <span className="text-gradient-gold">Fragmentation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-dark-muted border border-border hover:border-gold/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-light mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
