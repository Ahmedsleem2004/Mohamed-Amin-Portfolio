
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

export default function Experience({ t }) {
  return (
    <section
      className="portfolio-section experience-section"
      id="experience"
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
            {t.experience.label}
          </span>
          <h2>{t.experience.title}</h2>
        </motion.div>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          whileHover={{
            y: -7,
            boxShadow:
              "0 20px 55px rgba(56,189,248,.13)",
          }}
        >
          <motion.div
            className="experience-icon"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <Building2 size={28} />
          </motion.div>

          <div className="experience-details">
            <span className="experience-period">
              {t.experience.period}
            </span>
            <h3>{t.experience.position}</h3>
            <h4>{t.experience.company}</h4>
            <p>{t.experience.description}</p>

            <div className="experience-tags">
              <span>HVAC</span>
              <span>Sales</span>
              <span>Business Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
