import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Formations</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("skills/school.png")}
          alt="sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img  src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h4>Université du Quebec à Chicoutimi</h4>
              <div className={styles.educationItem}>
                <span>2024-2025</span>
              </div>
              <span>Maîtrise en Informatique cheminement Intelligence Artificielle </span>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h4>Polytech Tours</h4>
              <div className={styles.educationItem}>
                <span>2020-2025</span>
              </div>
              <span>Formation Ingénieur en Informatique </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
