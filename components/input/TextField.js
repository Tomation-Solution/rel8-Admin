import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function InputField(props) {
  return (
    <View style={tw`mx-5 my-1`}>
        <Text>{props.label}</Text>
      <TextInput
        placeholder={props.label}  
        style={tw `py-2 border-b border-gray-400 `}
        onChangeText={(text)=>props.setText(text)}
      />
     </View>
  );
}
