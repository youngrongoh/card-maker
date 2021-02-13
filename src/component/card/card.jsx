import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <div className={`${styles.card} ${getThemeClass(theme)}`}>
      <div className={styles.avatar}>
        <img className={styles.image} src={url} alt="avatar" />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>" {message} "</p>
      </div>
    </div>
  );
};

function getThemeClass(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`Wrong input: ${theme}`);
  }
}

export default Card;
