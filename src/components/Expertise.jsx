
import { motion } from "motion/react";
import { Building2, TrendingUp, Users, Target } from "lucide-react";

const icons = [Building2, TrendingUp, Users, Target];

export default function Expertise({ t }) {
  return (
    <section
      className="portfolio-section expertise-section"
      id="expertise"
    >
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            {t.expertise.label}
          </span>
          <h2>{t.expertise.title}</h2>
        </motion.div>

        <div className="expertise-grid">
          {t.expertise.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                className="expertise-card"
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.035,
                  borderColor: "#38bdf8",
                  boxShadow:
                    "0 18px 45px rgba(56,189,248,.2)",
                }}
              >
                <motion.div
                  className="card-icon"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                >
                  <Icon size={26} />
                </motion.div>

                <span className="expertise-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
