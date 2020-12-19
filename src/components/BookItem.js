import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons';


export default BookItem=({item, sign, cart})=>{
    return(
    <SafeAreaView style={{padding:'2%'}}>
        {
        item.map((val, i) => (
        <ListItem key={i} style={{padding:'1%',  borderRadius: 1}}>
            <Image style={{height:'150%', width:'23%', borderRadius: 8, marginVertical:'10%'}} source={{uri: val.imgUrl}} />
            <ListItem.Content>
            <ListItem.Title style={{fontWeight:'bold'}}>{val.name}</ListItem.Title>
            <Text style={{color:'#989898'}}>{val.author}</Text> 
            </ListItem.Content>
            <Button buttonStyle={{height:'9%', width:'auto', backgroundColor:'#00008B'}} 
             title={sign}
             onPress={(data)=>{cart(val)}}
           
            />
        </ListItem>
        ))
        }
    </SafeAreaView>
    )
}