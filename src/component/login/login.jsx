import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService, setUser }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(setUser);
  };

  return (
    <section className={styles.login}>
      <Header onLogout={null} />
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
