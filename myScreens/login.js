import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { NavigationRouteContext } from '@react-navigation/native'

export function Login({navigation}) {

  const pressHandler=()=>{
    navigation.navigate('profile')

  }

  return (
    <View >
    <View style={{alignItems:"center",marginTop:40}}>
      <Text style={{fontSize:40}}>Login</Text>
      </View>
      <View style={{alignItems:"center"}}>
      <View style={{margin:20}}>
        <TextInput placeholder='Enter Email' style={styles.inp1}/>
        </View>
          <View  style={{margin:10}}>  
          <TextInput placeholder='Enter Password' style={styles.inp2}/>
          </View>
          <Button title='Go to Profile' onPress={pressHandler} />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
inp1:{
    borderWidth:1,
    borderStyle:"dashed",
    width:200,
    height:35,
    borderRadius:10
},
inp2:{
    borderWidth:1,
    borderStyle:"dashed",
    width:200,
    height:35,
    borderRadius:10
}
})