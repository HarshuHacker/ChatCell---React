import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './Assets/Styles/index.css';
import App from './Components/App';
import configStore from './Store';

const store = configStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
