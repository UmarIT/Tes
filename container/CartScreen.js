import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Products from '../Components/Products'
import { connect } from 'react-redux'
const CartScreen = (props) => {
  return (
    <View style={styles.container}>
      {props.cartItems.length>0 ?
       <Products
        products={props.cartItems}
        onPress={props.removeItem}
        />
       : <Text>No item in this Cart</Text>
    }
      
    
    </View>
  )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
       removeItem:(product) => dispatch({type:'REMOVE_FROM_CART',payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({

     container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
     }
})