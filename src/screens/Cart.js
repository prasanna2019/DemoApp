import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import BookItem from '../components/BookItem';
import HeaderBar from '../components/HeaderBar';
import EmptyComponent from '../components/EmptyComponent';
import {Badge} from 'react-native-elements';

  
export default class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state={ 
         data: this.props.route.params.data
        }
        
      }
      
    
      cart=(data)=>{
         this.setState(prevState=>({data: prevState.data.filter(item=> item.name !== data.name)}) )
       }
      
       render(){
        
        
        return(
          <View>
            <HeaderBar title={'Cart'} cartItems={this.state.data.length} nav={this.props.navigation}/>
            {!this.state.data.length ? <EmptyComponent />:
            <ScrollView style={{backgroundColor:'#F0F0F0'}}>
              <BookItem item={this.state.data} sign={'-'} cart={(data)=>{this.cart(data)}} /> 
            </ScrollView>
            } 
          </View>

        )
    }
  }
