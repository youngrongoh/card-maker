import React, { useState } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, onDelete, onUpdate }) => {
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

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const obj = { ...card };
    obj[name] = value;
    onUpdate(obj);
  };

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
        <Button name={fileBtnName} onClick={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
