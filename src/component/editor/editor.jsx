import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, onAdd, onUpdate, onDelete }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.list}>
        {Object.keys(cards).map((key) => (
          <li key={key} className={styles.item}>
            <CardEditForm
              card={cards[key]}
              onUpdate={onUpdate}
              onDelete={onDelete}
              FileInput={FileInput}
            />
          </li>
        ))}
        <CardAddForm FileInput={FileInput} onAdd={onAdd} />
      </ul>
    </section>
  );
};

export default Editor;
