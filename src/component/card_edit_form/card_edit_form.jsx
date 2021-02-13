import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, onUpdate, onDelete }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    onUpdate({ ...card, [event.target.name]: event.target.value });
  };

  const onFileChange = (file) => {
    onUpdate({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <form className={styles.form}>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="company"
        placeholder="Company"
        value={company}
        onChange={onChange}
      />
      <select
        className={`${styles.input} ${styles.select}`}
        name="theme"
        value={theme}
        onChange={onChange}
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
        onChange={onChange}
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        name="message"
        placeholder="Message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.button}>
        <FileInput fileName={fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={() => onDelete(card)} />
      </div>
    </form>
  );
};

export default CardEditForm;
