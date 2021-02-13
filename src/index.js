import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/authService';
import FileService from './service/fileService';

const authService = new AuthService();
const fileService = new FileService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} fileService={fileService} />
  </React.StrictMode>,
  document.getElementById('root')
);
