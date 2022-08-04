import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

const CheckButton = (props) => {
  
  return ( !props.vertical ?
    <TouchableOpacity style={tw`p-1.5 my-2 w-5/12 justify-between flex-row`} onPress={props.pressed}>
      <Text style={tw`my-auto px-2`}>{props.label}</Text>
     
     { props.checked ?
      <Ionicon name='checkbox' style={tw`pr-2`} size={18}/>:
      <Ionicon name='square-outline' style={tw`pr-2`} size={18}/>}
    </TouchableOpacity> :

<TouchableOpacity style={tw`p-1.5 my-0.5 `} onPress={props.pressed}>
<Text style={tw`my-auto  mx-auto`}>{props.label}</Text>

{ props.checked ?
<Ionicon name='checkbox' style={tw`pr-2  mx-auto`} size={18}/>:
<Ionicon name='square-outline' style={tw`  mx-auto`} size={18}/>}
</TouchableOpacity>
  )
}

export default CheckButton