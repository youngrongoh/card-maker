import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = (props) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Card />
        </li>
      </ul>
    </section>
  );
};

export default Preview;
