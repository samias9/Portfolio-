// src/components/Hero/Hero.jsx

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const textLines = [t("hero.line1"), t("hero.line2")];

  const [displayText, setDisplayText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = textLines[currentLineIndex];

    if (!isDeleting) {
      if (currentCharIndex < currentLine.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(typingTimeout);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (currentCharIndex > 0) {
        const deletingTimeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        }, 30);
        return () => clearTimeout(deletingTimeout);
      } else {
        setIsDeleting(false);
        setCurrentLineIndex((prev) => (prev + 1) % textLines.length);
      }
    }
  }, [currentCharIndex, isDeleting, currentLineIndex, textLines]);

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={`${styles.name} ${styles.title}`}>Samia CARCHAF</span>
        </h1>
        <p className={`${styles.description} ${styles.typingEffect}`}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </p>
        <a href="mailto:samia.carchaf@gmail.com" className={styles.cta}>
          <span>{t("hero.contact")}</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <a
          href="/Files/cv_Samia-CARCHAF.pdf"
          download="Samia_Carchaf_CV.pdf"
          className={styles.cv}
        >
          <span>{t("hero.download")}</span>
          <img src={getImageUrl("hero/downloads.png")} alt="Download" />
        </a>
      </div>
      <div className={styles.tooltipContainer}>
        <img
          className={styles.heroImg}
          src={getImageUrl("hero/samia.png")}
          alt="Hero"
        />
        <div className={styles.tooltipText}>
          <p className={styles.salute}> ⊹₊⟡⋆ {t("hero.greeting")} 👋 </p>
          <p>{t("hero.intro")}</p>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </nav>
  );
};
