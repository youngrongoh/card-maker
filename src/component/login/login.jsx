import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  /*   
  useEffect(() => {
    authService.getUser().then((result) => {
      if (result.user !== null) {
        setUser(result);
        history.push('/');
      }
    });
  }, []);
  */

  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };

  const onLogout = () => {};

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h2 className={styles.title}>Login</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
