import React , { Component } from 'react';
import Main from './src/components/Main'
import Loading from './src/components/Loading'
import reducer from './src/reducers/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import middlewareLogger from './src/middleware/middleware-logger';

const store = createStore(reducer, (applyMiddleware(middlewareLogger, thunk)));

console.log(store.getState());

export default class App extends Component {
 
  
  render() {
    return (
      <Provider store = {store}>
        <Loading/>
      </Provider>
    )
  }
}


