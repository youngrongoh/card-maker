import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Tom',
      company: 'Samsung',
      theme: 'dark',
      title: 'FE',
      email: 'fetom@gmail.com',
      message: 'I love FE',
      fileName: '',
      fileURL: '',
    },
    2: {
      id: '2',
      name: 'Bob',
      company: 'LG',
      theme: 'light',
      title: 'BE',
      email: 'bebob@gmail.com',
      message: "don't forget",
      fileName: '',
      fileURL: '',
    },
    3: {
      id: '3',
      name: 'Anne',
      company: 'Apple',
      theme: 'colorful',
      title: 'UX Designer',
      email: 'uxanne@gmail.com',
      message: "I'm still hungry",
      fileName: '',
      fileURL: '',
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const handleAddOrUpdate = (card) => {
    setCards((cards) => {
      return { ...cards, [card.id]: card };
    });
  };

  const handleDelete = (card) => {
    const updated = { ...cards };
    delete updated[card.id];
    setCards(updated);
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
      <section className={styles.container}>
        <Editor
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
