
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Contact({ t }) {
  // Contact information
  const displayPhone = "054 996 9306";
  const internationalPhone = "+966549969306";
  const email = "mohamedamin.elomda@gmail.com";

  // Direct links
  const whatsappUrl = "https://wa.me/966549969306";

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(email);

  const phoneUrl = `tel:${internationalPhone}`;

  return (
    <section
      className="portfolio-section contact-section"
      id="contact"
    >
      <div className="section-container">
        <motion.div
          className="contact-content"
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          {/* SECTION LABEL */}
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.contact.label}
          </motion.span>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            {t.contact.title}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            {t.contact.description}
          </motion.p>

          {/* CONTACT BUTTONS */}
          <div className="contact-buttons">

            {/* WHATSAPP BUTTON */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
              aria-label="Open WhatsApp chat"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow:
                  "0 0 35px rgba(37, 211, 102, 0.4)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
              <ArrowUpRight size={17} />
            </motion.a>

            {/* EMAIL BUTTON */}
            <motion.a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
              aria-label="Send email"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow:
                  "0 0 35px rgba(56, 189, 248, 0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Mail size={20} />
              <span>{t.contact.email}</span>
              <ArrowUpRight size={17} />
            </motion.a>

            {/* PHONE BUTTON */}
            <motion.a
              href={phoneUrl}
              className="btn secondary"
              aria-label={`Call ${displayPhone}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow:
                  "0 0 35px rgba(56, 189, 248, 0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Phone size={20} />
              <span dir="ltr">{displayPhone}</span>
            </motion.a>
          </div>

          {/* EMAIL ADDRESS */}
          <motion.a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
            style={{
              display: "inline-block",
              marginTop: "28px",
              color: "var(--muted)",
              textDecoration: "none",
              overflowWrap: "anywhere",
            }}
            whileHover={{
              color: "var(--accent)",
              scale: 1.03,
            }}
          >
            {email}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
