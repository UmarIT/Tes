import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View
    style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}
    >
      <View
      style={{
        margin:40
      }}>
      <Button
    title='Buy Fruits'
    onPress={() => navigation.navigate('ElectronicsScreen')} 
    
    />
      </View>
   
     <Button
    title='Buy Vegitables'
    onPress={() => navigation.navigate('BookScreen')} 
    />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})