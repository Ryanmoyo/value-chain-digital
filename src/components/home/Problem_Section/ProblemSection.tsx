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
    <section className="problem-section">
      <div className="problem-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="problem-section__header"
        >
          <h2 className="problem-section__title">
            Real Estate Is Broken by{" "}
            <span className="problem-section__title-accent">
              Fragmentation
            </span>
          </h2>
        </motion.div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="problem-card"
            >
              <div className="problem-card__content">
                <div className="problem-card__icon-wrapper">
                  <problem.icon className="problem-card__icon" />
                </div>

                <h3 className="problem-card__title">
                  {problem.title}
                </h3>

                <p className="problem-card__description">
                  {problem.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
