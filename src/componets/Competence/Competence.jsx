import React, { useEffect } from "react";
import styles from "./Competence.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faComputerMouse, faStar } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const Competence = () => {
    const { t, i18n } = useTranslation();

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

    // Get volunteer experience data from translations
    const volunteerExperience = {
        title: t('competence.volunteer.title'),
        school: t('competence.volunteer.school'),
        description: t('competence.volunteer.description'),
        achievements: [
            t('competence.volunteer.achievements.0'),
            t('competence.volunteer.achievements.1'),
            t('competence.volunteer.achievements.2'),
            t('competence.volunteer.achievements.3')
        ]
    };

    // Get skills data from translations
    const skills = [
        {
            icon: faLanguage,
            title: t('competence.skills.language.title'),
            description: (
                <>
                <em>{t('competence.skills.language.description.0')}</em> <br />
                <em>{t('competence.skills.language.description.1')}</em> <br />
                <em>{t('competence.skills.language.description.2')}</em>
                </>
            )
        },
        {
            icon: faComputerMouse,
            title: t('competence.skills.technical.title'),
            description: (
                <>
                <em>{t('competence.skills.technical.description.0')}</em> <br />
                <em>{t('competence.skills.technical.description.1')}</em> <br />
                <em>{t('competence.skills.technical.description.2')}</em> <br />
                <em>{t('competence.skills.technical.description.3')}</em>
                </>
            )
        }
    ];

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
