import React, { useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import * as yup from "yup";

const SignUp = ({ navigation }) => {
  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter at least 2 names")
      .required("Full name is required"),
    phoneNumber: yup
      .string()
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Enter a valid phone number"
      )
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (email,password,confirmPassword) => {
    if( email === "umarabidit@gmail.com" && password === 'Qwerty@165' && confirmPassword === 'Qwerty@165'){
 
      navigation.navigate('HomeScreen')
      console.log("Values",values);
    }
    else {
    console.log("Error...!!");
    }
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={signUpValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../Illustrations/images.png")}
          />

          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="email"
              size={30}
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
              style={{
                padding: 10,
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
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
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="lock"
              size={30}
              style={{
                padding: 10,
              }}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password."
              secureTextEntry={true}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
          </View>
          {errors.confirmPassword && (
            <Text style={{ fontSize: 15, color: "red", marginBottom: 20 }}>
              {errors.confirmPassword}
            </Text>
          )}

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handleSubmit}
            //   disabled={!isValid}
          >
            <Text style={styles.loginText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 70,
  },

  inputView: {
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 10,
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
