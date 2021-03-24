import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SQL } from './src/config/SQLite';
import StackNavigator from './src/config/navigation';
import { Provider } from 'react-redux';

import { store } from './src/config/store';
SQL.connect();


export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
            <StackNavigator></StackNavigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

