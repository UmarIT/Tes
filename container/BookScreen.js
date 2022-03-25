import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { books } from '../Data';
import Products from '../Components/Products';
import { connect } from 'react-redux';
const BookScreen = (props) => {
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}
    >
      <Products products={books}
      onPress={props.addItemToCart} 
      />
    </View>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(BookScreen);


const styles = StyleSheet.create({})