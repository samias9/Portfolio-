import React from "react";
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const Project = () => {
    return (
        <section id="project" className={styles.container}>
            <h2 className={styles.title} >Projets</h2>
            <div className={styles.projects}>{
                projects.map((project, id)=> {
                    return (
                        <ProjectCard key={id} project={project} />
                    )
                })}
            </div>

        </section>
    );
}
