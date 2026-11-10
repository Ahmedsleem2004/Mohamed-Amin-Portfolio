
import { motion } from "motion/react";
import { Award, TrendingUp, Users, Target } from "lucide-react";

export default function About({ t }) {
  const cards = [
    { title: t.about.card1, Icon: TrendingUp },
    { title: t.about.card2, Icon: Users },
    { title: t.about.card3, Icon: Target },
  ];

  return (
    <section className="portfolio-section about-section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">{t.about.label}</span>
          <h2>{t.about.title}</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <p className="about-description">
              {t.about.description}
            </p>

            <motion.div
              className="about-highlight"
              whileHover={{
                y: -8,
                scale: 1.025,
                boxShadow:
                  "0 15px 45px rgba(56,189,248,.18)",
              }}
            >
              <Award size={28} />
              <div>
                <strong>5+ Years</strong>
                <span>{t.about.experienceLabel}</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="about-cards">
            {cards.map(({ title, Icon }, index) => (
              <motion.div
                key={index}
                className="about-card"
                initial={{
                  opacity: 0,
                  x: 70,
                  rotate: 3,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.16,
                }}
                whileHover={{
                  x: 8,
                  scale: 1.03,
                  borderColor: "#38bdf8",
                  boxShadow:
                    "0 12px 35px rgba(56,189,248,.16)",
                }}
              >
                <motion.div
                  className="card-icon"
                  whileHover={{ rotate: 12, scale: 1.15 }}
                >
                  <Icon size={24} />
                </motion.div>
                <h3>{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
