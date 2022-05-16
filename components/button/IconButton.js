import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const IconButton = (props) => {
  return (
    <TouchableOpacity style={tw`${props.bg} p-1.5 my-2 rounded-full`} onPress={props.pressed}>
      {props.icon}
    </TouchableOpacity>
  )
}

export default IconButton