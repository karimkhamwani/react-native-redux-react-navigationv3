import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppWithNavigationState from './src/navigation/index';
import { store, persistor } from './src/store';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppWithNavigationState />
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

export default App;
