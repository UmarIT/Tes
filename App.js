// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './store/index'
function App() {
  return (
    <Provider store={store}>

      <ShoppingCart/>
    </Provider>
  );
}

export default App;