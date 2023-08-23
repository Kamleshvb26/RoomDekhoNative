

import React, { useState } from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from "../component/Card";
import { ScrollView } from "react-native";
import LowerNavigation from "../component/LowerNavigation";

const Stack = createNativeStackNavigator();


const HomeScreen = () => {


  return (
    <View style={{ marginTop:40 }}>
      <View style={{}}>

        <LowerNavigation />
      </View>
      <ScrollView >

        <View>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </View>

      </ScrollView>

    </View>

  )

};

export default HomeScreen;