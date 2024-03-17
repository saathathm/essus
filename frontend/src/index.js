import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
