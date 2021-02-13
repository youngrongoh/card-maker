import React, { useRef, useState } from 'react';
import styles from './input_file_button.module.css';

const InputFileButton = ({ imageUploader, fileName, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const name = fileName || 'No File';
  const colorClass = fileName ? styles.pink : styles.grey;

  const onChange = async () => {
    setLoading(true);
    const uploaded = await imageUploader.upload(inputRef.current.files[0]);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    setLoading(false);
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${colorClass}`}
          onClick={onButtonClick}
        >
          {name.length < 15 ? name : `${name.slice(0, 15)} ...`}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default InputFileButton;
