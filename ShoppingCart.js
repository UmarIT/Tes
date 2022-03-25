import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from './container/BookScreen';
import HomeScreen from './container/HomeScreen';
import ElectronicsScreen from './container/ElectronicsScreen';
import ShoppingCartIcon from './container/ShoppingCartIcon';
import CartScreen from './container/CartScreen';
import Main from './container/Main';
import SignIn from './container/Signin';
import SignUp from './container/SignUp';

const Stack = createNativeStackNavigator();

const ShoppingCart = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
     screenOptions={{
      //  headerTitle: 'ShoppingApp',
       headerRight: () => (
       <ShoppingCartIcon/>
      ),
     }}
      >
         <Stack.Screen 
          options={{
            headerShown:false
          }}
          name="Main" component={Main} />
      
           <Stack.Screen name="HomeScreen" component={HomeScreen} />
          
             <Stack.Screen 
          options={{
            headerShown:false
          }}
          name="SignUp" component={SignUp} />
               <Stack.Screen 
          options={{
            headerShown:false
          }}
          name="SignIn" component={SignIn} />
         
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="BookScreen" component={BookScreen}
         options={{
          headerTitle:'Vegitables'
        }}
        
        />
        <Stack.Screen name="ElectronicsScreen" component={ElectronicsScreen}
        options={{
          headerTitle:'Fruits'
        }}
        
        />
       <Stack.Screen name="Cart" component={CartScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({})