import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>N'hésitez pas à me contacter! </p>
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
