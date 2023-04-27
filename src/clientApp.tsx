import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import { Provider } from 'react-redux';
import store from './store';
import './main.scss';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
