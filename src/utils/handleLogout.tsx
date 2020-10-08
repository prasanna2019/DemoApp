import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export  const handleLogout= async()=>{
   
    try {
        await AsyncStorage.removeItem('jsonData')
        console.log('delete')
        return false
    } catch(e) {
        return false
    }


}