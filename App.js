/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Books from './src/screens/Books';
import Cart from './src/screens/Cart';
import {Button} from 'react-native';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


class App extends React.Component {
  constructor(props) {
    super(props);
    }


  render(){
    return(
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Books List" component={Books} 
          />
          <Stack.Screen name="Cart" component={Cart} /> 
        </Stack.Navigator>
      </NavigationContainer>  
    )
  }
}

export default App;
