// ProjectCard.jsx modifié
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
import { useTranslation } from 'react-i18next';

export const ProjectCard = ({
    project: { titleKey, imageSrc, demo, descriptionKey, source, skills }
}) => {
    const { t } = useTranslation();

    // Utiliser les clés pour rechercher les traductions
    const title = t(`competence.projects.items.${titleKey}.title`);
    const description = t(`competence.projects.items.${titleKey}.description`);

    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={getImageUrl(imageSrc)}
                alt={`${t('competence.projects.imageAlt')} ${title}`}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return <li key={id} className={styles.skill}>{skill}</li>
                })}
            </ul>
            <div className={styles.links}>
                <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {t('competence.projects.sourceLink')}
                </a>
                {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {t('competence.projects.demoLink')}
                    </a>
                )}
            </div>
        </div>
    );
}
