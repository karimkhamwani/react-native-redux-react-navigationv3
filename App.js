import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
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
          <Button
            title="Solid Button"
          />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
