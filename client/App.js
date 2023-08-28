import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LoginScreen from "./Screens/LoginScreen";
import AddRoomScreen from "./Screens/AddRoomScreen"
import RegisterScreen from "./Screens/RegisterScreen";
import ViewDetail from "./Screens/ViewDetail";
import CreateScreen from "./Screens/CreateScreen"
import UserAccount from "./Screens/UserAccount";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from "./component/Card";

import HomeScreen from "./Screens/HomeScreen";

const Stack = createNativeStackNavigator();


const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // header: () => null,
          contentStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Useraccount"
          component={UserAccount}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="ViewDetail"
          component={ViewDetail}

        />
        <Stack.Screen
          name="AddRoomScreen"
          component={AddRoomScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>

  )



};



export default App;