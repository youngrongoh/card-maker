import React from 'react';
import styles from './input_file_button.module.css';

const InputFileButton = ({ fileName, onFileChange }) => {
  const name = fileName || 'No File';
  const colorClass = name === 'No File' ? '' : styles.pink;

  return (
    <button className={`${styles.button} ${colorClass}`} onClick={onFileChange}>
      {name.length < 15 ? name : `${name.slice(0, 15)} ...`}
    </button>
  );
};

export default InputFileButton;
