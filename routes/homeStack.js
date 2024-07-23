import { createStackNavigator } from "@react-navigation/stack";
import {createAppContainer} from "@react-navigation/native"
import { Login } from "../myScreens/login";
import { Products } from "../myScreens/product";
import { Profile } from "../myScreens/profile";

const Stack= createStackNavigator();

export function StackNavigator(){
    return (
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='home' component={Login} options={{headerShown:false,}}/>
        <Stack.Screen name='product' component={Products} options={{headerShown:true,}}/>
        <Stack.Screen name='profile' component={Profile} options={{headerShown:true,}}/>
        
  
        </Stack.Navigator>
    )
}

