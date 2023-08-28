import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';





function Card(props) {
  const [token, setToken]=useState("ll");
  const navigation = useNavigation();

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      console.log(result)
      setToken(result);
    } else {
      console.log('No values stored under that key.');
    }
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/201' }}
          style={styles.image}
        />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={styles.icon}
          />  
          <Text style={styles.titleText}>Bungalow Name</Text>
        </View>
        <View style={styles.data}>
          <Text> Nashik, Amruthdham </Text>
          <Text> PIN: 432998  </Text>
          <Text> 40K/month</Text>
        </View>

        <TouchableOpacity
          onPress={async() => {
            // try {
            //   console.log("clicked");
            //   getValueFor("token");
            //   const response = await axios.post("http://192.168.43.151:5000/test", {"token":token});
            //   console.log(" successful", response);
            //   // Handle success, navigate to another screen, show a success message, etc.
            // } catch (error) {
            //   console.error(" failed", error);
            //   // Handle error, show an error message, etc.
            // }
            navigation.navigate('ViewDetail')
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    borderRadius: 10,
    // borderBottomRightRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: '100%',
  },
  contentContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: '#ccc',
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    paddingVertical: 8,
    backgroundColor: '#fe7163',
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  data:{
    marginBottom:5
  }
});

export default Card;
