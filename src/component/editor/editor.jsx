import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.list}>
        {cards.map((card) => (
          <li key={card.id} className={styles.item}>
            <CardEditForm card={card} />
          </li>
        ))}
        <CardAddForm onAdd={onAdd} />
      </ul>
    </section>
  );
};

export default Editor;
