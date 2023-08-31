import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../component/CustomButton';
import * as SecureStore from 'expo-secure-store';

import axios from 'axios';
import { IP } from "../IP";




const AddRoomScreen = () => {
  const [houseName, setHouseName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [images, setImages] = useState([]);

  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      multiple: true,
    });


    if (!result.canceled) {
      setImages([...images, result.uri]);
    }
  };

  const handleSubmit = async () => {
   
    
    try {
      const token = await SecureStore.getItemAsync("token");
      if(token){
        const response = await axios.post(`http://${IP}:5000/addRoom`, {token:token, houseName: houseName, contactDetails: contactDetails, ownerName: ownerName, description: description, address: address, imageUrls: images });
        console.log("Added successfully", response.data);

      }
      else{
        console.log("please login first");
      }
    } catch (err) {
      console.error("Error", err);
    }

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="House/Bungalow Name"
        value={houseName}
        onChangeText={setHouseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Owner Name"
        value={ownerName}
        onChangeText={setOwnerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Details"
        value={contactDetails}
        onChangeText={setContactDetails}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <CustomButton label={"Select Image"} onPress={handleImageSelect} />
      <CustomButton label={"Create"} onPress={handleSubmit} />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit} ></TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
  },
  btn: {

    padding: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
    marginBottom: 10,
  },
});

export default AddRoomScreen;

