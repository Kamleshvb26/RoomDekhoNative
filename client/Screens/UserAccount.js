import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function Untitled(props) {
  return (
    <View style={styles.entire}>
      <View style={styles.imageStack}>
        <Image
          source={{ uri: "https://picsum.photos/id/1005/200/300" }}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>

      <View style={styles.rect2}>
       <Icon name="user" size={20} color="#fff" style={styles.icn2} />

        <Text style={styles.textlink5}> Vishal Pawar</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.scroll}>
          <Text style={styles.textUpper}> How You use Instagram </Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="bell" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}>Notifications</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="clock-o" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}>Time Spent</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scroll}>
          <Text style={styles.textUpper}> Account Settings </Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="user-plus" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Room Dekho +</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="pencil" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Edit Profile</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="bell" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Notification Setting</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="sign-out" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Logout</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scroll}>
          <Text style={styles.textUpper}> Adding your own room </Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="plus" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Add rooms to rent</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Icon name="file-code-o" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Guide</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scroll}>
          <Text style={styles.textUpper}> Feedback and Information 5</Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="wpforms" size={20} color="#000" style={styles.icn} />
            <Text style={styles.textlink2}> Terms,Policies and licenses</Text>
            <Text style={styles.textlink3}> &gt; </Text>
          </TouchableOpacity>
          <View style={styles.supp}>
            <Text> hii</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: "absolute",
  },

  imageStack: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginLeft: 150,
  },

  rect2: {
    width: 212,
    height: 35,
    backgroundColor: "#2874F0",
    marginTop: 15,
    marginLeft: 92,
    padding: 5,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },

  textlink: {
    color: "blue",
  },

  textlink2: {
    fontSize: 17,
  },
  textlink5: {
    color: "#ddd",
    fontSize: 20,
    fontWeight:"500"
  },
  textlink3: {
    color: "black",
    fontSize: 25,
    position: "absolute",
    right: 10,
  },
  scroll: {
    width: 400,
    // height:170,
    paddingBottom: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 5,
    // paddingTop:15
  },

  btn: {
    width: 380,
    height: 40,
    backgroundColor: "white",
    margin: 1,
    paddingLeft: 15,
    display: "flex",
    flexDirection: "row",
    // justifyContent:"space-around",
    alignItems: "center",
  },
  textUpper: {
    color: "#FD8C35",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5,
  },
  container: {
    marginTop: 40,
    backgroundColor: "#eee",
    // height: 800
  },
  supp: {
    marginTop: 300,
  },
  icn: {
    color: "grey",
    marginRight: 6,
  },
  entire:{
    backgroundColor:"#2874F0",
    marginTop:34
  },
  icn2:{
    marginRight:4
  }
});

export default Untitled;
