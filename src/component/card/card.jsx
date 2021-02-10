import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.card} ${styles.black}`}>
      <div className={styles.profile}>
        <img className={styles.image} src="" alt="" />
      </div>
      <div className={styles.info}>
        <p className={`${styles.text} ${styles.name}`}>Ellie</p>
        <p className={`${styles.text} ${styles.title}`}>Samsung</p>
        <p className={styles.text}>Software Engineer</p>
        <p className={styles.text}>dream.coder.ellie@gmail.com</p>
        <p className={`${styles.text} ${styles.message}`}>
          "Don't forget to code your dream"
        </p>
      </div>
    </div>
  );
};

export default Card;
