import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ChapterNameButton = (props) => {
  
  return (
    <View style={tw`p-1.5 my-2 w-5/12 justify-between flex-row`} onPress={props.pressed}>
      <Text style={tw`my-auto px-2`}>{props.label}</Text>
    </View>
  )
}

export default ChapterNameButton