import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './editor.module.css';

const Editor = (props) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <CardEditForm />
        </li>
      </ul>
    </section>
  );
};

export default Editor;
