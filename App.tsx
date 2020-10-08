/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from './src/utils/style'

const Stack = createStackNavigator();

interface State {
  initialRoute: string;
  loading:boolean,
   user:object
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {initialRoute: 'Login', loading: true, user:null}
    }

  async componentDidMount() {
    try{
    const jsonValue= await AsyncStorage.getItem('jsonData')
      console.log(jsonValue)
      var user= JSON.parse(jsonValue)
      if(user != null ){  
        this.setState({initialRoute:'Profile', loading:false, user: user.username})
      }
      else{
        console.log('inside else APp')
        this.setState({initialRoute:'Login', loading:false})
      }
    }
    catch{
      this.setState({initialRoute:'Login', loading:true})
    }
  }
  
  render(){
    if(this.state.loading){
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.message}> 
            {'Loading...'}
          </Text>
        </View>
      )
    }
    return(
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false
        }} initialRouteName={this.state.initialRoute} >
          <Stack.Screen name="Login" component={Login}   />
          <Stack.Screen name="Profile" component={Profile}  options={{headerStyle: {
              backgroundColor: 'red' } }}
            initialParams= {{user: this.state.user}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
