import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Shop() {
  return (
    <View>
    <SafeAreaView >
    <View>
    
    <View style={styles.img2}>
    <TouchableOpacity onPress={()=>console.log("Cart pressed")}>
        <MaterialCommunityIcons name="cart-variant" size={60} color="#16090b" />
        </TouchableOpacity>
    </View>
    
    <View style={styles.obj}>
        <Image source={{uri:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg"}} 
            style={{width:300, height:300}}
        />
        </View>
        <View style={styles.texts}>
        <View>
            <Text style={styles.tzt}>iphone 15 Pro Max</Text>
            </View>
           <View style={styles.price}>
            <Text style={styles.cash}>
                NGN 3000,000
            </Text>
            </View>
            <View style={styles.offf}>
        <Text style={styles.off}>
            15% OFF
        </Text>
        </View>

        </View>
        <View >
            <Image source={require("./assets/star.png")} style={styles.star}/>

        </View>
        <View style={styles.rate}>
                <Text style={styles.rts}>
                    4.5
                </Text>
            </View>           
            <TouchableOpacity>
            <View style={styles.cart}>
                <Text style={styles.add}>
                    ADD TO CART
                </Text>
                </View>
                </TouchableOpacity>
           
      </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  
    img2:{
       marginLeft:340,    
    },
    obj:{
    padding:20,
        alignItems:"center"
    },
    tzt:{
        fontSize:20,
        fontWeight:"600",
        fontStyle:"italic",
        textAlign:"center"
       
    },
    texts:{
      
    },
    price:{
        marginLeft:10,
        marginTop:40,
    },
    cash:{
        fontSize:25,
        fontWeight:"600"
    },
    off:{
        marginLeft:10,
        color:"red",
        fontSize:30,
    },
    star:{
        height:40,
        width:40,
        marginLeft:340,
        marginTop:-78,
       
        
    },
    offf:{
        marginTop:10
    },
    rate:{
        marginLeft:345,
        marginTop:-25,
       
    },
    rts:{
        marginTop:0,
        fontSize:20
    },
    cart:{
       alignItems:"center",
        marginTop:80,
        backgroundColor:"#68e7f0",
        borderColor:"red",
        borderWidth:2,
        borderRadius:10,
        borderStyle:"dotted"
        
       
    },
    add:{
        fontSize:30,
        fontWeight:"600",
        
    }
})

