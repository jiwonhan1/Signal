import React , { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main'
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
        <Main/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

