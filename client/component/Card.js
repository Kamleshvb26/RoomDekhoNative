import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Card(props) {
const navigation = useNavigation();
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
        <TouchableOpacity
          onPress={() => {
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
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
});

export default Card;
