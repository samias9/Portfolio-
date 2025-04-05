import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    setIsAnimating(true);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div
      onClick={toggleLanguage}
      className={`${styles.languageSwitcher} ${styles.darkTheme} ${isAnimating ? styles.switching : ''}`}
    >
      <span className={styles.flag}>{i18n.language === 'fr' ? '🇬🇧' : '🇫🇷'}</span>
      <span className={styles.text}>{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
    </div>
  );
};

export default LanguageSwitcher;
