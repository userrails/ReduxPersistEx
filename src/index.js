import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
      ),
    ),
  )
  return store
}

var store = configureStore({initialState: 'jkl'});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
