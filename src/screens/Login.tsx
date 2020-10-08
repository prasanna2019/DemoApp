import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import{Input} from '../components/BasicComponents'
import{Submit} from '../components/BasicComponents'
import {handleLogin} from '../utils/handleLogin'
import {styles} from '../utils/style' 

  
  export interface State {
    username:string, 
    password:string,
    error:string
    
  }
  export interface Props{
      navigation: any,
     // data: any
  }
  
  class Login extends Component<Props, State>{
    props:Props
    constructor(props) {
        super(props);
        this.state={
          username:'',
          password:'',
          error:''
        }
        
    }
      
      render(){
        //this.setState({})
          return(
              <View style={{flex:1}}>
                  <View style={{flex:2, marginTop:'1%'}}>
                      <Image 
                      source={require('../images/foodapp.jpg')}
                      style={styles.image} 
                      /> 
                  </View>
                  <View style={{flex:3, margin:'5%', justifyContent:'space-evenly'}}> 
                      
                    <Input placeholder='Enter Username' password={false}   onBlur={text=> this.setState({username:text}) } />

                    <Input placeholder='Enter Password' password={true}   onBlur={text=> this.setState({password:text}) } />
                    {this.state.error != '' ?  (<View><Text style={styles.error}>{this.state.error}</Text></View>) : null}   
                    <Submit name="Login" onPressButton={async()=> { await handleLogin({username:this.state.username, password:this.state.password}) ? this.props.navigation.navigate('Profile',{user: this.state.username}) : this.setState({error:'Login credentials are incorrect'})} } />
                  </View>
              </View>
          )
      }
     
  }
  export default Login;
