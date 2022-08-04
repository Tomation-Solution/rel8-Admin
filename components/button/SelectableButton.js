import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

const SelectableButton = (props) => {
  return (
    <TouchableOpacity  style={tw`bg-purple-100 flex-row py-2.5 my-2 px-5 rounded-full`} onPress={props.pressed}>
      {props.selected &&props.selected.includes(props.id)&&<Ionicon name='md-checkmark' style={tw`my-auto`} size={17} />}
      <Text style={tw`text-purple-800 text-center`}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default SelectableButton