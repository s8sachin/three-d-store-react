/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';
import Header from './components/Home/Header';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Home/Footer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

const rootElement = document.getElementById('root');
const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Header />
        <Route component={App} />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);
ReactDom.render(app, rootElement);
serviceWorker.unregister();
