import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import * as DocumentPicker from 'expo-document-picker';

import RoundedButton from '../../button/RoundedButton';
import InputField from '../../input/TextField';


export default function BatchUpload(props) {

    const [document, setDocument] = useState(null)
    
    const _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
        if(!result.cancelled){
            setDocument(result.uri)
        }
	}

  return (
    <View style={tw`m-auto bg-white rounded-xl p-5 w-10/12`}>
        {/* <View style={tw`bg-purple-100 px-3 py-5 rounded-lg`}>
            <Ionicon name='ios-folder-open' style={tw`text-center text-purple-900`} size={30}/>
            <Text style={tw`text-xs text-center text-purple-900`} >{props.name}</Text>
        </View> */}
        <Pressable onPress={()=>_pickDocument()} style={[tw`${document ? 'pb-1 pt-3' :'py-5'} px-2 my-4 mx-auto  w-11/12 `,{borderWidth:1,borderColor:'#365C2A', borderStyle: 'dashed',
                borderRadius: 1, borderStyle:'dashed',}]}>
                
                <Ionicon name="ios-cloud-upload" style={tw`m-auto`} color={document ? 'purple': 'rgba(0,0,0,0.4)'} size={50}/>

                <Text style={tw`text-center text-gray-400`} numberOfLines={1}>
                    { document ? document:
                        'Upload Members'
                     }
                </Text>
                {
                    document ?
                    <View style={tw`w-6/12 mx-auto`}>
                        <RoundedButton text='Upload'/>
                    </View>:<></>
                }
            </Pressable>

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
