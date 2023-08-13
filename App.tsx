import React, {Component} from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Calc from './src/Pages/Calc';



const Stack = createNativeStackNavigator()

export default class App extends Component {
render(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Sobre" component={Sobre}/>
        <Stack.Screen name = "Calc" component={Calc}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
  }
}