import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './contents.module.css';

const Contents = ({ authService, setUser }) => {
  const onLogout = () => {
    authService.logout();
    setUser({});
  };

  return (
    <section className={styles.app}>
      <Header onLogout={onLogout} />
      <section className={styles.contents}>
        <h1>hi</h1>
      </section>
      <Footer />
    </section>
  );
};

export default Contents;
