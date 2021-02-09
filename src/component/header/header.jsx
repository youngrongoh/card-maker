import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  const onClick = () => {
    onLogout();
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
      {onLogout && (
        <button className={styles.button} onClick={onClick}>
          Sign out
        </button>
      )}
    </header>
  );
};

export default Header;
