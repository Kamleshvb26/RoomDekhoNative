import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// import LoginSVG from '../assets/Login.svg';
// import GoogleSVG from '../assets/Google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';


async function save(key, value) {
  try{
    // console.log(key,value);
    await SecureStore.setItemAsync(key, value)

  }
  catch(error){
    console.error("Trouble in saving token ", error);
  }
 
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    console.log('No values stored under that key.');
  }
}

const LoginScreen = ({ navigation }) => {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.43.151:5000/login", formData);
      console.log("Login successful", response.data);
      save("token",response.data.token);
      // console.log("here")
      getValueFor("token");
      // Handle success, navigate to another screen, show a success message, etc.
    } catch (error) {
      console.error("Login failed", error);
      // Handle error, show an error message, etc.
    }
  };

  return (





    <SafeAreaView style={{ flex: 1, justifyContent: 'center', paddingTop: 10 }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>

          <Image source={require('../assets/R.jpeg')}
            style={{ width: 250, height: 250 }} />
        </View>

        <Text
          style={{
            // fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>


        {/* <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        /> */}

        {/* <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => { }}
        /> */}
        <View style={style.inputfield}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />

          <TextInput
            // style={styles.input}
            value={formData.email}
            placeholder={"Email"}
            onChangeText={(text) => handleChange("email", text)}
            autoCapitalize={"none"}
          />
        </View>


        <View style={style.inputfield}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            // style={styles.input}
            value={formData.password}
            placeholder={"Password"}
            onChangeText={(text) => handleChange("password", text)}
            autoCapitalize={"none"}
            secureTextEntry
          />
        </View>



        <CustomButton label={"Login"} onPress={() => {handleLogin()}} />






        <TouchableOpacity onPress={() => {
          navigation.navigate('Home')
        }}
          style={{ alignSelf: 'center' }} >
          <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Skip</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 20 }}>
          Or, login with ...
        </Text>
        <View style={{ flex: 1, alignItems: 'center', marginBottom: 10 }} >
          <TouchableOpacity
            style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
            <AntDesign
              name="google"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <Text>Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
            <AntDesign
              name="facebook-square"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <Text>facebook</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
            <AntDesign
              name="twitter"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <Text>twitter</Text>

          </TouchableOpacity>

        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Register')
          }} >
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Register</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputfield: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});

export default LoginScreen;