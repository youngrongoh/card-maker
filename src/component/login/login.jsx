import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ firebase, setUser, user }) => {
  const history = useHistory();

  useEffect(() => {
    firebase.getUser().then((result) => {
      if (result.user !== null) {
        setUser(result);
        history.push('/');
      }
    });
  }, []);

  const onSignOut = () => {
    firebase.signOut();
    setUser({});
    history.push('/login');
  };

  return (
    <section className={styles.login}>
      <header className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h1 className={styles.app_title}>Business Card Maker</h1>
        {Object.keys(user).length !== 0 && (
          <button className={styles.logout_btn} onClick={onSignOut}>
            Sign out
          </button>
        )}
      </header>
      <main className={styles.content}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={firebase.signIn}>
            Google
          </button>
          <button className={styles.btn}>Github</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.foot_msg}>Code Your dream</p>
      </footer>
    </section>
  );
};

export default Login;
