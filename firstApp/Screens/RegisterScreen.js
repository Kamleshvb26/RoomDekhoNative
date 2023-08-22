import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import DatePicker from 'react-native-date-picker';



import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';

function RegisterScreen({navigation}) {


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>

                <View style={{ alignItems: 'center' }}>


                    <Image source={require('../assets/R2.webp')}
                        style={{ width: 200, height: 200 }}/>
                </View>

                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Register
                </Text>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent:'space-between' ,marginBottom:20}}>
                    <TouchableOpacity
                        style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
                        <AntDesign
                            name="google"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                        <Text>Google </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
                        <AntDesign
                            name="facebook-square"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                        <Text>facebook</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: 1, margin: 2, flexDirection: 'row' }}>
                        <AntDesign
                            name="twitter"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                        <Text>twitter</Text>

                    </TouchableOpacity>

                </View>
                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 ,fontWeight:700}}>
                    Or, Register with ...
                </Text>

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"

                />
                <InputField
                    label={'Confirm Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"

                />
                <InputField
                    label={'Date'}
                    icon={
                        <AntDesign
                            name="calendar"
                            size={20}
                            color="#666"
                            style={{ marginRight: 7 }}
                        />
                    }
                    keyboardType='numeric'
                />
                <CustomButton label={"Register"} onPress={() => { }} />

                <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Login')
          }} >
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
          </TouchableOpacity>
        </View>





            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;