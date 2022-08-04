import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function HomeListCard(props) {
  return (
    <Pressable onPress={props.pressed} style={tw`border-b border-gray-400 py-2 my-1.5 justify-between flex-row`} >
      <Text style={tw`text-sm`}>{props.name}</Text>
      <Text style={tw`text-xs pr-1 text-gray-700`}>{props.sub}</Text>
     </Pressable>
  );
}
