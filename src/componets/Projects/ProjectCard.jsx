import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
import { useTranslation } from 'react-i18next';

export const ProjectCard = ({
    project: { title, imageSrc, demo, description, source, skills }
}) => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={getImageUrl(imageSrc)}
                alt={`${t('projects.imageAlt')} ${title}`}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return <li key={id} className={styles.skill}>{skill}</li>
                })}
            </ul>
            <div className={styles.links}>
                <a href={source} target="_blank" className={styles.link}>
                    {t('projects.sourceLink')}
                </a>
                {demo && (
                    <a href={demo} target="_blank" className={styles.link}>
                        {t('projects.demoLink')}
                    </a>
                )}
            </div>
        </div>
    );
}
