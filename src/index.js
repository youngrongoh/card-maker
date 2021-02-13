import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import InputFileButton from './component/input_file_button/input_file_button';
import Database from './service/database';

const authService = new AuthService();
const database = new Database();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <InputFileButton {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} database={database} />
  </React.StrictMode>,
  document.getElementById('root')
);
