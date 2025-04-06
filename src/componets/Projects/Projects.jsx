import React from "react";
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';
import { useTranslation } from 'react-i18next';

export const Project = () => {
    const { t } = useTranslation();

    // Combiner les données des projets avec les traductions
    const translatedProjects = projects.map((project, index) => {
        return {
            ...project,
            title: t(`projects.items.${index}.title`),
            description: t(`projects.items.${index}.description`)
        };
    });

    return (
        <section id="project" className={styles.container}>
            <h2 className={styles.title}>{t('navbar.projects')}</h2>
            <div className={styles.projects}>{
                translatedProjects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    )
                })}
            </div>
        </section>
    );
}
