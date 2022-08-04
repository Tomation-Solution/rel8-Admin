import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

export default function Dropdown(props) {

    const [showList, setShowList] = useState(false)

    const handleSelect =(value)=>{
        props.setSelected(value)
        setShowList(false)
    }

  return (
    <View style={tw`mb-1.5`}>
        <Text style={tw`mx-5 my-2`}>{props.label}</Text>
        <Pressable onPress={()=>setShowList(!showList)} style={tw`bg-gray-100 flex-row justify-between w-8/12 mx-5 p-3 rounded-lg`}>
            <Text>{props.selected ? props.selected.name:`Select ${props.label}`}</Text>
            {showList ?  
            <Ionicon name='remove' size={15} />
            :
            <Ionicon name='add' size={15} />
        }
        </Pressable>
        {showList &&
        <View style={tw`w-7/12 p-2 bg-gray-100 mx-7`}>
            { props.data && props.data.map((e, index)=>
                <Pressable key={index} onPress={()=>handleSelect(e)}>
                    <Text key={index} style={tw`py-1`}>{e.name}</Text>
                </Pressable>
                )
            }
        </View>}
        </View>
  );
}
