import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function LowerNavigation(props) {
    // const navigation= createNativeStackNavigator
  const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around',}}>
            <TouchableOpacity >
                <AntDesign
                    name="home"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5,alignSelf:'center' }}
                />
                <Text >Home </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign
                    name="search1"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 ,alignSelf:'center'}}
                />
                {/* <Image source={{ uri: 'https://picsum.photos/200' }} style={{ height: 20, width: 20, alignSelf: 'center' }} /> */}
                <Text >Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign
                    name="bells"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 ,alignSelf:'center'}}
                />
                {/* <Image source={{ uri: 'https://picsum.photos/200' }} style={{ height: 20, width: 20, alignSelf: 'center' }} /> */}
                <Text >Notification</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{navigation.navigate('Useraccount')}}
             >
                
                <AntDesign 
                    name="user"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5,alignSelf:'center' }}
                />
                <Text  >Account </Text>
                
            </TouchableOpacity>

        </View>
    );
}

export default LowerNavigation;