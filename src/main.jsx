import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import authStore from './store/authStore.js';
import commentStore from './store/commentStore.js';
import { createContext } from 'react';

const stores = {
  authStore,
  commentStore,
};

export const Context = createContext({ stores });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{ stores }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
);
