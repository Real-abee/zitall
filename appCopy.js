import {  View } from 'react-native'
import { Shop } from './shop'
import { StyleSheet } from 'react-native'
import {Login} from './myScreens/login'
import {Profile} from './myScreens/profile'
import {Product} from './myScreens/product'
import{useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect } from 'react'
import navigator, { StackNavigator } from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded,error] = useFonts({
    'InterTight-Bold': require('./assets/fonts/InterTight-Bold.ttf'),
    'MadimiOne-Regular': require('./assets/fonts/MadimiOne-Regular.ttf')
  });

useEffect(()=>{
  if (loaded||error){
   SplashScreen.hideAsync();
  }},[loaded,error]);

  if(!loaded && !error)
  {return null;}

  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </View>
  );
}
