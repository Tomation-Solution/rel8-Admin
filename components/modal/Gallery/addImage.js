import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import RoundedButton from '../../button/RoundedButton';
import ImageUpload from '../../input/imageUpload';
import InputField from '../../input/TextField';


export default function AddImage(props) {

    const [name, setName] = useState(null)
    const [document, setDocument] = useState(null)
    const [link, setLink] = useState(null)
    // const [phone, setPhone] = useState(null)

  return (
    <View style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add Image</Text>
        </View>
        {/* <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text> */}
        
        <InputField label='Title' setText={setName} />
        <InputField label='Link url' setText={setLink} />
        <View>
            <ImageUpload label='upload Image' isImage document={document} setDocument={setDocument}/>
        </View>


        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>props.setVisible(false)}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </View>
  );
}
