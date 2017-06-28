import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducers from './reducers/index'


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


//CREO STORE REDUCER
let store = createStore(combineReducers({
  ...reducers,
}))



ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
  
registerServiceWorker();
