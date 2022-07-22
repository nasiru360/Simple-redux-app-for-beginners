import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/Store'
import { Provider } from 'react-redux';

import reducer from './Redux/Reducers/ProductReducers'   // incharge of holding the application state
// Actio



     console.log("Current state:", store.getState())

    const unsubscribe=store.subscribe(()=>console.log("What is new here",store.getState()))

    

ReactDOM.render(
  <React.StrictMode>

  <Provider store={store}>     <App /></Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

