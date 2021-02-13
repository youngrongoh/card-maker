import React, { useRef, useState } from 'react';
import Button from '../button/button';
import InputFileButton from '../input_file_button/input_file_button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAdd, onFileSelect }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({ name: '', url: '' });
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();

    const initial = { id: Date.now(), fileName: file.name, fileURL: file.url };

    const card = Array.from(formRef.current).reduce((_card, input) => {
      if (input.tagName !== 'BUTTON') {
        _card[`${input.name}`] = input.value;
      }
      return _card;
    }, initial);

    formRef.current.reset();
    onAdd(card);
  };

  const onFileChange = (event) => {
    event.preventDefault();
    onFileSelect((name, url) => {
      setFile({ name, url: `${url}/${name}.jpg` });
    }, setLoading);
  };

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
        {loading ? (
          <div className={styles.loading}></div>
        ) : (
          <InputFileButton fileName={file.name} onFileChange={onFileChange} />
        )}
      </div>
      <div className={styles.button}>
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
