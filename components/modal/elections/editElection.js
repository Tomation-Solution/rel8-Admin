import React, {useState} from 'react';
import { View,ScrollView, SafeAreaView,Text, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import CheckButton from '../../button/CheckButton';

import RoundedButton from '../../button/RoundedButton';
import Dropdown from '../../dropdown';
import FileUpload from '../../input/fileUpload';
import InputField from '../../input/TextField';


export default function EditElection(props) {

    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [type, setType] = useState(null)
    const [category, setCategory] = useState(null)
    const [feeName, setFeeName] = useState(null)
    const [feeAmount, setFeeAmount] = useState(null)
    const [locationType, setLocationType] = useState(null)
    const [phone, setPhone] = useState(null)

    const eventTypes=[
        {id:1, name:'Paid'},
        {id:2, name:'Free'},
    ]

    const eventCategories=[
        {id:1, name:'National'},
        {id:2, name:'Chapters'},
        {id:2, name:'Members'},
    ]

    const locationTypes=[
        {id:1, name:'Physical'},
        {id:2, name:'Virtiual'},
        {id:2, name:'Hybrid'},
    ]

  return (
    <SafeAreaView style={tw`m-auto bg-white rounded-xl w-10/12`}>
        <View style={tw`border-b py-2 border-purple-300 my-3 mx-5`}>
            <Text style={tw`font-bold text-lg text-center text-purple-500`}>Add Election</Text>
        </View>
        {/* <Text style={tw`px-5 text-center py-3 text-gray-700`}>Kindly confirm you wish to logout of the application</Text> */}
        <InputField label='Election Name' setText={setName} />
        <InputField label='Date' setText={setAddress} />
        <InputField label='Description' setText={setAddress} />

        <View style={tw`px-5 flex-row mb-4 justify-around `}>
            <View style={tw`w-5/12`}>
                <RoundedButton text='Submit' pressed={()=>props.setVisible(false)}/>
            </View>
            <Pressable onPress={()=>props.setVisible(false)}>
                <Text style={tw`my-auto`}>Cancel</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}
