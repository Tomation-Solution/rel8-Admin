import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import RoundedButton from '../../button/RoundedButton';
import InputField from '../../input/TextField';


export default function ScrollableModal(props) {

    const handleSelect=(value)=>{
        props.setVisible(false)
    }
  return (
      <SafeAreaView style={tw`m-auto h-5/6 bg-white py-4 rounded-xl w-10/12`}>
          <View style={tw`px-5 flex-row mt-4 mb-2  justify-around `}>
            <View style={tw`w-10`}></View>
            {/* <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>props.setVisible(false)}/>
            </View> */}
            <Text style={tw`font-bold`}>Choose Language</Text>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Ionicon name='close-circle' color='red' size={23}/>
            </Pressable>
        </View>
    <ScrollView style={tw`m-auto py-2  w-10/12`}>
        <View style={tw`py-2 my-2 mx-5 mb-8`}>
            {props.data && props.data.map((e,index)=>
                <Pressable key={index} onPress={()=>handleSelect(e)} style={tw`border-b border-gray-200 mx-auto w-8/12`}>
                    <Text  style={tw`text-base text-center py-2 text-purple-500`}>{e}</Text>
                </Pressable>
                
                )}
        </View>
       
        
    </ScrollView>
    </SafeAreaView>
  );
}
