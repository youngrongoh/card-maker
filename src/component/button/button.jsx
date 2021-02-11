import React from 'react';
import styles from './button.module.css';

const Button = ({ name, onClick }) => (
  <button
    className={`${styles.button} ${getClassName(name)}`}
    onClick={onClick}
  >
    {name}
  </button>
);

function getClassName(name) {
  switch (name) {
    case 'No File':
      return styles.nofile;
    case 'Add':
      return '';
    case 'Delete':
      return '';
    default:
      return styles.file;
  }
}

export default Button;
