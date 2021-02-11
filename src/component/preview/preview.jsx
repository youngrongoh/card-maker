import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.list}>
        {Object.keys(cards).map((key) => (
          <li key={key} className={styles.item}>
            <Card card={cards[key]} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
