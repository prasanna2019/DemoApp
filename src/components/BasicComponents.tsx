import React, { SetStateAction } from 'react';
import { TextInput, Button, TouchableOpacity, Text } from 'react-native';

export const Input=({placeholder,password,onBlur})=>{
    return (
       <TextInput
            style={{borderColor:'#ff4d4d',borderWidth: 0.5, paddingLeft:14, color:'black', fontSize:18}}  
            placeholder={placeholder}
            placeholderStyle={{fontSize:23, color:'grey'}}
            placeholderTextFont= {{fontSize:5}}
            secureTextEntry={password}
            onChangeText={text => onBlur(text)}
            

       />

    )
}

export const Submit= ({name, onPressButton})=>{
    return(
        <TouchableOpacity style={{ backgroundColor:"#ff4d4d", height: 'auto'}} onPress={onPressButton} >
            <Text style={{color:'white', textAlign: 'center', padding:'2%', fontSize:24}}>{name}</Text> 
        </TouchableOpacity>
       
        
    )
} 