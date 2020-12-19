import React from 'react';
import {View, Text} from 'react-native';
 export default EmptyComponent=()=>{
     return(
        <View style={{flex:3, marginTop: '10%', alignContent:'center', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:30}}>
        {'No items in the cart'}
        </Text>
        </View>
     )
}