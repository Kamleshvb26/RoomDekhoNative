import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
const {ImagePicker, showImagePicker} = require( "react-native-image-picker");

const ImageStorage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  function handleClick() {
    console.log("click");
  }

  const handleImagePick = () => {
    ImagePicker.showImagePicker(
      {
        title: "Select Image",
        cancelButtonTitle: "Cancel",
        takePhotoButtonTitle: "Take Photo",
        chooseFromLibraryButtonTitle: "Choose from Library",
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setSelectedImage(response);
        }
      }
    );
  };

  return (
    <View>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleImagePick}>
          <Text style={styles.picker}>Pick Image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
        )}
      </View>

      <View>
        {/* Use TouchableOpacity for a touchable area */}
        <TouchableOpacity onPress={handleClick}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>UPLOAD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 34,
    backgroundColor: "red",
    marginBottom:40,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  picker:{
    height:30,
    backgroundColor:"#ccc",
    width:189,
    borderWidth:2,
    borderColor:'black',
  },
   container: {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageStorage;
