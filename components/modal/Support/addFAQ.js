import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AddNewFAQ } from '../../../connection/support/faq';

import RoundedButton from '../../button/RoundedButton';
import InputField from '../../input/TextField';


export default function AddFAQ(props) {

    const [name, setName] = useState(null)
    const [body, setBody] = useState(null)
   
    const saveFAQ =()=>{
        AddNewFAQ(callback, {name:name,body:body})
    }

    const callback=(res)=>{
        console.log(res)
        props.setVisible(false)
    }

  return (
    <View style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add FAQ</Text>
        </View>
        {/* <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text> */}
        
        <InputField label='Title' setText={setName} />
        <InputField label='Content' setText={setBody} />
        
        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>saveFAQ()}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </View>
  );
}
