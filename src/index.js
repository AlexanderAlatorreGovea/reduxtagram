import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/App';
import reducers from './reducers';



ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('#root')
);


/* Stephen Grider applied middleware inside this index.js file  on video 165

import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';


conts store = createStore(reducers, applyMiddleware(thunk))
*/
