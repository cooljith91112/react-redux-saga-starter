import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history, configureStore } from './core/store';
import rootMiddleware from './middlewares/root.middleware';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Routes from './core/routes';
import HttpService from './services/http.service';

require("es6-promise").polyfill();



const store = configureStore();
store.runSaga(rootMiddleware);
HttpService.reduxStore = store;
HttpService.httpInterceptor();
// console.log(HttpService.httpInterceptor)

const XRouter = () => {
    return (
      <Router>
        <Route>
          <Routes store={store} history={history} />
        </Route>
      </Router>
    );
  };


  ReactDOM.render(<XRouter />, document.getElementById('root'));


serviceWorker.unregister();
