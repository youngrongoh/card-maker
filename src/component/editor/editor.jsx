import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul className={styles.list}>
        {Object.keys(cards).map((key) => {
          return (
            <li key={key} className={styles.item}>
              <CardEditForm
                FileInput={FileInput}
                card={cards[key]}
                updateCard={updateCard}
                deleteCard={deleteCard}
              />
            </li>
          );
        })}
        <CardAddForm FileInput={FileInput} onAdd={addCard} />
      </ul>
    </section>
  );
};

export default Editor;
