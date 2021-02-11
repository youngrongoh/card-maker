import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, onDelete }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  const onSubmit = (event) => {
    event.preventDefault();
    onDelete(card);
  };

  const onFileChange = () => {};

  const fileBtnName = fileName || 'No File';

  return (
    <form className={styles.form}>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="company"
        placeholder="Company"
        value={company}
      />
      <select
        className={`${styles.input} ${styles.select}`}
        name="theme"
        value={theme}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="title"
        placeholder="Title"
        value={title}
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="email"
        name="email"
        placeholder="Email"
        value={email}
      />
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        name="message"
        placeholder="Message"
        value={message}
      ></textarea>
      <div className={styles.button}>
        <Button name={fileBtnName} onClick={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
