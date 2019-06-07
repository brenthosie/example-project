import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as rootReducer from './reducers/root-reducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const middlewares = [
  thunk  
]

const store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(...middlewares)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
