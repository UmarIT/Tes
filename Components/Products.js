import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Products = (props) => { 
    const renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <ScrollView>
                <TouchableOpacity
                onPress={() => props.onPress(item)} 
                >               
                <View style={styles.container}>
                <View style={styles.card_template}>
                <Image
                source={item.image}
                style={{
                marginTop:20,
                  width:'100%',
                  height:'100%'
                }}
                />
               <View style={styles.text_container}>
                 <Text style={styles.card_title}>{item.name + " " + item.price}  </Text>
                   <MaterialCommunityIcons
                   name="cart-plus"
                   size={30}
                   />
               </View>
              </View>
              </View>
              </TouchableOpacity>
                </ScrollView>
            )
        })
    }
        return (
            <ScrollView>
            <View style={styles.container}>
                {renderProducts(props.products)}
            </View>
            </ScrollView>
        );
    }

export default Products;

const styles = StyleSheet.create({
    container:{
      margin:30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    
      },
      card_template:{
        width: 250,
        height: 150,
      },
      card_image: {
        width: 250,
        height: 250,
        borderRadius : 10
      },
      text_container:{
        position: "absolute",
        width: 250,
        height: 30,
        bottom:0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10,
        flexDirection:'row',
        justifyContent:"space-between"
        
      },
      card_title: {
         color: "white",
      }
    });
