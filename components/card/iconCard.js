import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

export default function IconCard(props) {
  return (
    <View style={tw`${props.bg} px-4 py-6 mx-1 justify-around  w-6/12 rounded-xl `}>
            {props.icon}
            <View>
                <Text style={tw`${props.color} font-bold pb-1 mx-auto text-base`}>{+props.amount}</Text>
                <Text style={tw`${props.color} text-xs text-center`}>{props.description}</Text>
            </View>
            
        </View>
  )
}