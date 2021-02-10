import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul className={styles.list}>
        {cards.map((card) => {
          return (
            <li className={styles.item}>
              <CardEditForm card={card} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Editor;
