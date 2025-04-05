import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("about.title")}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("skills/school.png")}
          alt="sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h4>{t("about.uqac.school")}</h4>
              <div className={styles.educationItem}>
                <span>{t("about.uqac.date")}</span>
              </div>
              <span>{t("about.uqac.program")}</span>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h4>{t("about.polytech.school")}</h4>
              <div className={styles.educationItem}>
                <span>{t("about.polytech.date")}</span>
              </div>
              <span>{t("about.polytech.program")}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
