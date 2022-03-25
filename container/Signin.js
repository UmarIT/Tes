import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
// import { Icon } from 'react-native-elements';
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SignIn = ({ navigation }) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

    const handleSubmit = (email,password) =>{
      if( email === "umarabidit@gmail.com" && password === 'Qwerty@165'){
        
        console.log("Values",values);
      }
      else {
        navigation.navigate('HomeScreen')
      console.log("Error...!!");
      }
    }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <Image
            source={require("../Illustrations/ezgif.com-gif-maker.gif")}
            style={{
              margin: 20,
            }}
          />
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="email"
              size={30}
              color={"#000"}
              style={{
                padding: 10,
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
          </View>
          {errors.email && (
            <Text style={{ fontSize: 15, color: "red", marginBottom: 10 }}>
              {errors.email}
            </Text>
          )}
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="lock"
              size={30}
              color={"#000"}
              style={{
                padding: 10,
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              // placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>
          {errors.password && (
            <Text style={{ fontSize: 15, color: "red", marginBottom: 20 }}>
              {errors.password}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.forgot_button}> Create your Account Sign Up?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handleSubmit}
          
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7faf9",
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
    marginTop: 30,
  },

  inputView: {
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#00716F",
    fontWeight: "bold",
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00716F",
  },
  loginText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
