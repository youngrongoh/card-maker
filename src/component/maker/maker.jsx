import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.contents}>
        <section className={styles.content}>
          <h1>Card Maker</h1>
        </section>
        <section className={styles.content}>
          <h1>Card Preview</h1>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
