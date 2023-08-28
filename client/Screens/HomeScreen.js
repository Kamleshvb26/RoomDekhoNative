import React, { useState } from "react";
import { View } from "react-native";
import Card from "../component/Card";
import { ScrollView } from "react-native";
import LowerNavigation from "../component/LowerNavigation";



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