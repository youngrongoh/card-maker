import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService, fileService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Tom',
      company: 'Samsung',
      theme: 'dark',
      title: 'FE',
      email: 'fetom@gmail.com',
      message: 'I love FE',
      fileName: 'Tom',
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
      fileName: 'Bob',
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
      fileName: 'Anne',
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

  const onFileUpload = (card, cb) => {
    fileService.uploadFile((name, url) => {
      const updated = {
        ...card,
        fileName: name,
        fileURL: `${url}/${name}.jpg`,
      };
      setCards((cards) => {
        return { ...cards, [card.id]: updated };
      });
    }, cb);
  };

  const onFileSelect = (cb, cb2) => {
    fileService.uploadFile(cb, cb2);
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
          onFileUpload={onFileUpload}
          onFileSelect={onFileSelect}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
