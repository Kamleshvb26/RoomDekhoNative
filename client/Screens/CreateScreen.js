import React, { useState } from "react";
import axios from "axios";
// AIzaSyCMYm5ZqTPp38KOF8YC0WSifvuAm0bq5CI
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const CreateScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={style.safeareastyle}>
            <Text> Create new Data </Text>            

    </SafeAreaView>
  );
};



const style = StyleSheet.create({
    safeareastyle:{
        flex:1,
        justifyContent:"center",
        paddingTop:10
    }
});

export default CreateScreen;
