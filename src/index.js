import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import articleReducer from './redux/reducers/articleReducer';
import rootSaga from './redux/sagas/rootSaga';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ articleReducer });
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
    withDevTools( applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


