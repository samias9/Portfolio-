import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"; // 🔧 CORRIGÉ

export const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <LanguageSwitcher />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">{t("navbar.about")}</a></li>
          <li><a href="#experience">{t("navbar.experience")}</a></li>
          <li><a href="#competences">{t("navbar.skills")}</a></li>
          <li><a href="#project">{t("navbar.projects")}</a></li>
          <li><a href="#contact">{t("navbar.contact")}</a></li>
        </ul>
      </div>
    </nav>
  );
};
