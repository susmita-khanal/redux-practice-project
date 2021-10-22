import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducers from './services/Reducers/rootReducers';

import {BrowserRouter as Router} from 'react-router-dom'


const store=createStore(rootReducers)
console.log("store data",store)

ReactDOM.render(
    <Router>
      
  <Provider store={store}>

    <App />
  </Provider>
    </Router>,
  document.getElementById('root')
);

