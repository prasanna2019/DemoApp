import React from 'react';
import {View, BackHandler, Text} from 'react-native'
import{Submit} from '../components/BasicComponents'
import {handleLogout} from '../utils/handleLogout'
import {styles} from '../utils/style'

  export interface State {
    username:string, 
    password:string,
    error:string
    
  }
  export interface Props{
     navigation: any,
     route: any
  }
  
  class Profile extends React.Component<Props, State>{
    props:Props
    constructor(props) {
        super(props);
        this.state={
          username:'',
          password:'',
          error:''
        }
        
      }
      componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {return true})
      }
    
      render(){
        //const user = this.props.route.params != null ? this.props.route.params.user : 'user' 
          return(
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                  <Text style={styles.message}>
                      {'You have logged in as ' +this.props.route.params.user}
                  </Text>
                  <Submit name='Logout' onPressButton={()=> { handleLogout() ? this.props.navigation.navigate('Login'): null} }/>
              </View>
          )
      }
  }
  export default Profile;