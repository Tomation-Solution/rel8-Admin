import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { UploadNews } from '../../../connection/news';
import { UploadPublications } from '../../../connection/publications';

import RoundedButton from '../../button/RoundedButton';
import Dropdown from '../../dropdown';
import FileUpload from '../../input/fileUpload';
import ImageUpload from '../../input/imageUpload';
import InputField from '../../input/TextField';


export default function AddPublication(props) {

    const [name, setName] = useState(null)
    const [body, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [reader, setReader] = useState(null)
    const [document, setDocument] = useState(false)

    const data =[
        {name:'Exco'},
        {name:'Committee'},
        {name:'Members'},
]

const submit =()=>{ 
    let formData = new FormData();
    formData.append('name',name)
    formData.append('body',body)
    formData.append('image',{uri: document.uri, name: document.uri.split('/').pop(), type:document.mimeType })
    formData.append('is_exco',false)
    formData.append('is_committe',false)
    formData.append('is_member',true)

    UploadPublications(callback, formData)
}
// formData.append('submission',{uri: document, name: document.split('/').pop(), type:uploadResult.mimeType });


const callback =(res)=>{
    console.log(res)
}
  return (
    <View style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add News</Text>
        </View>
        {/* <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text> */}
        
        <InputField label='Title' setText={setName} />
        <InputField label='Content' setText={setAddress} />
        {/* <InputField label='Date' setText={setPhone} /> */}
        {/* <InputField label='Reader' setText={setEmail} /> */}
        <Dropdown data={data} selected={reader} setSelected={setReader} label='Reader' />
        {/* <InputField label='Image' setText={setName} /> */}
        <View>
            <ImageUpload label='upload Image' isImage document={document} setDocument={setDocument}/>
        </View>

        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>submit()}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </View>
  );
}
