import React, { useEffect } from "react";
import styles from "./Competence.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faComputerMouse, faStar } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Competence = () => {
    const volunteerExperience = {
        title: "Bénévolat",
        school: "École élémentaire Henri Wallon",
        description: "En tant que bénévole, j'ai eu l'opportunité de donner des cours d'introduction à la robotique aux élèves de primaire, ce qui m'a permis de :",
        achievements: [
            "Enrichir mes connaissances scientifiques en les utilisant autrement.",
            "Apprendre à s'adapter aux questions et aux propos des enfants.",
            "Découvrir le monde de l'enseignement.",
            "Donner une image plus réelle et plus accessible du métier d'ingénieur."
        ]
    };

    const skills = [
        {
            icon: faLanguage,
            title: "Compétences Linguistiques",
            description: (
                <>
                <em>Français</em> : Maîtrise native <br />
                <em>Anglais</em> : C1 - TOEIC 890 <br />
                <em>Arabe</em> : Langue maternelle
            </>
            )
        },
        {
            icon: faComputerMouse,
            title: "Compétences Techniques",
            description: (
                <>
                    <em>Développement Web</em> : React, Node.js, Angular <br />
                    <em>Programmation</em> : Java, Kotlin, Python, C++, JavaScript, SQL <br />
                    <em>Data Science & IA</em> : Pandas, NumPy, TensorFlow, OpenAI API <br />
                    <em>Outils</em> : Git, Docker, Google Cloud, VS Code, IntelliJ, AndroidStudio
                </>
            )
        }
    ];

    useEffect(() => {
        const textElements = document.querySelectorAll(".animate-text");

        textElements.forEach(element => {
            gsap.to(element, {
                ease: "power1.inOut",
                y: 10,
                yoyo: true,
                repeat: -1,
                duration: 1,
            });
        });
    }, []);

    return (
        <section className={styles.wrapper} id="competences">
            <div className={styles.container}>
                <div className={styles.cardBenevolat}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <h2>
                                {volunteerExperience.title}
                            </h2>
                            <div className={styles.location}>
                                <FontAwesomeIcon icon={faLocationDot} size="2x" color="#0077b5" />
                                <h6 className={styles.benevolatTitle}>
                                    {volunteerExperience.school} - Tours, France
                                </h6>
                            </div>
                        </div>
                        <div className={styles.cardBack}>
                            <div className={styles.cardContent}>
                                <p className={styles.benevolatDescription}>
                                    {volunteerExperience.description}
                                </p>
                                <ul className={styles.benevolatList}>
                                    {volunteerExperience.achievements.map((achievement, index) => (
                                        <li key={index}>
                                            <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                            <FontAwesomeIcon
                                icon={skill.icon}
                                size="3x"
                                className={styles.skillIcon}
                            />
                            <div className={styles.skillContent}>
                                <h2 className={`${styles.skillTitle} animate-text`}>
                                    {skill.title}
                                </h2>
                                <p className={styles.skillDescription}>
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
