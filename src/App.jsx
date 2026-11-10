
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import translations from "./translations";
import "./index.css";

function getSavedSetting(key, fallback, allowedValues) {
  try {
    const value = localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    getSavedSetting("portfolio-theme", "dark", [
      "dark",
      "light",
    ])
  );

  const [language, setLanguage] = useState(() =>
    getSavedSetting("portfolio-language", "en", [
      "en",
      "ar",
    ])
  );

  const isArabic = language === "ar";
  const t = translations[language] || translations.en;

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Local storage may be unavailable.
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Local storage may be unavailable.
    }

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language, isArabic]);

  const toggleTheme = () => {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  };

  const toggleLanguage = () => {
    setLanguage((previous) =>
      previous === "en" ? "ar" : "en"
    );
  };

  return (
    <div
      className={`app ${theme}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar
        t={t}
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />

      <main>
        <Hero
          t={t}
          isArabic={isArabic}
        />

        <About t={t} />

        <Experience t={t} />

        <Expertise t={t} />

        <Projects t={t} />

        <Contact t={t} />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="logo">
            MOHAMED<span> AMIN.</span>
          </a>

          <p>
            © {new Date().getFullYear()} {t.footer}
          </p>

          <a
            href="#home"
            className="back-to-top"
            aria-label={
              isArabic
                ? "العودة إلى الأعلى"
                : "Back to top"
            }
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
