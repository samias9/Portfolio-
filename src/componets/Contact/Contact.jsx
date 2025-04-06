import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
            <h2>{t("contact.title", "Contact Me")}</h2>
            <p>{t("contact.description", "Feel free to reach out.")}</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:samia.carchaf@gmail.com">samia.carchaf@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon"/>
                    <a href="https://www.linkedin.com/in/samia-carchaf-ia/" target="_blank" >Linkedin.com/in/samia-carchaf-ia</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon"/>
                    <a href="https://github.com/samias9" target="_blank">github.com/samias9</a>
                </li>
            </ul>
        </footer>
    );
}
