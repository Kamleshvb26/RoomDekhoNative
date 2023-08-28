import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ViewDetail = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>Bungalow Name</Text>
        <Text style={styles.priceText}>Price: $500,000</Text>
        <Text style={styles.ownerText}>Owner: John Doe</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          eget consectetur justo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam eget consectetur justo.
        </Text>
        <Text style={styles.locationText}>Location: New York, USA</Text>
        {/* Add more details as needed */}
      </View>


        <TouchableOpacity onPress={()=>{navigation.navigate('ImageStorage')}} ><Text> Click</Text></TouchableOpacity>
      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:35
  },
  image: {
    height: 300,
    width: '98%',
    marginLeft:4
  },
  detailsContainer: {
    padding: 15,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  priceText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fe7163',
  },
  ownerText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#888',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  locationText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ViewDetail;
