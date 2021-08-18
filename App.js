import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './src/Router';

import { store } from './src/store';

import 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
