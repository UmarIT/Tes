import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const ButtonMain = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    // fontFamily: fonts.Medium,
    color:'#fff',
    textAlign: 'center',
  },
});
