import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
 export const  handleLogin= async({username, password})=>{
    const validUsername= 'Test' //sample user details hardcoded for demo purpose
    const validPassword= 'password123'

   if(username=== validUsername && password=== validPassword){
      const user= {username:validUsername}
      const jsonData1 = JSON.stringify(user)
      console.log('inside if')
      try {
         await AsyncStorage.setItem('jsonData',jsonData1)
         console.log(jsonData1)
         return true
      } catch(e) {
         return false
      }
   }
   return false
}