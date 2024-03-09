import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import BottomTabNavigator from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <BottomTabNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
