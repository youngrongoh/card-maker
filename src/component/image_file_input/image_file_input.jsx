import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default ImageFileInput;
