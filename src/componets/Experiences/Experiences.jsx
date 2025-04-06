import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Experiences.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Experience = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.wrapper} id="experience">
            <span className={styles.sideText}>{t('experience.title')}</span>

            <div className={styles.container}>
                <div className={styles.parent}>
                    {/* 1st Card */}
                    <div className={styles.card}>
                        <div className={styles.glass}></div>
                        <div className={styles.content}>
                            <span className={styles.title}>{t('experience.arsene.title')}</span>
                            <span className={styles.place}>
                                <FontAwesomeIcon icon={faLocationDot} size="1x" color="#0077b5" /> {t('experience.arsene.place')}
                            </span>
                            <span className={styles.text}>
                                <span style={{ display: 'block', marginBottom: '10px' }}>{t('experience.arsene.desc')}</span>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.arsene.task1')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.arsene.task2')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.arsene.task3')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.arsene.task4')}</li>
                                </ul>
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.socials}>
                                <FontAwesomeIcon icon={faVuejs} color="#0077b5" size="2x" style={{ marginRight: '10px' }} />
                                <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="#0077b5">
                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="#0077b5" >
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <img
                                    src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                    alt="Firebase Logo"
                                    width="32"
                                    height="30"
                                    color="#0077b5"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2nd Card */}
                    <div className={styles.card}>
                        <div className={styles.glass}></div>
                        <div className={styles.content}>
                            <span className={styles.title}>{t('experience.ronsard1.title')}</span>
                            <span className={styles.place}>
                                <FontAwesomeIcon icon={faLocationDot} size="1x" color="#0077b5" /> {t('experience.ronsard1.place')}
                            </span>
                            <span className={styles.text}>
                                <span style={{ display: 'block', marginBottom: '10px' }}>{t('experience.ronsard1.desc')}</span>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.ronsard1.task1')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.ronsard1.task2')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.ronsard1.task3')}</li>
                                </ul>
                            </span>
                        </div>

                    </div>

                    {/* 3rd Card */}
                    <div className={styles.card}>
                        <div className={styles.glass}></div>
                        <div className={styles.content}>
                            <span className={styles.title}>{t('experience.ronsard2.title')}</span>
                            <span className={styles.place}>
                                <FontAwesomeIcon icon={faLocationDot} size="1x" color="#0077b5" /> {t('experience.ronsard2.place')}
                            </span>
                            <span className={styles.text}>
                                <span style={{ display: 'block', marginBottom: '10px' }}>{t('experience.ronsard2.desc')}</span>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.ronsard2.task1')}</li>
                                    <li><FontAwesomeIcon icon={faCheck} color="green" style={{ marginRight: '10px' }}/>{t('experience.ronsard2.task2')}</li>
                                </ul>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
