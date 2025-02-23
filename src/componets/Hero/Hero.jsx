import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

    const textLines = [
        "Étudiante en Maîtrise",
        "Passionnée par l'innovation",
        "En recherche d'un stage"
    ];

    const [displayText, setDisplayText] = useState("");
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentLine = textLines[currentLineIndex];

        if (!isDeleting) {
            if (currentCharIndex < currentLine.length) {
                const typingTimeout = setTimeout(() => {
                    setDisplayText(prev => prev + currentLine[currentCharIndex]);
                    setCurrentCharIndex(prev => prev + 1);
                }, 40);
                return () => clearTimeout(typingTimeout);
            } else {
                setTimeout(() => setIsDeleting(true), 1000);
            }
        } else {
            if (currentCharIndex > 0) {
                const deletingTimeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                    setCurrentCharIndex(prev => prev - 1);
                }, 30);
                return () => clearTimeout(deletingTimeout);
            } else {
                setIsDeleting(false);
                setCurrentLineIndex((prev) => (prev + 1) % textLines.length);
            }
        }
    }, [currentCharIndex, isDeleting, currentLineIndex, textLines]);

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, <span className={`${styles.name} ${styles.title}`}>I'm Samia</span>
                </h1>
                <p className={`${styles.description} ${styles.typingEffect}`}>
                    {displayText}
                    <span className={styles.cursor}>|</span>
                </p>
                <a href="mailto:samia.carchaf@gmail.com" className={styles.cta}>
                    <span>Contactez-moi</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>
            <div className={styles.tooltipContainer}>
                <img className={styles.heroImg} src={getImageUrl("hero/samia.png")} alt="Hero" />
                <div className={styles.tooltipText}>
                    <p className={styles.salute}> ⊹₊⟡⋆ Bonjour! 👋  </p>
                    <p>Actuellement à la recherche d'un stage pour appliquer mes compétences et contribuer à des projets significatifs. </p>
                </div>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </nav>
    );
};
