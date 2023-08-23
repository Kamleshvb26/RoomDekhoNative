import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import DatePicker from 'react-native-date-picker';

import CustomButton from "../component/CustomButton";
import InputField from "../component/InputField";

function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://192.168.43.84:5000/signup", formData);

      console.log("Signup successful", response.data);
      // Handle success, navigate to another screen, show a success message, etc.
    } catch (error) {
      console.error("Signup failed", error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/R2.webp")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text
          style={{
            // fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        ></View>

        {/* // inputes herre */}

        <View style={style.inputfield}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />

          <TextInput
            // style={styles.input}
            value={formData.name}
            placeholder={"Name"}
            onChangeText={(text) => handleChange("name", text)}
            autoCapitalize={"none"}
          />
        </View>



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

        <CustomButton label={"Register"} onPress={handleSignup} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#AD40AF" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  inputfield: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});

export default RegisterScreen;

{
  /* <InputField
          label={"Email ID"}
          name="email"
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        /> */
}

{
  /* <InputField
          label={"Password"}
          name="password"
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(text) => handleChange("password", text)}
          inputType="password"
        /> */
}
