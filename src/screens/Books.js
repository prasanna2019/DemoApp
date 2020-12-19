import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import BookItem from '../components/BookItem';
import HeaderBar from '../components/HeaderBar';
import {books} from '../data/Data.shared';
   
  export default class Books extends Component{
    constructor(props) {
        super(props);
        this.state={
          cart:[]
        }
        
    }

    cart=(data)=>{
      if(this.state.cart.indexOf(data)== -1){
        this.setState(prevState=>({cart: [...prevState.cart , data]}) )
      }
    }

    onClick=()=>{
      console.log('clicked')
      this.props.navigation.navigate('Cart')
    }
      
    render(){
      
        return(
          <View>
            <HeaderBar title={'Books List'} cartItems={this.state.cart.length} nav={this.props.navigation} data={this.state.cart}/>
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
              <BookItem item={books} sign={'+'} cart={(data)=>{this.cart(data)}} /> 
            </ScrollView>
          </View>

        )
    }
    
  }
