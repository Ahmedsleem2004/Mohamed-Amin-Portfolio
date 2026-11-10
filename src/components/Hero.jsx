
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  BriefcaseBusiness,
  TrendingUp,
  ImageOff,
} from "lucide-react";
import { motion } from "motion/react";

const photoPaths = [
  "/mohamed-amin.jpeg",
  "/mohamed-amin.png.jpeg",
  "/mohamed-amin.jpg",
  "/mohamed-amin.png",
];

export default function Hero({ t, isArabic }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: isArabic ? 60 : -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="hero-badge"
          animate={{
            boxShadow: [
              "0 0 0px rgba(56,189,248,0)",
              "0 0 22px rgba(56,189,248,.25)",
              "0 0 0px rgba(56,189,248,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="status-dot" />
          {t.hero.badge}
        </motion.div>

        <p className="hero-greeting">{t.hero.greeting}</p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.hero.name}
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          {t.hero.title}
        </motion.h2>

        <p className="hero-description">{t.hero.description}</p>

        <div className="hero-buttons">
          <motion.a
            href="#projects"
            className="btn primary"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            {t.hero.explore}
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href="#contact"
            className="btn secondary"
            whileHover={{ scale: 1.06, y: -4 }}
          >
            {t.hero.contact}
          </motion.a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <strong>5+</strong>
            <span>{t.hero.years}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>HVAC</strong>
            <span>{t.hero.industry}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-photo-wrapper"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.045,
            boxShadow:
              "0 0 75px rgba(56,189,248,.55)",
          }}
        >
          <div className="hero-photo-glow" />

          {photoIndex < photoPaths.length ? (
            <motion.img
              key={photoPaths[photoIndex]}
              src={photoPaths[photoIndex]}
              alt={t.hero.name}
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: loaded ? 1 : 0,
                scale: loaded ? 1 : 0.9,
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.07 }}
              onLoad={() => setLoaded(true)}
              onError={() => {
                setLoaded(false);
                setPhotoIndex((i) => i + 1);
              }}
            />
          ) : (
            <div className="photo-error">
              <ImageOff size={40} />
              <strong>
                {isArabic
                  ? "الصورة غير موجودة"
                  : "Profile image not found"}
              </strong>
              <span>
                public/mohamed-amin.jpeg
              </span>
            </div>
          )}

          <div className="profile-name-card">
            <span className="profile-name">{t.hero.name}</span>
            <span className="profile-position">
              {t.experience.position}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="floating-label floating-label-top"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <BriefcaseBusiness size={17} />
          {t.hero.label1}
        </motion.div>

        <motion.div
          className="floating-label floating-label-bottom"
          animate={{ y: [0, 9, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
          }}
        >
          <TrendingUp size={17} />
          {t.hero.label2}
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} />
        {t.hero.scroll}
      </a>
    </section>
  );
}
