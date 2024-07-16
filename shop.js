import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

export function Shop() {
  return (
    <View style= {styles.fir}>
    <SafeAreaView >
    <View>
    


    <View>
    <TouchableOpacity onPress={()=>console.log("Cart pressed")}>
        <Image source={require("./assets/shopping-cart.png")} style={styles.img2}/>
        </TouchableOpacity>
    </View>
    
    <View style={styles.obj}>
        <Image source={require("./assets/pngwing.com.png")} style={styles.first} />
        </View>
        <View style={styles.texts}>
        <View>
            <Text style={styles.tzt}>Ashdown bass combo speaker</Text>
            </View>
           <View style={styles.price}>
            <Text style={styles.cash}>
                NGN 300,000
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
    first:{
      height:400,
      width:300,
      margin:10,
    },
    img1:{
        height:50,
        width:50,
        backgroundColor:"#68e7f0",
        borderRadius:50,
        margin:20,
        
    },
    fir:{
        flex:1,
        backgroundColor:"gray"
    },
    img2:{
        height:50,
        width:50,
        backgroundColor:"#68e7f0",
        borderRadius:50,
       marginLeft:340,
      
        
        
        
    },
    obj:{
        alignItems:"center"
    },
    tzt:{
        fontSize:20,
        fontWeight:"600",
        fontStyle:"italic",
       
    },
    texts:{
        marginLeft:20,
        
        width:290,
        borderRadius:5
    },
    price:{
        marginTop:40,
    },
    cash:{
        fontSize:25,
        fontWeight:"600"
    },
    off:{
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

/*img 1
<View>
    <TouchableOpacity>
    <Image source ={require("./assets/back (1).png")} style={styles.img1} />
    </TouchableOpacity>
    </View>
   */