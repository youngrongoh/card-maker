import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const card = Array.from(formRef.current).reduce((obj, input) => {
      if (input.tagName !== 'BUTTON') {
        obj[`${input.name}`] = input.value;
      }
      return obj;
    }, {});
    onAdd(card);
  };

  const onFileChange = () => {};

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select className={`${styles.input} ${styles.select}`} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.button}>
        <Button name="No File" onClick={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
