import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './assets/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axiosInstance from './axios';

const userToken = localStorage.getItem('userToken');
if (userToken) {
  axiosInstance.defaults.headers.common['authorization'] = 'Bearer ' + userToken;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
