
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

export default function Projects({ t }) {
  return (
    <section
      className="portfolio-section projects-section"
      id="projects"
    >
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            {t.projects.label}
          </span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.description}</p>
        </motion.div>

        <motion.div
          className="projects-placeholder"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            borderColor: "#38bdf8",
            boxShadow:
              "0 15px 55px rgba(56,189,248,.15)",
          }}
        >
          <motion.div
            className="projects-placeholder-icon"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Building2 size={42} />
          </motion.div>

          <h3>{t.projects.coming}</h3>

          <div className="projects-decoration">
            {["HVAC", "SALES", "PROJECTS"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.12 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
