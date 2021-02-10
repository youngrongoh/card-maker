import React from 'react';
import styles from './cardEditForm.module.css';

const CardEditForm = (props) => {
  return (
    <form className={styles.form}>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        placeholder="Name"
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        placeholder="Company"
      />
      <select className={`${styles.input} ${styles.select}`} type="text">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={`${styles.input} ${styles.text}`}
        type="text"
        placeholder="Title"
      />
      <input
        className={`${styles.input} ${styles.text}`}
        type="email"
        placeholder="Email"
      />
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        cols="30"
        placeholder="Message"
      ></textarea>
      <button className={`${styles.input} ${styles.button} ${styles.no_file}`}>
        No file
      </button>
      <button className={`${styles.input} ${styles.button}`}>Add</button>
    </form>
  );
};

export default CardEditForm;
