import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigation/index';
import store from './src/store';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
