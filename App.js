import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SQL } from '@/config/SQLite';
import StackNavigator from '@/navigation';
import { Provider } from 'react-redux';

import { store } from '@/store';
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

