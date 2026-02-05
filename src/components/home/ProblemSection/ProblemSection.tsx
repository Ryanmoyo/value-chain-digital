import { motion } from "framer-motion";
import { Banknote, Lock, Clock } from "lucide-react";
import "./ProblemSection.css";

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
    <section className="problem-section bg light-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            Real Estate Is Broken by{" "}
            <span className="highlight">Fragmentation</span>
          </h2>
        </motion.div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="problem-card-wrapper"
            >
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <problem.icon className="problem-icon" />
                </div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
