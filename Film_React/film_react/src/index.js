import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "owl.carousel";

import { createStore, applyMiddleware, compose } from "redux"; /** (*) */
import { Provider } from "react-redux";
import RootReducer from './redux/reducer/root';
import thunk from "redux-thunk"; /** (*) */
import { BrowserRouter } from "react-router-dom";

// import "./scss/index.scss"

import './css/index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /** (*) */

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk))); /** (*) , composeEnhancers+ applyMiddleware là 1 func  */



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
