import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { StoreProvider } from './store-provider';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
