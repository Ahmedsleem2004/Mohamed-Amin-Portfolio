
import { useState } from "react";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({
  t,
  theme,
  toggleTheme,
  language,
  toggleLanguage,
}) {
  const [open, setOpen] = useState(false);

  const sections = [
    "home",
    "about",
    "experience",
    "expertise",
    "projects",
    "contact",
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        <motion.a
          href="#home"
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          MOHAMED<span> AMIN.</span>
        </motion.a>

        <div className="nav-links">
          {sections.map((id, index) => (
            <motion.a
              key={id}
              href={`#${id}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              {t.nav[id]}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleLanguage}>
            <Languages size={18} />
            {language === "ar" ? "EN" : "AR"}
          </button>

          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
              >
                {t.nav[id]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
