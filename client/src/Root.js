
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from './Component/store/reducers/mainReducer';
import thunk from 'redux-thunk';


export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );

  return <Provider store={store}>{children}</Provider>;
};