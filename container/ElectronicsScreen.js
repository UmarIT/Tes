import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {electronics} from '../Data';
import Products from '../Components/Products';
import { connect } from 'react-redux';
const ElectronicsScreen = (props) => {

  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}
    
    >
    <Products products={electronics} onPress={props.addItemToCart} />
    </View>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen);


const styles = StyleSheet.create({})