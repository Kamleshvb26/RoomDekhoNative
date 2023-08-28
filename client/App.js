import React from "react";
import LoginScreen from "./Screens/LoginScreen";
import AddRoomScreen from "./Screens/AddRoomScreen"
import RegisterScreen from "./Screens/RegisterScreen";
import ViewDetail from "./Screens/ViewDetail";
import CreateScreen from "./Screens/CreateScreen";
import UserAccount from "./Screens/UserAccount";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import ImageStorage from "./Screens/ImageStorage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      >

        <Stack.Screen name="ImageStorage" component={ImageStorage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Useraccount" component={UserAccount} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewDetail" component={ViewDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
