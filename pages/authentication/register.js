import { View, Text, SafeAreaView,TouchableOpacity,Picker,TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'

export default function Register({navigation}) {
  return (
    <SafeAreaView style={tw`h-full`}>
        <View style={tw`my-auto`}>
    {/* <Image style={tw`mx-auto my-8`} source={require('../images/Logo/ANNILogo.png')}/> */}
        <View style={tw`mx-10`}>
        <Text style={tw`text-base font-bold`}>Register</Text>
            <Text>Input details to set up admin account</Text>
        </View>
     
      <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
        
        <View>
          
            <View style={tw`my-1  border-b border-gray-500`}>
              <Text>Organization Name</Text>
              <TextInput
              placeholder='Organization Name'
              />
          </View>

          <View style={tw`my-2  border-b border-gray-500`}>
              <Text>Organization Tyoe</Text>
              <Picker>
                  <Picker.item label='Alumni' value='Alumni' />
                  <Picker.item label='Club' value='club' />
                  <Picker.item label='Professional Body' value='pro' />
                  <Picker.item label='Real Estate' value='realEstate' />
                  {/* <Picker.item label='Alumni' value='Alumni' /> */}
              </Picker>
              
          </View>
          
            <View style={tw`my-2 border-b border-gray-500`}>
              <Text>Email Address</Text>
              <TextInput
              placeholder='email Address'
              />
            </View>
            <View style={tw`my-2  border-b border-gray-500`}>
              <Text>Password</Text>
              <TextInput
              placeholder='Pasword'
              secureTextEntry={true}
              />
            </View>
        </View>

        
        <View style={tw`mt-4`}>
        <RoundedButton 
          text='Register'
          pressed={()=>navigation.navigate('accountCreated')}/>
          </View>
        {/* <Text>Forgot Password?</Text> */}
        <View style={tw`flex-row mx-auto py-2`}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
              <Text style={tw`text-green-800 font-bold`}> Login</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  </SafeAreaView>
  )
}