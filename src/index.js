import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import { loadToDoList } from './actions';
import { loadSearchList } from './actions/secondapi.action';

import toDoApp from './reducers';
import searchApp from './reducers/seconapi.reducer';
import rootSaga from './sagas/index';
import rootSearchSaga from './sagas/secondapi.saga';

const sagaMiddlewareSearch = createSagaMiddleware();
const storeSearch = createStore(searchApp, applyMiddleware(sagaMiddlewareSearch));
sagaMiddlewareSearch.run(rootSearchSaga);
storeSearch.dispatch(loadSearchList());

const sagaMiddlewareToDo = createSagaMiddleware();
const storeToDo = createStore(toDoApp, applyMiddleware(sagaMiddlewareToDo));
sagaMiddlewareToDo.run(rootSaga);
storeToDo.dispatch(loadToDoList());
render(
  <Provider store={storeToDo}>
  
    <App />
  
  </Provider>,
  document.getElementById('root')
);
