import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Profile({navigation}) {
  const pressHandler=()=>{
    navigation.navigate('product')
  }


  return (
    <View style={{flex:1}}>
    <View style={{alignItems:"center", margin:20}}>
      <Text style={{fontSize:25}}>User Profile</Text>
      </View>
      <View>
        <Image source={require('../assets/star.png')} style={styles.image}/>
        <Text style={{fontFamily:'InterTight-Bold'}}>User name:</Text>
        <Text style={{fontFamily:'MadimiOne-Regular'}}>User Age:</Text>
        <Text>User Gender:</Text>
        <View>
        <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
        </View>
        <Button title='Go to Products' onPress={pressHandler}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        height:60,
        width:60
    }
})