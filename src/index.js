import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Firebase from './service/firebase';

const firebase = new Firebase();

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase} />
  </React.StrictMode>,
  document.getElementById('root')
);
