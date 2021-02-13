import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, database }) => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState({});

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const handleAddOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards, [card.id]: card };
      database.write(user.uid, updated);
      return updated;
    });
  };

  const handleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      database.write(user.uid, updated);
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
        return;
      }
      setUser(user);
      database.read(user.uid).then(setCards);
    });
  }, []);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={handleAddOrUpdate}
          onUpdate={handleAddOrUpdate}
          onDelete={handleDelete}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
