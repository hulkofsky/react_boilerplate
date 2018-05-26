import React from 'react';
import ReactDOM from "react-dom";
import{Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducers from './reducers/allReducers.js';
import WebPage from './components/WebPage.js'

const store = createStore(AllReducers);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('app')
);
