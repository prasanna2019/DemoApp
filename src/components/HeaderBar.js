import {Header, Badge} from 'react-native-elements';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
export default HeaderBar=({title, cartItems, nav, data})=>{
    
    return(
        <Header
            containerStyle={{height:70}}
            backgroundColor='#f8f8ff'
            centerComponent={ <Text style={{fontWeight: 'bold', fontSize:20}}>{title}</Text>}
            rightComponent={<CartComponenet items={cartItems} navigation={nav} data={data}/>}
        />
    )
}

export const CartComponenet=({items, navigation, data})=>{
    console.log(navigation)
    //navigation.navigate('Cart')
    return(
        <TouchableOpacity style={{height:'80%', width:'90%', paddingBottom:'15%', marginTop:'0%'}}  onPress={()=>{navigation.navigate('Cart',{data:data})}}> 
        { items != 0 ? 
            <Badge status="success"value={items} />
         :<View></View>}
            <Image style={{height:'100%', width:'50%', marginRight:'25%'}} source={require('../assets/shopping-cart.jpg') } />
           
        </TouchableOpacity>
    )
}