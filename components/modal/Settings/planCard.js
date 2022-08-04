import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

export default function PlanCard(props) {
  return (
    <View style={tw`${props.border ? ' rounded-xl shadow-sm bg-white border-gray-300':'mt-3'} `}> 
      <View style={tw`${props.headerBg} py-3 rounded-t-xl`}>
          <Text style={tw`text-center  text-white text-base font-bold`}>{props.title}</Text>
      </View>
      <View style={tw`my-2 flex-row mx-auto`}>
          <Text style={tw`text-center text-base font-bold`}> N {props.amount}</Text>
          <Text style={tw`text-center text-xs my-auto`}> / {props.duration}</Text>
      </View>

      {props.data&& props.data.map((e, index)=>
      <View style={tw`flex-row mx-auto`}>
        <Text key={index} style={tw`text-xs`}>{e.name}</Text>
        { e.value ?
        <Ionicon name='md-checkmark' style={tw`my-auto text-green-800`} size={16} />
        :<Ionicon name='ios-close-outline' style={tw`my-auto text-red-800`} size={16} />
        }
      </View>
      )}
      <Pressable  style={tw`bg-purple-600 mx-auto my-2 w-4/6 rounded-lg py-1`}>
        <Text style={tw`text-white text-center`}> Choose Plan</Text>
      </Pressable>
     </View>
  );
}
