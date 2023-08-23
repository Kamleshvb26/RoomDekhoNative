import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

// import LoginSVG from '../assets/Login.svg';
// import GoogleSVG from '../assets/Google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';

const LoginScreen = ({ navigation }) => {
  function handleLogin(){
    axios.get('http://localhost:5000/login',{ })
    .then(res => console.log(res),navigation.navigate('Home'))
    .catch((err) => console.log("err", err))
  }
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


        <InputField
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
        />

        <InputField
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
        />

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

export default LoginScreen;